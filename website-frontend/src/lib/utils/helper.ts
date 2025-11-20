'use client';

import { deleteCookie, getCookie } from "cookies-next";
import axios from "axios";
import { PublicClientApplication } from "@azure/msal-browser";
import Swal from "sweetalert2";
import { AUTH_ENDPOINTS } from "@/lib/api/endpoints";
import { backendUrl } from "@/lib/api/endpoints";

const msalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_APP_AZURE_CLIENT_ID || "",
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_APP_AZURE_TENANT_ID}`,
        redirectUri: process.env.NEXT_PUBLIC_APP_AZURE_REDIRECT_URI,
        failureRedirectUri: "/failed-login",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true, // Set this to true if dealing with IE11 or issues with sessionStorage
    },
};

export const pca = new PublicClientApplication(msalConfig);

export const handle401Error = async () => {
        Swal.fire({
            title: "Session Expired",
            icon: "info",
            iconHtml: "?",
            confirmButtonText: "Ok",
            showCancelButton: false,
            showCloseButton: false,
            }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = `/login`
            }
        });
}

export async function handleSessionExpiration() {
    const appUrl = process.env.NEXT_PUBLIC_APP_APP_URL;

    // Ensure CSRF token is set in Axios for the logout request
    const credentials = {
        jwt_token: getCookie("jwt_token"),
        URL: process.env.NEXT_PUBLIC_APP_APP_URL,
        SessionDomain: process.env.NEXT_PUBLIC_APP_SESSION_DOMAIN,
    };
    axios
        .post(backendUrl+AUTH_ENDPOINTS["logout-without-request"], credentials)
        .then(async (response) => {
            if (response.status === 200) {
                const isMicrosoftLogin = getCookie("msal.isMicrosoftLogin");
                localStorage.removeItem("current");
                // Clear MSAL-related data from localStorage
                clearMSALLocalStorage();
                deleteCookie("access_token");
                deleteCookie("jwt_token", { path: "/", domain: process.env.NEXT_PUBLIC_APP_SESSION_DOMAIN });

                // Remove all items
                sessionStorage.clear();

                if (isMicrosoftLogin === "true") {
                    // Redirect to Microsoft logout URL
                    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=${appUrl}/login`;
                } else {
                    // Clear any session cookies related to CSRF or session before redirect
                    deleteCookie("XSRF-TOKEN");
                    deleteCookie("gtls_session");
                    // Force a reload to ensure new CSRF token generation
                    window.location.href = `/login`;
                }
            } else {
                console.error("Logout error:", response);
            }
        })
        .catch(async (error) => {
            if (error.response && error.response.status === 401) {
                await handle401Error();
            }else{
                console.error(error);
            }
            
        });
}

export function clearMSALLocalStorage() {
    const appDomain = process.env.SESSION_DOMAIN || "";

    // Find all keys in localStorage starting with 'msal' and remove them
    const msalKeys = Object.keys(localStorage).filter((key) =>
        key.startsWith("msal")
    );
    msalKeys.forEach((key) => {
        localStorage.removeItem(key);
    });
    // Find all keys in sessionStorage starting with 'msal' and remove them
    const msalSessionKeys = Object.keys(sessionStorage).filter((key) =>
        key.startsWith("msal")
    );
    msalSessionKeys.forEach((key) => {
        sessionStorage.removeItem(key);
    });

    // Remove the msal.isMicrosoftLogin cookie
    deleteCookie("msal.isMicrosoftLogin", { path: "/", domain: appDomain });
    deleteCookie('jwt_token', { path: "/", domain: appDomain });
}