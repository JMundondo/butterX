import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TrendTitle } from "../trend/TrendTitle";
import { TwitterAccountTitle } from "../twitterAccount/TwitterAccountTitle";

export const AutoResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="aiResponse" multiline source="aiResponse" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="mediaUrl" multiline source="mediaUrl" />
        <ReferenceInput source="trend.id" reference="Trend" label="Trend">
          <SelectInput optionText={TrendTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="twitterAccount.id"
          reference="TwitterAccount"
          label="TwitterAccount"
        >
          <SelectInput optionText={TwitterAccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
