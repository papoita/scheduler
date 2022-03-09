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
