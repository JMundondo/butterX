import { AutoResponse as TAutoResponse } from "../api/autoResponse/AutoResponse";

export const AUTORESPONSE_TITLE_FIELD = "id";

export const AutoResponseTitle = (record: TAutoResponse): string => {
  return record.id?.toString() || String(record.id);
};
