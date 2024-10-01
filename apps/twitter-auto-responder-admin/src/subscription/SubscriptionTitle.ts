import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "subscriptionId";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.subscriptionId?.toString() || String(record.id);
};
