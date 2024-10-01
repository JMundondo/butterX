import { TwitterAccountWhereInput } from "./TwitterAccountWhereInput";
import { TwitterAccountOrderByInput } from "./TwitterAccountOrderByInput";

export type TwitterAccountFindManyArgs = {
  where?: TwitterAccountWhereInput;
  orderBy?: Array<TwitterAccountOrderByInput>;
  skip?: number;
  take?: number;
};
