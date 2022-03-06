import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const { setInterviewer, id, name, avatar, selected } = props;
  
  const InterviewerClass = classNames("li", {
    "interviewers__item":true,
    "interviewers__item--selected": selected,
    
  });

  return (
    <li
      onClick={() =>setInterviewer(id)}
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
