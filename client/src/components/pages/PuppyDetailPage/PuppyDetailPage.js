import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import PuppyDetail from '../../organisms/PuppyDetail';

const PuppyDetailPage = ({ authed, match, history }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="puppy" />}
      location="puppy"
    >
      <PuppyDetail history={history} />
    </PageTemplate>
  );
};

export default PuppyDetailPage;
