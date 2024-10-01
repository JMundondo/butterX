import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TrendWhereUniqueInput } from "../trend/TrendWhereUniqueInput";
import { TwitterAccountWhereUniqueInput } from "../twitterAccount/TwitterAccountWhereUniqueInput";

export type AutoResponseWhereInput = {
  aiResponse?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  mediaUrl?: StringNullableFilter;
  trend?: TrendWhereUniqueInput;
  twitterAccount?: TwitterAccountWhereUniqueInput;
};
