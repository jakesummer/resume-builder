import ProjectsForm from "./ProjectsForm/ProjectsForm.jsx";
import PanelDisplay from "../../../components/PanelDisplay/PanelDisplay.jsx";

const initialProjectData = {
  projectName: "",
  linkText: "",
  linkUrl: "",
  tools: "",
  description: "",
};

export default function ProjectsPanel({
  data,
  onAddItem,
  onChange,
  onDeleteItem,
  clearEmptyEntries,
}) {
  return (
    <>
      <PanelDisplay
        sectionData={data}
        sectionName="projects"
        defaultItemData={initialProjectData}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
        clearEmptyEntries={clearEmptyEntries}
      >
        {(activeItem) => (
          <ProjectsForm data={activeItem} onFormChange={onChange} />
        )}
      </PanelDisplay>
    </>
  );
}
