import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AutoResponseListRelationFilter } from "../autoResponse/AutoResponseListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TwitterAccountWhereInput = {
  accessToken?: StringNullableFilter;
  accessTokenSecret?: StringNullableFilter;
  accountName?: StringNullableFilter;
  autoResponses?: AutoResponseListRelationFilter;
  connected?: BooleanNullableFilter;
  id?: StringFilter;
  oauthToken?: StringNullableFilter;
  oauthTokenSecret?: StringNullableFilter;
};
