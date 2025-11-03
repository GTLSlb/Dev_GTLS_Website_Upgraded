import { _axios, handleErrors } from "./axios";
import { PERMISSIONS } from "@/lib/api/endpoints";
import { User } from "../types/auth/auth";
import { UserAppType, UserPermissionType } from "../types/common";
import { gtamUrl } from "./endpoints";

// User Permissions
const GET_USER_PERMISSIONS = async (
  user: User | null,
  Token: string | null,
  APP_ID: string | number
) => {
  try {
    const userObj =
      user != null
        ? user
        : sessionStorage.getItem("user") != null
        ? JSON.parse(sessionStorage.getItem("user") as string)
        : null;
    const tokenKey = Token != null ? Token : sessionStorage.getItem("token");

    if (userObj == null || tokenKey == null) {
      throw new Error("User or Token is null");
    }

    const headers = {
      Authorization: `Bearer ${tokenKey}`,
      UserId: userObj?.UserId,
      AppId: APP_ID,
    };
    const response = await _axios.get(
      gtamUrl + PERMISSIONS["user-permissions"],
      { headers: headers }
    );
    const { data } = response;
    return data as UserPermissionType;
  } catch (error: unknown) {
    throw handleErrors(error);
  }
};

// Allowed Applications
const GET_USER_APP_PERMISSIONS = async (
  user: User | null,
  Token: string | null
) => {
  try {
    const headers = {
      Authorization: `Bearer ${Token}`,
      UserId: user?.UserId,
    };
    const response = await _axios.get(
      gtamUrl + PERMISSIONS["user-apps-permissions"],
      { headers: headers }
    );
    const { data } = response;
    return data as UserAppType[];
  } catch (error: unknown) {
    throw handleErrors(error);
  }
};