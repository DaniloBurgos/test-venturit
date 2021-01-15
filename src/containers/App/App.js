import React from 'react';
import './App.css';
import { TemplateApp } from '../../components/TemplateApp/TemplateApp';
import { AppBarProj } from '../../components/AppBarProj/AppBarProj';
import { NavBarProj } from '../../components/NavBarProj/NavBarProj';
import { DashHolder } from '../../components/DashHolder/DashHolder';
import { WelcomeElement } from '../../components/WelcomeElement/WelcomeElement';
import { EventElement } from '../../components/EventElement/EventElement';
import { ActivityElement } from '../../components/ActivityElement/ActivityElement';
import { ProgressComponent } from '../../components/ProgressComponent/ProgressComponent';





function App() {
  return (
    <div className="App">

    <TemplateApp>

      <AppBarProj userName="Clarence Russell" userPhoto="./img/profile.png"></AppBarProj>

      <NavBarProj></NavBarProj>

      <DashHolder>

        <WelcomeElement userName="Clarence" state="Ta-da! You’re up to date." language="English"></WelcomeElement>
        <EventElement></EventElement>

        <ActivityElement></ActivityElement>


        <ProgressComponent></ProgressComponent>

      </DashHolder>

    </TemplateApp>

    </div>
  );
}

export default App;
