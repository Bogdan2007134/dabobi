import "./ActionButton.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

function ActionButton() {
  return (
    <>
      <div className="Action">
        <div className="Action-item">
          <ArrowUpOutlined className="Action-Icon" />
          <div className="Action-Title">Отправить</div>
        </div>
        <div className="Action-item">
          <ArrowDownOutlined className="Action-Icon" />
          <div className="Action-Title">Принять</div>
        </div>
      </div>
    </>
  );
}

export default ActionButton;
