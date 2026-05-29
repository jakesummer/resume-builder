import LabeledInput from "../../../../components/LabeledInput/LabeledInput.jsx";

export default function SkillsForm({ data, onFormChange }) {
  function handleFormChange(e) {
    const { name, value } = e.target;
    onFormChange("skills", data.id, name, value);
  }

  return (
    <form>
      <LabeledInput
        label="Skill Type"
        name="skillType"
        value={data.skillType}
        onChange={handleFormChange}
        required={true}
      />
      <LabeledInput
        label="Skills"
        name="skillsList"
        value={data.skillsList}
        onChange={handleFormChange}
      />
    </form>
  );
}
