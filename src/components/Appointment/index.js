
import React from "react";
import "./styles.scss"



export default function Appointment(props) {
  
  return(
    <article className="appointment">
      {props.time? `Appointment at ${props.time}`: "No Appointments"}
      </article>
  )
}