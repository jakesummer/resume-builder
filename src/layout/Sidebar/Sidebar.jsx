import { useState } from "react";
import Panel from "../../components/Panel/Panel.jsx";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm.jsx";
import EducationPanel from "./EducationPanel/EducationPanel.jsx";
import ExperiencePanel from "./ExperiencePanel/ExperiencePanel.jsx";
import ProjectsPanel from "./ProjectsPanel/ProjectsPanel.jsx";

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
      sectionKey: "personalInfo",
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
      sectionKey: "education",
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
          clearEmptyEntries={clearEmptyEntries}
        />
      ),
    },
    {
      index: 2,
      title: "Experience",
      sectionKey: "experience",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18 16H16V15H8V16H6V15H2V20H22V15H18V16M20 8H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V8H4C2.9 8 2 8.9 2 10V14H6V12H8V14H16V12H18V14H22V10C22 8.9 21.1 8 20 8M15 8H9V6H15V8Z" />
        </svg>
      ),
      children: (
        <ExperiencePanel
          data={data.experience}
          onAddItem={onAddItem}
          onChange={onItemChange}
          onDeleteItem={onDeleteItem}
          clearEmptyEntries={clearEmptyEntries}
        />
      ),
    },
    {
      index: 3,
      title: "Projects",
      sectionKey: "projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3,7V5H5V4C5,2.89 5.9,2 7,2H13V9L15.5,7.5L18,9V2H19C20.05,2 21,2.95 21,4V20C21,21.05 20.05,22 19,22H7C5.95,22 5,21.05 5,20V19H3V17H5V13H3V11H5V7H3M7,11H5V13H7V11M7,7V5H5V7H7M7,19V17H5V19H7Z" />
        </svg>
      ),
      children: (
        <ProjectsPanel
          data={data.projects}
          onAddItem={onAddItem}
          onChange={onItemChange}
          onDeleteItem={onDeleteItem}
          clearEmptyEntries={clearEmptyEntries}
        />
      ),
    },
  ];

  function clearEmptyEntries() {
    const sectionKey = panels.find((p) => p.index === activeIndex)?.sectionKey;

    if (
      !sectionKey ||
      sectionKey === "personalInfo" ||
      !data[sectionKey]?.length
    )
      return;

    const emptyEntries = data[sectionKey].filter((entry) =>
      Object.keys(entry).every((key) => key === "id" || !entry[key]),
    );
    emptyEntries.forEach((entry) => {
      onDeleteItem(sectionKey, entry.id);
    });
  }

  function togglePanel(index) {
    clearEmptyEntries();
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
