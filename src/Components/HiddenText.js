import "./HiddenText.css";

function HiddenText({ hidden, children }) {
  
  return <>{hidden ? String(children).replace(/./g, "..") : children}</>;
}

export default HiddenText;
