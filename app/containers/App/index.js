/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import history from 'utils/history';
import { Admin, Resource } from 'react-admin';
import UserList from 'components/UserList';
import UserCreate from 'components/UserCreate';
import UserView from 'components/UserView';
import UserEdit from 'components/UserEdit';
import dataProvider from '../../dataProvider';

export default function App() {
  return (
    <Admin dataProvider={dataProvider} history={history}>
      <Resource
        name="users"
        list={UserList}
        show={UserView}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}
