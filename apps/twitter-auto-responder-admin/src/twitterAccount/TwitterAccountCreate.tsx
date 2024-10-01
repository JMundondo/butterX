import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AutoResponseTitle } from "../autoResponse/AutoResponseTitle";

export const TwitterAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accessToken" source="accessToken" />
        <TextInput label="accessTokenSecret" source="accessTokenSecret" />
        <TextInput label="accountName" source="accountName" />
        <ReferenceArrayInput source="autoResponses" reference="AutoResponse">
          <SelectArrayInput
            optionText={AutoResponseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
