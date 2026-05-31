export default function Description({ description }) {
  return (
    <ul className="resume-item-description">
      {description
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map((line, index) => (
          <li key={index}>{line}</li>
        ))}
    </ul>
  );
}
