import { useState } from "react";
import Panel from "../Panel/Panel.jsx";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm.jsx";
import EducationPanel from "./EducationPanel/EducationPanel.jsx";

export default function Sidebar({
  data,
  onPersonalInfoChange,
  onAddItem,
  onItemChange,
  onDeleteItem,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      index: 0,
      title: "Personal Info",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>account</title>
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
      ),
      children: (
        <PersonalInfoForm
          data={data.personalInfo}
          onChange={onPersonalInfoChange}
        />
      ),
    },
    {
      index: 1,
      title: "Education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
        </svg>
      ),
      children: (
        <EducationPanel
          data={data.education}
          onAddItem={onAddItem}
          onChange={onItemChange}
          onDeleteItem={onDeleteItem}
        />
      ),
    },
  ];

  function togglePanel(index) {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section>
      {panels.map((panel) => {
        const i = panel.index;
        return (
          <Panel
            key={i}
            isActive={activeIndex === i}
            onClick={() => togglePanel(i)}
            title={panel.title}
            icon={panel.icon}
            headingLevel={1}
          >
            {panel.children}
          </Panel>
        );
      })}
    </section>
  );
}
