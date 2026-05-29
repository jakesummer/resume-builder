import SkillsForm from "./SkillsForm/SkillsForm.jsx";
import PanelDisplay from "../../../components/PanelDisplay/PanelDisplay.jsx";

const initialSkillsData = {
  skillType: "",
  skillsList: "",
};

export default function SkillsPanel({
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
        sectionName="skills"
        defaultItemData={initialSkillsData}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
        clearEmptyEntries={clearEmptyEntries}
      >
        {(activeItem) => (
          <SkillsForm data={activeItem} onFormChange={onChange} />
        )}
      </PanelDisplay>
    </>
  );
}
