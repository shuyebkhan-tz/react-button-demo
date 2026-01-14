import CustomCard from "./CustomCard";

const Card = ({
  heading,
  buttonText,
  description,
  onClick,
  cardStyle,
  buttonStyle,
}) => {
  return (
    <CustomCard cardStyle={cardStyle}>
      <CustomCard.Header>{heading}</CustomCard.Header>

      <CustomCard.Body>
        {description ||
          "This is a reusable CustomCard component. You can put any content here."}
      </CustomCard.Body>

      <CustomCard.Footer>
        <button
          type="button"
          onClick={onClick}
          style={{
            padding: "8px 16px",
            background: "#2563eb",
            color: "#fff",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            ...buttonStyle, 
          }}
        >
          {buttonText}
        </button>
      </CustomCard.Footer>
    </CustomCard>
  );
};

export default Card;
