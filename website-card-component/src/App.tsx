import React from "react";

// Import other components
import { SkillCardContainer } from "./components/CardContainer/SkillCardContainer";
import logo from "./img/React_Logo.svg";

// Entry point
function App() {
  return (
    <div>
      <SkillCardContainer
        logo={logo}
        skillTitle="React"
        skillDuration="2"
        skillSet={[
          "JSX",
          "Components, Props & Fragments",
          "React State & Lifecycle",
          "React Hooks"
        ]}
      />
    </div>
  );
}

export default App;
