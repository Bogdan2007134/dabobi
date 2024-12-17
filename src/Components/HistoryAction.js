import { useState } from "react";
import "./HistoryAction.css";

function HistoryAction() {
  const [historyData, setHistoryData] = useState([]);
  return (
    <div className="HistoryAction">
      {historyData.length ? (
        "Не пусто ( Нет функционала )"
      ) : (
        <div className="HA-EmptyAction">Активностей нет.</div>
      )}
    </div>
  );
}

export default HistoryAction;
