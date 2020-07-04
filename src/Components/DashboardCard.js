import React from "react";

import "./DashboardCard.scss";

function DashboardCard(props) {
  return <div className="Card">{props.children}</div>;
}

export default DashboardCard;
