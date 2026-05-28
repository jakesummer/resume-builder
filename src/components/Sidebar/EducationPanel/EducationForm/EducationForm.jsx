import LabeledInput from "../../../LabeledInput/LabeledInput.jsx";

export default function EducationForm({ data, onFormChange }) {
  function handleFormChange(e) {
    const { name, value } = e.target;
    onFormChange("education", data.id, name, value);
  }

  return (
    <form>
      <LabeledInput
        label="School"
        name="school"
        value={data.school}
        onChange={(e) => handleFormChange(e)}
        required={true}
      />
      <LabeledInput
        label="Degree"
        name="degree"
        value={data.degree}
        onChange={(e) => handleFormChange(e)}
      />
      <LabeledInput
        label="Start Date"
        name="startDate"
        value={data.startDate}
        onChange={(e) => handleFormChange(e)}
      />
      <LabeledInput
        label="End Date"
        name="endDate"
        value={data.endDate}
        onChange={(e) => handleFormChange(e)}
      />
      <LabeledInput
        label="GPA"
        name="gpa"
        value={data.gpa}
        onChange={(e) => handleFormChange(e)}
      />
    </form>
  );
}
