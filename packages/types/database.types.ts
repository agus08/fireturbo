export interface IUser {
  id?: string;
  totalAverageWeightRatings: number;
  numberOfRents: number;
  recentlyActive: number; // epoch time
  name?: string
}