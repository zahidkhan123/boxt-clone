export const CustomButton = ({
  text,
  onClick,
  backgroundColor = "#00A651",
  textColor = "#FFFFFF",
  hoverBackgroundColor = "#008C44",
  hoverTextColor = "#FFFFFF",
  outline = false,
  outlineColor = "#00A651",
  padding = "12px 24px",
  borderRadius = "2px",
  fontSize = "16px",
  width = "auto",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: outline ? "transparent" : backgroundColor,
        color: outline ? outlineColor : textColor,
        border: outline ? `1px solid ${outlineColor}` : "none",
        padding: padding,
        borderRadius: borderRadius,
        fontSize: fontSize,
        width: width,
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontWeight: "500",
        outline: "none",
        "&:hover": {
          backgroundColor: outline ? outlineColor : hoverBackgroundColor,
          color: hoverTextColor,
          transform: "translateY(-2px)",
        },
        "&:active": {
          transform: "translateY(0)",
        },
      }}
    >
      {text}
    </button>
  );
};
