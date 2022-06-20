import "./PaginationArrow.css";

const PaginationArrow = (props) => {
  return (
    <div className="PaginationArrow" onClick={props.onButtonClick}>
      {<props.buttonArrowSide />}
    </div>
  );
};

export default PaginationArrow;
