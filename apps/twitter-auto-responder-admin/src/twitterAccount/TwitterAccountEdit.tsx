import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AutoResponseTitle } from "../autoResponse/AutoResponseTitle";

export const TwitterAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
