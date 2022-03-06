import React from "react";
import DayListItem from "./DayListItem";

function DayList(props) {
const {days, value, onChange} = props;

  const daysMapped = days.map((item) => {
    
    return (
      <DayListItem
        key={item.id}
        {... item}
        selected={item.name === value}
        setDay={() => onChange(item.name)}
      />
    );
  });

  return <ul>{daysMapped}</ul>;
}

export default DayList;
