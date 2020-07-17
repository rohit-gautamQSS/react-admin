/**
 *
 * UserView
 *
 */

import React, { memo } from 'react';
import { TextField, Show, SimpleShowLayout } from 'react-admin';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function UserView(props) {
  return (
    <Show title="User Details" {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="doc.firstName" />
        <TextField label="Last" source="doc.lastName" />
        <TextField label="Age" source="doc.age" />
      </SimpleShowLayout>
    </Show>
  );
}

UserView.propTypes = {};

export default memo(UserView);
