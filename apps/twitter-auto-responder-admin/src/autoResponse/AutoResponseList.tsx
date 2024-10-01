import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TREND_TITLE_FIELD } from "../trend/TrendTitle";
import { TWITTERACCOUNT_TITLE_FIELD } from "../twitterAccount/TwitterAccountTitle";

export const AutoResponseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AutoResponses"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
