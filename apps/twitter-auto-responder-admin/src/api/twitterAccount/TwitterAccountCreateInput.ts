import { AutoResponseCreateNestedManyWithoutTwitterAccountsInput } from "./AutoResponseCreateNestedManyWithoutTwitterAccountsInput";

export type TwitterAccountCreateInput = {
  accessToken?: string | null;
  accessTokenSecret?: string | null;
  accountName?: string | null;
  autoResponses?: AutoResponseCreateNestedManyWithoutTwitterAccountsInput;
  connected?: boolean | null;
  oauthToken?: string | null;
  oauthTokenSecret?: string | null;
};
