import { TwitterAccount as TTwitterAccount } from "../api/twitterAccount/TwitterAccount";

export const TWITTERACCOUNT_TITLE_FIELD = "accountName";

export const TwitterAccountTitle = (record: TTwitterAccount): string => {
  return record.accountName?.toString() || String(record.id);
};
