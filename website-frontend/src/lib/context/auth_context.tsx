"use client";

import axios, { AxiosResponse } from "axios";
import { LoginResponse, User } from "../types/auth/auth";
import { AUTH_ENDPOINTS } from "../api/endpoints";
import { createContext, useState, useEffect, useContext } from "react";
import { backendUrl } from "../api/endpoints";
import { ReactNode } from "react";
import { getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { handleSessionExpiration } from "../utils/helper";
import { jwtVerify } from 'jose';

export type AuthContextType = {
  user: User | null;
  loading: boolean;
  logged: boolean;
  validating: boolean;
  Token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  checkSession: () => void;
  setLogged: (val: boolean) => void;
  setUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logged: false,
  validating: true,
  Token: null,
  setToken: () => {},
  checkSession: () => {},
  setLogged: () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [Token, setToken] = useState<string | null>(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  const [validating, setValidating] = useState(true);

    async function hasSession(): Promise<boolean> {
    const jwt_token = await getCookie("jwt_token");
    
    if (!jwt_token) {
      return false;
    }

    // Check token structure
    const parts = jwt_token.split('.');
    
    if (parts.length !== 3) {
      console.error('❌ Invalid JWT format - should have 3 parts');
      return false;
    }

    try {
      const secret = new TextEncoder().encode('2zX!8fD@qY6k#eT^mP9w$Jr1&uV5g*Bf3');
      
      await jwtVerify(jwt_token, secret, {
        algorithms: ['HS256'],
      });
      
      return true;
      
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      console.error('❌ 9. Verification FAILED');
      console.error('   - Error name:', error.name);
      console.error('   - Error code:', error.code);
      console.error('   - Error message:', error.message);
      console.error('   - Full error:', JSON.stringify(error, null, 2));
      return false;
    }
  }

  const TOKEN_KEY = "token";
  const USER_KEY = "user";

  const router = useRouter();

  const fetch_user_info = async () => {
    try {

      const jwt_token = getCookie("jwt_token") || null;
      const tokenStr = window.sessionStorage.getItem("token") || null;
      const userStr = window.sessionStorage.getItem("user") || null;

      // Need either JWT token OR (user AND token)
      if (!jwt_token) {
        console.error("No valid authentication credentials found");
        return null;
      }

      // Parse user from sessionStorage if it exists
      const userObj = userStr ? JSON.parse(userStr) : null;

      const res = await axios.post<LoginResponse>(
        backendUrl + AUTH_ENDPOINTS.users,
        {
          jwt_token: jwt_token,
          user: userObj,
          token: tokenStr,
        },
        {
          withCredentials: false,
        }
      );
      return res.data;
    } catch (error: Error | any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      console.error("Failed to fetch user info:", error);
      if(error.response.status === 401) {
        handleSessionExpiration()
      }
      return null;
    }
  };

  useEffect(() => {
    // Define public paths where we shouldn't check session
    const publicPaths = ["/login", "/forgot-password", "/reset-password"];
    const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

    if (!isPublicPath) {
      checkSession();
    } else {
      // On public pages, just set loading to false
      setLoading(false);
      setValidating(false);
    }
  }, [pathname]);
  // In your logout component or auth context
  const handleLogout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);

    setLogged(false);
    setToken(null);
    setUser(null);
  };

  const checkSession = async () => {
    try {
      const storedToken = sessionStorage.getItem(TOKEN_KEY);
      const storedUser = sessionStorage.getItem(USER_KEY);

      if (!storedToken || !storedUser) {
        // No stored session, try to fetch from server
        const data = await fetch_user_info();

        if (data?.token && data?.user) {
          sessionStorage.setItem(TOKEN_KEY, data.token);
          sessionStorage.setItem(USER_KEY, JSON.stringify(data.user));

          setToken(data.token);
          setUser(data.user);
          setLogged(true);
        } else {
          // No session found, redirect to login
          handleLogout();
          router.push("/login");
        }
      } else {
        // Session exists in sessionStorage
        try {
          const parsedUser = JSON.parse(storedUser);

          setToken(storedToken);
          setUser(parsedUser);
          setLogged(true);
        } catch (error) {
          console.error("Failed to parse stored user:", error);
          handleLogout();
        }
      }
    } catch (error) {
      console.error("Session check failed:", error);
      handleLogout();
    } finally {
      setLoading(false);
      setValidating(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logged,
        Token,
        setLogged,
        setToken,
        setUser,
        checkSession,
        loading,
        validating,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an Auth Provider");
  }

  return context;
};