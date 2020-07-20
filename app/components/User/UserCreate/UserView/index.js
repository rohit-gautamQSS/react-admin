/**
 *
 * UserView
 *
 */

import React, { memo } from 'react';
import { TextField, Show, SimpleShowLayout } from 'react-admin';

function UserView(props) {
  return (
    <Show title="User Details" {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="firstName" />
        <TextField label="Last" source="lastName" />
        <TextField label="Age" source="age" />
      </SimpleShowLayout>
    </Show>
  );
}

UserView.propTypes = {};

export default memo(UserView);
