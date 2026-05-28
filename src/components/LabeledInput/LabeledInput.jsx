export default function LabeledInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholderText,
  required = false,
}) {
  const InputTag = type === "textarea" ? "textarea" : "input";

  return (
    <div className="labeled-input">
      <label htmlFor={name}>{label}</label>
      <InputTag
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
