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
        onChange={handleFormChange}
        required={true}
      />
      <LabeledInput
        label="Degree"
        name="degree"
        value={data.degree}
        onChange={handleFormChange}
      />
      <LabeledInput
        label="Start Date"
        name="startDate"
        value={data.startDate}
        onChange={handleFormChange}
      />
      <LabeledInput
        label="End Date"
        name="endDate"
        value={data.endDate}
        onChange={handleFormChange}
      />
      <LabeledInput
        label="GPA"
        name="gpa"
        value={data.gpa}
        onChange={handleFormChange}
      />
    </form>
  );
}
