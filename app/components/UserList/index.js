/**
 *
 * UserList
 *
 */

import React, { memo } from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function UserList(props) {
  return (
    <List {...props} title="List of users">
      <Datagrid>
        <TextField label="First Name" source="doc.firstName" />
        <TextField label="Last Name" source="doc.lastName" />
        <TextField label="Age" source="doc.age" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

UserList.propTypes = {};

export default memo(UserList);
