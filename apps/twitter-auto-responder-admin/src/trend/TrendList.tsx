import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TrendList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Trends"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="topic" source="topic" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="volume" source="volume" />{" "}
      </Datagrid>
    </List>
  );
};
