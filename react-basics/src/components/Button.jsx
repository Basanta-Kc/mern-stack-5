//varaing = danger = red
// varinat primary = blue (default)
// variant success = green

function Button({ title, handleClick, variant }) {
  const getColor = () => {
    if (variant == "danger") return "red";
    if (variant == "success") return "green";
    return "blue";
  };
  return (
    <button
      style={{
        background: getColor(),
        color: "white",
        marginRight: "5px",
      }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
