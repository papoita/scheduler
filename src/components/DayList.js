import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {
const {days, day, setDay} = props;

  const daysMapped = days.map((item) => {
    
    return (
      <DayListItem
        key={item.id}
        {... item}
        selected={item.name === day}
        setDay={setDay}
      />
    );
  });

  return <ul>{daysMapped}</ul>;
}

export default DayList;
