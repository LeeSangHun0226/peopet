import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import Breeder from '../../organisms/Breeder';

const BreederPage = ({ authed, match, history, location }) => {
  console.log(location)
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="breeders" />}
      location="breeder"
    >
      <Breeder history={history} match={match} />
    </PageTemplate>
  );
};

export default BreederPage;
