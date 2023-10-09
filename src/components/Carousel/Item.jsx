/* eslint-disable react/prop-types */
export default function Item(props) {
  const style1 = {
    width: "501.659px",
    height: "304.579px",
    fontWeight: "50",
    borderRadius: "10px",
    color: "black",
  };
  const style2 = {
    boxShadow:
      " rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  };

  if (window.innerWidth <= 480) {
    style1.width = "400px";
    style1.height = "200px";
  }

  return (
    <div style={{ ...style1, ...style2 }}>
      <img
        src={props.url}
        alt={props.name}
        style={{
          height: "100%",
          width: "100%",
          margin: "0",

          borderRadius: "10px",
        }}
      />
    </div>
  );
}
