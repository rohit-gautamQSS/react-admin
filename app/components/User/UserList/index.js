/**
 *
 * UserList
 *
 */

import React, { memo } from 'react';
import { List, Datagrid, TextField, EditButton, ShowButton } from 'react-admin';

function UserList(props) {
  return (
    <List {...props} title="List of users">
      <Datagrid>
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Age" source="age" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

UserList.propTypes = {};

export default memo(UserList);
