import { AutoResponse } from "../autoResponse/AutoResponse";

export type TwitterAccount = {
  accessToken: string | null;
  accessTokenSecret: string | null;
  accountName: string | null;
  autoResponses?: Array<AutoResponse>;
  connected: boolean | null;
  createdAt: Date;
  id: string;
  oauthToken: string | null;
  oauthTokenSecret: string | null;
  updatedAt: Date;
};
