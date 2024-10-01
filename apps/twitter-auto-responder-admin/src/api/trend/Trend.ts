import { AutoResponse } from "../autoResponse/AutoResponse";

export type Trend = {
  autoResponses?: Array<AutoResponse>;
  createdAt: Date;
  id: string;
  topic: string | null;
  updatedAt: Date;
  volume: number | null;
};
