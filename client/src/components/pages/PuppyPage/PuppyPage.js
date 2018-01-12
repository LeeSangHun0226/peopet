import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import Puppy from '../../organisms/Puppy';

const PuppyPage = ({ authed, match, history }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="puppy" />}
      location="puppy"
    >
      <Puppy history={history} />
    </PageTemplate>
  );
};

export default PuppyPage;
