"use server"

import { fetchUserData, updateUserData } from "@/apis/user.api"
import { IUser } from "@repo/types"
import { z } from 'zod';

export type ActionResult = {
  success?: boolean;
}

const FormSchema = z.object({
  userId: z.string(),
  name: z.string(),
  numberOfRents: z.number(),
});

const UpdateUser = FormSchema;


export const fetchUserApi = async (userId: string): Promise<IUser | null> => {
  if (!userId) {
    return null
  }
  return fetchUserData(userId)
}
export const updateUserApi = async (prevState: ActionResult, formData: FormData): Promise<ActionResult> => {
  const { userId, name, numberOfRents } = UpdateUser.parse({
    userId: formData.get('userId'),
    name: formData.get('name'),
    numberOfRents: +(formData.get('numberOfRents') || 0),
  });

  try {
    const res = await updateUserData(userId, { name, numberOfRents })
    if (res) {
      return { success: true }
    }
  } catch (error) {
    return { success: false }
  }
  return { success: false }
}
