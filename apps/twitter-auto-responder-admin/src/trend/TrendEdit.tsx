import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AutoResponseTitle } from "../autoResponse/AutoResponseTitle";

export const TrendEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
