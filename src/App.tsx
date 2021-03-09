import React from "react";
import {
  NavBar,
  Profile,
  WorkExp,
  PersonalExp,
  Contact,
  LandingPage,
} from "./components";

function App() {
  return (
    <>
      <LandingPage />
      <NavBar />
      <Profile />
      <WorkExp />
      <PersonalExp />
      <Contact />
    </>
  );
}

export default App;
