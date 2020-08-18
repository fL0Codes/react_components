import * as React from "react";

// Import styöing
import "./SkillCardContainer.css";

// Import other components & interfaces
import {
  SkillCardHeader,
  ISkillCardHeaderProps
} from "../CardHeader/SkillCardHeader";

import {
  SkillCardSection,
  ISkillCardSectionProps
} from "../CardSection/SkillCardSection";

/*
 * Interface of SkillCardContainer extending the other interfaces to make sure, that
 * properties are adapted
 **/

export interface ISkillCardProps
  extends ISkillCardHeaderProps,
    ISkillCardSectionProps {}

// Define structure of SkillCardContainer
export function SkillCardContainer(props: ISkillCardProps) {
  return (
    <div className="skill-card">
      <SkillCardHeader logo={props.logo} alt="React Logo" />
      <SkillCardSection
        skillTitle={props.skillTitle}
        skillDuration={props.skillDuration}
        skillSet={props.skillSet}
      />
    </div>
  );
}
