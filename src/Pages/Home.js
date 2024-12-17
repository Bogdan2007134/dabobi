import "./Home.css";
import HeaderBar from "../Components/HeaderBar";
import ActionButton from "../Components/ActionButton";
import TokenAndActivities from "../Components/TokenAndActivities";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";
import HiddenText from "../Components/HiddenText";
import localData from "../localData.json";

function Home() {
  const [hidden, setHidden] = useState(true);
  const setInfo = () => {
    if (localData && localData.length > 0) {
      localData.map((item) => {
        if (item.currencyName === "ETH") {
          return `${(item.balance / Math.pow(10, item.decimals)).toFixed(3)} ${
            item.currencyName
          }`;
        }
        return "sds";
      });
    } else {
      return "No data available";
    }
  };
  return (
    <div className="Home">
      <HeaderBar hidden={hidden} />
      <div className="HMain-info">
        <div className="HMain-info-title">
          <HiddenText hidden={hidden}>
            {localData && localData.length > 0
              ? localData.map((item) => {
                  if (item.currencyName === "ETH") {
                    return `${(
                      item.balance / Math.pow(10, item.decimals)
                    ).toFixed(3)} ${item.currencyName}`;
                  }
                  // return "sds";
                })
              : "No data available"}
          </HiddenText>
          {hidden ? (
            <EyeInvisibleFilled
              onClick={() => {
                setHidden(false);
              }}
            />
          ) : (
            <EyeFilled
              onClick={() => {
                setHidden(true);
              }}
            />
          )}
        </div>
        <HiddenText hidden={hidden}>
          <div className="HMain-info-desc">+0,00 $ (+0.00%)</div>
        </HiddenText>
      </div>
      <ActionButton />
      <TokenAndActivities hidden={hidden} />
    </div>
  );
}

export default Home;
