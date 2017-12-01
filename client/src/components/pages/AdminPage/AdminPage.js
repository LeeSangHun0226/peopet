import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import AdminContainer from '../../../containers/AdminContainer';

const AdminPage = ({ authed, match, history }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="home" />}
      location="home"
    >
      <AdminContainer />
    </PageTemplate>
  );
};

export default AdminPage;
