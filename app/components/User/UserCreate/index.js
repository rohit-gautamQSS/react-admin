/**
 *
 * UserCreate
 *
 */

import React, { memo } from 'react';
import {
  NumberInput,
  Create,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

function UserCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput
          label="First Name"
          source="firstName"
          validate={required()}
        />
        <TextInput label="Last Name" source="lastName" validate={required()} />
        <NumberInput label="Age" source="age" validate={required()} />
      </SimpleForm>
    </Create>
  );
}

UserCreate.propTypes = {};

export default memo(UserCreate);
