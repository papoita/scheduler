import React from "react";
import Button from "components/Button";

export default function Confirm (props){
  const {onCancel, onConfirm} = props;
  return(
    <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">Delete the appointment?</h1>
  <section className="appointment__actions">
    <Button danger onClick={onCancel}>Cancel</Button>
    <Button danger onClick={onConfirm}>Confirm</Button>
  </section>
</main>
  )
}