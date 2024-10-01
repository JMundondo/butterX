import { AutoResponseCreateNestedManyWithoutTrendsInput } from "./AutoResponseCreateNestedManyWithoutTrendsInput";

export type TrendCreateInput = {
  autoResponses?: AutoResponseCreateNestedManyWithoutTrendsInput;
  topic?: string | null;
  volume?: number | null;
};
