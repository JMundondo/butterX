import { AutoResponse } from "../autoResponse/AutoResponse";

export type TwitterAccount = {
  accessToken: string | null;
  accessTokenSecret: string | null;
  accountName: string | null;
  autoResponses?: Array<AutoResponse>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
