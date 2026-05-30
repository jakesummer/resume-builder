import "./Panel.css";

export default function Panel({
  isActive,
  onClick,
  children,
  title,
  icon,
  headingLevel,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <section className={`panel  ${isActive ? "active" : ""}`}>
      <button onClick={onClick} className="panel-btn">
        <Heading>
          {icon} {title}{" "}
          {isActive ? (
            <svg
              className="panel-open-indicator"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
          ) : (
            <svg
              className="panel-open-indicator"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          )}{" "}
        </Heading>
      </button>
      {isActive && <div className="panel-content">{children}</div>}
    </section>
  );
}
