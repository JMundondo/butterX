import { SortOrder } from "../../util/SortOrder";

export type TwitterAccountOrderByInput = {
  accessToken?: SortOrder;
  accessTokenSecret?: SortOrder;
  accountName?: SortOrder;
  connected?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  oauthToken?: SortOrder;
  oauthTokenSecret?: SortOrder;
  updatedAt?: SortOrder;
};
