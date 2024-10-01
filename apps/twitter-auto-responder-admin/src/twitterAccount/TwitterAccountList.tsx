import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TwitterAccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TwitterAccounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="accessToken" source="accessToken" />
        <TextField label="accessTokenSecret" source="accessTokenSecret" />
        <TextField label="accountName" source="accountName" />
        <BooleanField label="connected" source="connected" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="oauthToken" source="oauthToken" />
        <TextField label="oauthTokenSecret" source="oauthTokenSecret" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
