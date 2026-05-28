import EducationForm from "./EducationForm/EducationForm.jsx";
import PanelDisplay from "../../PanelDisplay/PanelDisplay.jsx";

const initialEducationData = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
  gpa: "",
};

export default function EducationPanel({
  data,
  onAddItem,
  onChange,
  onDeleteItem,
}) {
  return (
    <>
      <PanelDisplay
        sectionData={data}
        sectionName="education"
        defaultItemData={initialEducationData}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
      >
        {(activeItem) => (
          <EducationForm data={activeItem} onFormChange={onChange} />
        )}
      </PanelDisplay>
    </>
  );
}
