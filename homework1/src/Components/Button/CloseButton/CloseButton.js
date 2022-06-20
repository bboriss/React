import "./CloseButton.css";

const CloseButton = (props) => {
  return (
    <div className="CloseButton" onClick={props.onButtonClick}>
      {<props.closeSymbol />}
    </div>
  );
};

export default CloseButton;
