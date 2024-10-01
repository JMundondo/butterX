import { TrendWhereUniqueInput } from "../trend/TrendWhereUniqueInput";
import { TwitterAccountWhereUniqueInput } from "../twitterAccount/TwitterAccountWhereUniqueInput";

export type AutoResponseCreateInput = {
  aiResponse?: string | null;
  content?: string | null;
  mediaUrl?: string | null;
  trend?: TrendWhereUniqueInput | null;
  twitterAccount?: TwitterAccountWhereUniqueInput | null;
};
