import { SortOrder } from "../../util/SortOrder";

export type TrendOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
