export default function SaveButton({ onSave }) {
  return (
    <button className="save-btn" onClick={() => onSave()}>
      Save
    </button>
  );
}
