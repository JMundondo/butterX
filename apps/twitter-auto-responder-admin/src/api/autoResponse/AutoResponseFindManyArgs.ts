import { AutoResponseWhereInput } from "./AutoResponseWhereInput";
import { AutoResponseOrderByInput } from "./AutoResponseOrderByInput";

export type AutoResponseFindManyArgs = {
  where?: AutoResponseWhereInput;
  orderBy?: Array<AutoResponseOrderByInput>;
  skip?: number;
  take?: number;
};
