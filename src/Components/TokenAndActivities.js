import "./TokenAndActivities.css";
import { useEffect, useState } from "react";

import Token from "./Token";
import HistoryAction from "./HistoryAction";

function TokenAndActivities({ hidden }) {
  const [changeSection, setChangeSection] = useState("Token");
  useEffect(() => {
    console.log(changeSection);
  }, [changeSection]);

  return (
    <div className="TokenAndActivities">
      <div className="TAAChangeBar">
        <div
          className={
            changeSection === "Token"
              ? "TAA-Items-active TAA-Items-text"
              : "TAA-Items TAA-Items-text"
          }
          onClick={() => {
            setChangeSection("Token");
          }}
        >
          Токены
        </div>
        <div
          className={
            changeSection === "Action"
              ? "TAA-Items-active TAA-Items-text"
              : "TAA-Items TAA-Items-text"
          }
          onClick={() => {
            setChangeSection("Action");
          }}
        >
          Активность
        </div>
      </div>
      {changeSection === "Token" ? <Token hidden={hidden} /> : ""}
      {changeSection === "Action" ? <HistoryAction /> : ""}
    </div>
  );
}

export default TokenAndActivities;
