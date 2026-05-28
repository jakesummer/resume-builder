import { useState } from "react";
import EducationForm from "./EducationForm/EducationForm.jsx";
import SaveButton from "../../SaveButton/SaveButton.jsx";

function Education({ school, onEdit, onDelete }) {
  return (
    <div className="education-sidebar">
      <p>{school}</p>
      <button className="edit-education-btn" onClick={onEdit}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Edit</title>
          <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>
      </button>
      <button className="delete-education-btn" onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Delete</title>
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
      </button>
    </div>
  );
}

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
              <Education
                key={d.id}
                school={d.school}
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
