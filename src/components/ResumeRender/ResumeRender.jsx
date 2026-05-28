import HeaderRender from "./HeaderRender/HeaderRender.jsx";

export default function ResumeRender({ data }) {
  return (
    <div className="resume">
      <HeaderRender data={data.personalInfo} />
    </div>
  );
}
