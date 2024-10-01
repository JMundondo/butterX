import { AutoResponseUpdateManyWithoutTrendsInput } from "./AutoResponseUpdateManyWithoutTrendsInput";

export type TrendUpdateInput = {
  autoResponses?: AutoResponseUpdateManyWithoutTrendsInput;
  topic?: string | null;
  volume?: number | null;
};
