import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { setInterviewer, interviewers, interviewer } = props;

  const interviewersMapped = interviewers.map((item) => {
    return (
      <InterviewerListItem
        key={item.id}
        {...item}
        selected={item.id === interviewer}
        setInterviewer={setInterviewer}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list" >{interviewersMapped}</ul>
    </section>
  );
}
