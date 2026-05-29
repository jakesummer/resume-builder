import ExperienceForm from "./ExperienceForm/ExperienceForm.jsx";
import PanelDisplay from "../../../components/PanelDisplay/PanelDisplay.jsx";

const initialExperienceData = {
  organization: "",
  positionTitle: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
};

export default function ExperiencePanel({
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
        sectionName="experience"
        defaultItemData={initialExperienceData}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
        clearEmptyEntries={clearEmptyEntries}
      >
        {(activeItem) => (
          <ExperienceForm data={activeItem} onFormChange={onChange} />
        )}
      </PanelDisplay>
    </>
  );
}
