/**
 *
 * UserEdit
 *
 */

import React, { memo } from 'react';
import { NumberInput, Edit, SimpleForm, TextInput } from 'react-admin';

function UserEdit(props) {
  return (
    <Edit title="Update User" {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput label="Age" source="age" />
      </SimpleForm>
    </Edit>
  );
}

UserEdit.propTypes = {};

export default memo(UserEdit);
