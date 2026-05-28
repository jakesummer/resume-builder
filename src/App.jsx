import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import ResumeRender from "./components/ResumeRender/ResumeRender.jsx";

const initialData = {
  personalInfo: {
    fullName: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
    github: "",
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialData.personalInfo);
  const [education, setEducation] = useState(initialData.education);
  const [experience, setExperience] = useState(initialData.experience);
  const [projects, setProjects] = useState(initialData.projects);
  const [skills, setSkills] = useState(initialData.skills);

  const data = {
    personalInfo,
    education,
    experience,
    projects,
    skills,
  };

  const arrayStateSetters = {
    education: setEducation,
    experience: setExperience,
    projects: setProjects,
    skills: setSkills,
  };

  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  }

  function addArrayItem(section, item) {
    const setter = arrayStateSetters[section];
    if (!setter) return;

    const newItem = { id: crypto.randomUUID(), ...item };
    setter((prev) => [...prev, newItem]);
  }

  function handleArrayItemChange(section, id, fieldName, value) {
    const setter = arrayStateSetters[section];
    if (!setter) return;

    setter((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, [fieldName]: value } : item;
      });
    });
  }

  function deleteArrayItem(section, id) {
    const setter = arrayStateSetters[section];
    if (!setter) return;

    setter((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <Sidebar
        data={data}
        onPersonalInfoChange={handlePersonalInfoChange}
        onAddItem={addArrayItem}
        onItemChange={handleArrayItemChange}
        onDeleteItem={deleteArrayItem}
      />
      <ResumeRender data={data} />
    </>
  );
}

export default App;
