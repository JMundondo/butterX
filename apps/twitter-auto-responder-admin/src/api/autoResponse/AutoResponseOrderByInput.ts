import { SortOrder } from "../../util/SortOrder";

export type AutoResponseOrderByInput = {
  aiResponse?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mediaUrl?: SortOrder;
  trendId?: SortOrder;
  twitterAccountId?: SortOrder;
  updatedAt?: SortOrder;
};
