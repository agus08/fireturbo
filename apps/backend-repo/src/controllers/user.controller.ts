import { Request, Response } from 'express';
import { fetchUserData, updateUserData } from '../models/user.models';

export const updateUserDataController = async (req: Request, res: Response) => {
  try {
    const { userId, ...data } = req.body;
    const updatedUser = await updateUserData(userId, data);
    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchUserDataController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'Invalid userId' });
    }
    const userData = await fetchUserData(userId);
    res.status(200).json(userData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};