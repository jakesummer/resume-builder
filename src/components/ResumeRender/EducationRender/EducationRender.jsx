export default function EducationRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="education-resume-item">
      <div>
        <h3 className="resume-item-heading">{d.school}</h3>
        <p className="education-degree">{d.degree}</p>
      </div>
      <div>
        <p>
          {d.startDate} {d.startDate && d.endDate && "-"} {d.endDate}
        </p>
        <p>{d.gpa && "GPA: " + d.gpa}</p>
      </div>
    </div>
  ));
}
