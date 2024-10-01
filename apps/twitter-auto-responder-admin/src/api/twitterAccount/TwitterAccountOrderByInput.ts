import { SortOrder } from "../../util/SortOrder";

export type TwitterAccountOrderByInput = {
  accessToken?: SortOrder;
  accessTokenSecret?: SortOrder;
  accountName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
