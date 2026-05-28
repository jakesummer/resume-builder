import { useState } from "react";
import SaveButton from "../SaveButton/SaveButton.jsx";
import PreviewCard from "../PreviewCard/PreviewCard.jsx";

export default function PanelDisplay({
  sectionData,
  sectionName,
  defaultItemData,
  onAddItem,
  onDeleteItem,
  children,
}) {
  const [activeId, setActiveId] = useState(-1); // current id of item being edited, -1 if none
  const activeItem = sectionData.find((d) => d.id === activeId);

  const previewCardKey =
    sectionName === "education"
      ? "school"
      : sectionName === "experience"
        ? "organization"
        : "";

  function handleNewItem() {
    const newId = onAddItem(sectionName, defaultItemData);
    setActiveId(newId);
  }

  return (
    <>
      {activeId === -1 &&
        sectionData.length > 0 &&
        sectionData
          .filter((d) => d[previewCardKey])
          .map((d) => {
            return (
              <PreviewCard
                key={d.id}
                title={d[previewCardKey]}
                onDelete={() => onDeleteItem(sectionName, d.id)}
                onEdit={() => setActiveId(d.id)}
              />
            );
          })}

      {activeId === -1 && (
        <button onClick={handleNewItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>add</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          {sectionName[0].toUpperCase() + sectionName.slice(1)}
        </button>
      )}

      {activeId !== -1 && (
        <>
          {children(activeItem)}
          <SaveButton stateSetter={setActiveId} />
        </>
      )}
    </>
  );
}
