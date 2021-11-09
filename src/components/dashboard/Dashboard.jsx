import React from 'react';
import { DashboardMain } from './DashboardStyles';
import Header from './header/Header.jsx';
import MainContent from './main-content/MainContent.jsx';

const Dashboard = () => {
  return (
    <DashboardMain>
      <Header />
      <MainContent />
    </DashboardMain>
  );
};

export default Dashboard;
