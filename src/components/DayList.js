import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {
const {days, day, setDay} = props;

  const daysMapped = days.map((item) => {
    
    return (
      <DayListItem
        key={item.id}
        name={item.name}
        spots={item.spots}
        selected={item.name === day}
        setDay={setDay}
      />
    );
  });

  return <ul>{daysMapped}</ul>;
}

export default DayList;
