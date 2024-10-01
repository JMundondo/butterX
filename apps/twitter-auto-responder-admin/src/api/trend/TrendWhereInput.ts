import { AutoResponseListRelationFilter } from "../autoResponse/AutoResponseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TrendWhereInput = {
  autoResponses?: AutoResponseListRelationFilter;
  id?: StringFilter;
  topic?: StringNullableFilter;
  volume?: IntNullableFilter;
};
