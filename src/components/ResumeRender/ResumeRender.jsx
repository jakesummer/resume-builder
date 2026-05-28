import HeaderRender from "./HeaderRender/HeaderRender.jsx";
import EducationRender from "./EducationRender/EducationRender.jsx";

export default function ResumeRender({ data }) {
  return (
    <div className="resume">
      <HeaderRender data={data.personalInfo} />
      {data.education.length > 0 && (
        <div className="education-resume-section">
          <button onClick={() => console.log(data.education)}>hi</button>
          <h2 className="resume-section-heading">Education</h2>
          <EducationRender data={data.education} />
        </div>
      )}
    </div>
  );
}
