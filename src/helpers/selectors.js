export function getAppointmentsForDay(state, day) {
  if (!state || !day) {
    return [];
  }

  const selectedDay = state.days.find((eachDay) => eachDay.name === day);
  if (!selectedDay) {
    return [];
  }

  const appointmentsForDay = selectedDay.appointments.map(eachAppointmentId => state.appointments[eachAppointmentId])
  if(!appointmentsForDay){
    return [];
  }

  return appointmentsForDay;

}

export function getInterviewersForDay(state, day) {
  if (!state || !day) {
    return [];
  }

  const selectedDay = state.days.find((eachDay) => eachDay.name === day);
  if (!selectedDay) {
    return [];
  }

  const interviewersForDay = selectedDay.interviewers.map(eachInterviewerId => state.interviewers[eachInterviewerId])
  if(!interviewersForDay){
    return [];
  }

  return interviewersForDay;

}






 export function getInterviewsForDay(state, interview) {

  if (!state || !interview) {
    return null;
  }
//access interviewer obj in state then : state.interviewers[interview.interviewer] === interviewer
//
  const newInterview = {"student": interview.student, "interviewer": state.interviewers[interview.interviewer] }

  return newInterview;



}

