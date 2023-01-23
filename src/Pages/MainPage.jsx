import React from 'react';
import { menuItems } from '../Data/componentsData';
import Home from './Home';
import SideMenu from '../Components/SideMenu';
import Header from '../Components/multilevel-dropdown-menu/Header';

const MainPage = () => (
  <>
    <Header />
    <SideMenu menuItem={ menuItems }/>
    <Home/>
  </>
);

export default MainPage;