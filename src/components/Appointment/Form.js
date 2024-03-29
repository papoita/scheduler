import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";

export default function Form(props) {
  const { student, interviewer, interviewers, onSave, onCancel} = props;

  const [studentName, setStudentName] = useState(student || "");
  const [interviewerId, setInterviewerId] = useState(interviewer || null);
  const [error, setError] = useState("");

  function reset() {
    setStudentName("");
    setInterviewerId(null);
    setError("");
  }

  function cancel() {
    reset();
    onCancel();
  }
//for debugging which part of the function was not being read 
  function validate() {
  //  console.log("this is beginning")
    if (studentName === "") {
      setError("Student name cannot be blank");
   //   console.log("student name is blank")
      return;
    }
    if (!interviewerId) {
      setError("Please ALSO select an interviewer");
    //  console.log("interviewer name is blank")
      return;
    }
   // console.log("this is middle")
    setError("");
    onSave(studentName, interviewerId);
  //  console.log("this is middle")
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={studentName}
            placeholder="Enter Student Name"
            onChange={(event) => setStudentName(event.target.value)}
            data-testid= "student-name-input"
            
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList onChange={setInterviewerId} interviewers={interviewers} value={interviewerId}/>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}
