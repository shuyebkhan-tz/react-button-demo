const CustomCard = ({
  children,
  cardStyle = {},
}) => {
  return (
    <div
      style={{
        width: "320px",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        ...cardStyle, 
      }}
    >
      {children}
    </div>
  );
};


const CardHeader = ({ children }) => (
  <div style={{ padding: "16px", borderBottom: "1px solid #e5e7eb" }}>
    <h3 style={{ margin: 0 }}>{children}</h3>
  </div>
);

const CardBody = ({ children }) => (
  <div style={{ padding: "16px", color: "#4b5563" }}>
    {children}
  </div>
);

const CardFooter = ({ children }) => (
  <div
    style={{
      padding: "12px 16px",
      borderTop: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "flex-end",
    }}
  >
    {children}
  </div>
);

CustomCard.Header = CardHeader;
CustomCard.Body = CardBody;
CustomCard.Footer = CardFooter;

export default CustomCard;
