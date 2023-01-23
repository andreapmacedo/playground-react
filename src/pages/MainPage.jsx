import React from 'react';
import { menuItems } from '../Data/componentsData';
import Home from './Home';
import SideMenu from '../components/SideMenu';

const MainPage = () => (
  <>
    <SideMenu menuItem={ menuItems }/>
    <Home/>
  </>
);

export default MainPage;