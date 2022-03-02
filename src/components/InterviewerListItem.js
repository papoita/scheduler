import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const InterviewerClass = classNames("li", {
    "interviewers__item":true,
    "interviewers__item--selected": props.selected,
    
  });

  const { id, name, avatar, selected } = props;

  return (
    <li
      onClick={() =>props.setInterviewer(props.name)}
      className={InterviewerClass}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
}
