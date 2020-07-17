/**
 *
 * UserEdit
 *
 */

import React, { memo } from 'react';
import { NumberInput, Edit, SimpleForm, TextInput } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function UserEdit(props) {
  return (
    <Edit title="Update User" {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="doc.firstName" />
        <TextInput label="Last Name" source="doc.lastName" />
        <NumberInput label="Age" source="doc.age" />
      </SimpleForm>
    </Edit>
  );
}

UserEdit.propTypes = {};

export default memo(UserEdit);
