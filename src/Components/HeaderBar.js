import "./HeaderBar.css";
import { CopyFilled, CopyOutlined, MoreOutlined } from "@ant-design/icons";
import HiddenText from "./HiddenText";
import { useEffect, useState } from "react";
import { getAccount } from "../Mechanism/LocalData";

function HeaderBar({ hidden }) {
  const [Account, setAccount] = useState({});
  const [onHover, setOnHover] = useState(false);
  const [onClick, setClick] = useState(false);

  function truncateText(text) {
    console.log(text);
    if (text) {
      if (text.length <= 8) {
        return text;
      }
      const start = text.slice(0, 4);
      const end = text.slice(-6);

      return `${start}...${end}`;
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(Account.AccountID);
    setClick(true);
  };

  const handleMouseEnter = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setOnHover(false);
    if (onClick) {
      setClick(false);
    }
  };
  useEffect(() => {
    getAccount(setAccount);
  }, []);

  return (
    <div className="HeaderBar">
      <div className="HBar-Left"></div>
      <div className="HBar-Center">
        <div className="HBar-NameAccount">{Account.AccountName}</div>
        <div
          className="HBar-IDAccont"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCopy}
        >
          <HiddenText hidden={hidden}>
            {onHover && onClick
              ? "Скопировано"
              : truncateText(Account.AccountID)}
          </HiddenText>
          <div className="HBar-Icon-Copied">
            {onHover && onClick ? <CopyFilled /> : <CopyOutlined />}
          </div>
        </div>
      </div>
      <div className="HBar-Right">
        <MoreOutlined className="HBar-Icon-More" />
      </div>
    </div>
  );
}

export default HeaderBar;
