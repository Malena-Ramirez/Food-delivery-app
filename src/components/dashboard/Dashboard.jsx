import React from 'react';
import { DashboardMain, MainSection } from './DashboardStyles';
import Header from './Header';

const Dashboard = () => {
  return (
    <DashboardMain>
      <Header />
      <MainSection>
        <p>Timeline</p>
      </MainSection>
    </DashboardMain>
  );
};

export default Dashboard;
