export default function PaddedWrapper({ children, style }) {
  return (
    <div style={{ padding: "0rem 2rem", ...(style ? style : {}) }}>
      {children}
    </div>
  );
}
