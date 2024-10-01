import { Trend } from "../trend/Trend";
import { TwitterAccount } from "../twitterAccount/TwitterAccount";

export type AutoResponse = {
  aiResponse: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  mediaUrl: string | null;
  trend?: Trend | null;
  twitterAccount?: TwitterAccount | null;
  updatedAt: Date;
};
