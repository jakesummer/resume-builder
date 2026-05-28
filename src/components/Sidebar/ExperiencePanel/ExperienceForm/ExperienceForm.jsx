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
        onChange={handleFormChange}
        required={true}
      />
      <LabeledInput
        label="Title"
        name="positionTitle"
        value={data.positionTitle}
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
        label="Location"
        name="location"
        value={data.location}
        onChange={handleFormChange}
      />
      <LabeledInput
        label="Description"
        name="description"
        type="textarea"
        value={data.description}
        onChange={handleFormChange}
      />
    </form>
  );
}
