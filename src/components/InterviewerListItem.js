import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected } = props;


  const InterviewerClass = classNames("li", {
    "interviewers__item":true,
    "interviewers__item--selected": selected,
    
  });

  console.log("here are props", props);
  const setInterviewer = () => {
    if (props.id === id) {
      return {name, avatar};
    }
    return {avatar}
  };

  return (
    <li
      onClick={() => setInterviewer(props.id)}
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
