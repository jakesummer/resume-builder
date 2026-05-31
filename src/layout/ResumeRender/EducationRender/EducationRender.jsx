import "./EducationRender.css";

export default function EducationRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="education-resume-item resume-item">
      <div>
        <h3 className="resume-item-heading">{d.school}</h3>
        <p className="resume-item-subheading">{d.degree}</p>
      </div>
      <div>
        <p className="date resume-item-heading">
          {d.startDate} {d.startDate && d.endDate && "-"} {d.endDate}
        </p>
        <p class="resume-item-subheading gpa">{d.gpa && "GPA: " + d.gpa}</p>
      </div>
    </div>
  ));
}
