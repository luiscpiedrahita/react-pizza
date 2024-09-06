export default function Close({ isClosed, setIsClosed }) {
  return (
    <div
      style={{ position: "absolute" }}
      className="close"
      onClick={() => setIsClosed(!isClosed)}
    >
      X
    </div>
  );
}
