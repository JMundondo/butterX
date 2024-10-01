import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AutoResponseListRelationFilter } from "../autoResponse/AutoResponseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TwitterAccountWhereInput = {
  accessToken?: StringNullableFilter;
  accessTokenSecret?: StringNullableFilter;
  accountName?: StringNullableFilter;
  autoResponses?: AutoResponseListRelationFilter;
  id?: StringFilter;
};
