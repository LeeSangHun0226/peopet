import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import BreederDetail from '../../organisms/BreederDetail';

const BreederDetailPage = ({ authed, match, location }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="breederDetail" />}
      location="breederDetail"
    >
      <BreederDetail match={match} location={location}/>
    </PageTemplate>
  );
};

export default BreederDetailPage;
