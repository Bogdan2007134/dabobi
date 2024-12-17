import "./Token.css";
import localData from "../localData.json";
import { useState } from "react";
import { RedoOutlined } from "@ant-design/icons";
import HiddenText from "./HiddenText";

function Token({ hidden }) {
  const [sortedBy, setSortedBy] = useState("Имени (A-Z)");
  const sortedData = localData.sort((a, b) => {
    if (sortedBy === "Имени (A-Z)") {
      return a.currencyName.localeCompare(b.currencyName);
    } else {
      return b.currencyName.localeCompare(a.currencyName);
    }
  });

  return (
    <div className="Token">
      <div className="T-Header">
        <div
          className="T-Header-Item"
          onClick={() => {
            if (sortedBy === "Имени (A-Z)") {
              setSortedBy("Имени (Z-A)");
            } else {
              setSortedBy("Имени (A-Z)");
            }
          }}
        >
          Сортировать по {sortedBy}
        </div>
        <div className="T-Header-Item">Импорт</div>
      </div>
      {sortedData.map((item) => {
        return (
          <div className="T-Item" key={item.currencyName}>
            <div className="T-Item-Name">{item.currencyName}</div>
            <div className="T-Item-Balance">
              <HiddenText hidden={hidden}>
                {(item.balance / Math.pow(10, item.decimals)).toFixed(3)}{" "}
                {item.currencyName}
              </HiddenText>
            </div>
          </div>
        );
      })}
      <div className="T-Header">
        <div className="T-Header-Item" style={{ color: "blue" }}>
          <RedoOutlined />
          {"Обновить список"}
        </div>
      </div>
    </div>
  );
}

export default Token;
