import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TREND_TITLE_FIELD } from "../trend/TrendTitle";
import { TWITTERACCOUNT_TITLE_FIELD } from "./TwitterAccountTitle";

export const TwitterAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessToken" source="accessToken" />
        <TextField label="accessTokenSecret" source="accessTokenSecret" />
        <TextField label="accountName" source="accountName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AutoResponse"
          target="twitterAccountId"
          label="AutoResponses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="aiResponse" source="aiResponse" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="mediaUrl" source="mediaUrl" />
            <ReferenceField label="Trend" source="trend.id" reference="Trend">
              <TextField source={TREND_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TwitterAccount"
              source="twitteraccount.id"
              reference="TwitterAccount"
            >
              <TextField source={TWITTERACCOUNT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
