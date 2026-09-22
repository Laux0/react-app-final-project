import React from "react";

export default function FormattedDate(props) {
  let day = props.date.getDay();
  return <p>{`${day} 7:00`}</p>;
}
