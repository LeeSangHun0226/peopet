import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContianer';
import Support from '../../organisms/Support';

const SupportPage = ({ authed }) => {
  return (
    <PageTemplate
      header={<HeaderContainer authed={authed} location="support" />}
      location="support"
    >
      <Support />
    </PageTemplate>
  );
};

export default SupportPage;
