import LabeledInput from "../../../LabeledInput/LabeledInput.jsx";

export default function EducationForm({ data, onFormChange }) {
  function handleFormChange(e) {
    const { name, value } = e.target;
    onFormChange("experience", data.id, name, value);
  }

  return (
    <form>
      <LabeledInput
        label="Organization"
        name="organization"
        value={data.organization}
        onChange={(e) => handleFormChange(e)}
        required={true}
      />
      <LabeledInput
        label="Title"
        name="positionTitle"
        value={data.positionTitle}
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
        label="Location"
        name="location"
        value={data.location}
        onChange={(e) => handleFormChange(e)}
      />
      <LabeledInput
        label="Description"
        name="description"
        type="textarea"
        value={data.description}
        onChange={(e) => handleFormChange(e)}
      />
    </form>
  );
}
