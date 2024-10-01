import { Trend as TTrend } from "../api/trend/Trend";

export const TREND_TITLE_FIELD = "topic";

export const TrendTitle = (record: TTrend): string => {
  return record.topic?.toString() || String(record.id);
};
