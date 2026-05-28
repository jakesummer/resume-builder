import { useState } from "react";
import EducationForm from "./EducationForm/EducationForm.jsx";
import SaveButton from "../../SaveButton/SaveButton.jsx";
import PreviewCard from "../../PreviewCard/PreviewCard.jsx";

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
  const [activeId, setActiveId] = useState(-1); // current id of education data being edited, -1 if none

  function handleNewEducation() {
    const newId = onAddItem("education", initialEducationData);
    setActiveId(newId);
  }

  return (
    <>
      {activeId === -1 &&
        data.length > 0 &&
        data
          .filter((d) => d.school)
          .map((d) => {
            return (
              <PreviewCard
                key={d.id}
                title={d.school}
                onDelete={() => onDeleteItem("education", d.id)}
                onEdit={() => setActiveId(d.id)}
              />
            );
          })}

      {activeId === -1 && (
        <button onClick={handleNewEducation}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>add</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Education
        </button>
      )}

      {activeId !== -1 && (
        <>
          <EducationForm
            data={data.find((d) => d.id === activeId)}
            onFormChange={onChange}
          />
          <SaveButton stateSetter={setActiveId} />
        </>
      )}
    </>
  );
}
