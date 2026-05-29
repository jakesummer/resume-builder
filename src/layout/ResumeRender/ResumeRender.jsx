import HeaderRender from "./HeaderRender/HeaderRender.jsx";
import EducationRender from "./EducationRender/EducationRender.jsx";
import ExperienceRender from "./ExperienceRender/ExperienceRender.jsx";

export default function ResumeRender({ data }) {
  return (
    <div className="resume">
      <HeaderRender data={data.personalInfo} />
      {data.education.length > 0 && (
        <div className="education-resume-section">
          <h2 className="resume-section-heading">Education</h2>
          <EducationRender data={data.education} />
        </div>
      )}
      {data.experience.length > 0 && (
        <div className="experience-resume-section">
          <h2 className="resume-section-heading">Experience</h2>
          <ExperienceRender data={data.experience} />
        </div>
      )}
    </div>
  );
}
