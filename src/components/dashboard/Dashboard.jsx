import React from 'react';
import { DashboardMain } from './DashboardStyles';
import Header from './Header';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <DashboardMain>
      <Header />
      <MainContent />
    </DashboardMain>
  );
};

export default Dashboard;
