import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import Breeder from '../../organisms/Breeder';

const BreederPage = ({ authed, match, history }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="home" />}
      location="home"
    >
      <Breeder history={history} />
    </PageTemplate>
  );
};

export default BreederPage;
