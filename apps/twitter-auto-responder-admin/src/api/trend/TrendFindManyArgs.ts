import { TrendWhereInput } from "./TrendWhereInput";
import { TrendOrderByInput } from "./TrendOrderByInput";

export type TrendFindManyArgs = {
  where?: TrendWhereInput;
  orderBy?: Array<TrendOrderByInput>;
  skip?: number;
  take?: number;
};
