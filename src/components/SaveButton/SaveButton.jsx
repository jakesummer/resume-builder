export default function SaveButton({ onSave }) {
  return (
    <button className="save-btn primary-btn" onClick={() => onSave()}>
      Save
    </button>
  );
}
