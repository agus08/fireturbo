import { db } from "../configs/firebase.config";
import { IUser } from "@repo/types"

const usersCollection = db.collection('users');

export const updateUserData = async (userId: string, data: Partial<IUser>) => {
  const userRef = usersCollection.doc(userId);
  await userRef.set(data, { merge: true });
  return { id: userId, ...data };
};

export const fetchUserData = async (userId: string) => {
  const userDoc = await usersCollection.doc(userId).get();
  if (!userDoc.exists) {
    throw new Error('User not found');
  }
  return { id: userDoc.id, ...userDoc.data() } as IUser;
};