import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AutoResponseTitle } from "../autoResponse/AutoResponseTitle";

export const TrendCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="autoResponses" reference="AutoResponse">
          <SelectArrayInput
            optionText={AutoResponseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="topic" source="topic" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
