import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const{selected, spots, setDay, name}=props;
  const dayClass = classNames("li", {
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  const formatSpots = () => {
    if (spots === 0) {
      return "no spots remaining";
    }
    if (spots === 1) {
      return "1 spot remaining";
    }
    return `${spots} spots remaining`;
  };

  return (
    <li onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
