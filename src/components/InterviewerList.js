import React from "react";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const { interviewers, interviewer, id, name, avatar } = props;

  const interviewersMapped = interviewers.map((item) => {
    return (
      <InterviewerListItem
        key={item.id}
        {...item}
        selected={item.name === interviewers}
        setInterviewer
      />
    );
  });

  return (
    <section className="interviewers">
      <ul>{interviewersMapped}</ul>;
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  );
}
