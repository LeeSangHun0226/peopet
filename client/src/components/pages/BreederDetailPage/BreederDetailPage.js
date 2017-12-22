import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import BreederDetail from '../../organisms/BreederDetail';

const BreederDetailPage = ({ authed, match, history }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="breederDetail" />}
      location="breederDetail"
    >
      <BreederDetail match={match} />
    </PageTemplate>
  );
};

export default BreederDetailPage;
