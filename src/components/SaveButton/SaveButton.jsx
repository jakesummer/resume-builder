export default function SaveButton({ stateSetter }) {
  return (
    <button className="save-btn" onClick={() => stateSetter(-1)}>
      Save
    </button>
  );
}
