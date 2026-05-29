import LabeledInput from "../../../../components/LabeledInput/LabeledInput.jsx";

export default function ProjectsForm({ data, onFormChange }) {
  function handleFormChange(e) {
    const { name, value } = e.target;
    onFormChange("projects", data.id, name, value);
  }

  return (
    <form>
      <LabeledInput
        label="Project Name"
        name="projectName"
        value={data.projectName}
        onChange={handleFormChange}
        required={true}
      />
      <LabeledInput
        label="Link Text"
        name="linkText"
        value={data.linkText}
        onChange={handleFormChange}
      />
      <LabeledInput
        label="Link"
        name="linkUrl"
        value={data.linkUrl}
        onChange={handleFormChange}
      />
      <LabeledInput
        label="Tools Used"
        name="tools"
        value={data.tools}
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
