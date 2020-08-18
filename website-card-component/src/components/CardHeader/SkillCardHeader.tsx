import * as React from "react";

// Interface of SkillCardHeader
export interface ISkillCardHeaderProps {
  logo: string;
  alt?: string;
}

// Define structure of skill card header
export function SkillCardHeader(props: ISkillCardHeaderProps) {
  return (
    <header className="skill-card__header">
      <img className="skill-card__icon" src={props.logo} alt={props.alt} />
    </header>
  );
}
