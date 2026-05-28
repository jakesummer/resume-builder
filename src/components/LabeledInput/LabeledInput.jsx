export default function LabeledInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholderText,
  required = false,
}) {
  return (
    <div className="labeled-input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        placeholder={placeholderText}
        required={required}
      />
    </div>
  );
}
