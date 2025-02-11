import { IUser } from "@repo/types";
import http from "./http";
import { cookies } from "next/headers";

export const fetchUserData = async (userId: string): Promise<IUser> => {
  const token = (await cookies()).get('AuthToken.id')?.value
  const response = await http().get<IUser>(`/fetch-user-data`, {
    params: { userId },
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
};

export const updateUserData = async (userId: string, data: Partial<IUser>): Promise<IUser> => {
  const token = (await cookies()).get('AuthToken.id')?.value
  const response = await http().post(`/update-user-data`, { userId, ...data }, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return response.data;
};