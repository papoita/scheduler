import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  function updateSpots(num) {
    state.days.forEach((day) => {
      if (day.name === state.day) {
        day.spots -= num;
      }
    });
    return state.days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      if (!state.appointments[id].interview) {
        const days = updateSpots(1);
        setState({
          ...state,
          appointments,
          days,
        });
      } else {
        setState({
          ...state,
          appointments,
        });
      }
    });
  }


  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      const days = updateSpots(-1);
      setState({ ...state, appointments, days });
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      // console.log(all[0].data); // first
      // console.log(all[1].data); // second
      // console.log(all[2].data); // third
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });

    /* const testURL = "http://localhost:8001/api/days";
    axios.get(testURL).then((response) => {
      console.log(response.data);
      setDays([...response.data]);
    });
    */
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
