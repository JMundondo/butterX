import { AutoResponseUpdateManyWithoutTwitterAccountsInput } from "./AutoResponseUpdateManyWithoutTwitterAccountsInput";

export type TwitterAccountUpdateInput = {
  accessToken?: string | null;
  accessTokenSecret?: string | null;
  accountName?: string | null;
  autoResponses?: AutoResponseUpdateManyWithoutTwitterAccountsInput;
  connected?: boolean | null;
  oauthToken?: string | null;
  oauthTokenSecret?: string | null;
};
