export default function ExperienceRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="experience-resume-item resume-item">
      <div className="experience-info">
        <div>
          <h3 className="resume-item-heading">{d.organization}</h3>
          <p className="resume-item-subheading">{d.positionTitle}</p>
        </div>
        <div className="align-right">
          <p className="date resume-item-heading">
            {d.startDate} {d.startDate && d.endDate && "-"} {d.endDate}
          </p>
          <p className="resume-item-subheading">{d.location}</p>
        </div>
      </div>
      <div className="resume-item-description">{d.description}</div>
    </div>
  ));
}
