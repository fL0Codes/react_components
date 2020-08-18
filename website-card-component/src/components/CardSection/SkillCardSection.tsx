import * as React from "react";

// Define interface of SkillCardSection props
export interface ISkillCardSectionProps {
  skillTitle: string;
  skillDuration: string;
  skillSet: [string?, string?, string?, string?];
}

// Define structure of SkillCardSection
export function SkillCardSection(props: ISkillCardSectionProps) {
  return (
    <div>
      <section className="skill-card__body">
        <h2 className="skill-card__title">{props.skillTitle}</h2>
        <span className="skill-card__duration">
          {props.skillDuration} Jahre Erfahrung
        </span>
        <ul className="skill-card__knowledge">
          {props.skillSet.map((skill) => {
            return <li>{skill}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
