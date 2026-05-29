export default function ExperienceRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="experience-resume-item">
      <div className="experience-info">
        <div>
          <h3 className="resume-item-heading">{d.organization}</h3>
          <p className="experience-position-title">{d.positionTitle}</p>
        </div>
        <div>
          <p className="date">
            {d.startDate} {d.startDate && d.endDate && "-"} {d.endDate}
          </p>
          <p className="experience-location">{d.location}</p>
        </div>
      </div>
      <div className="experience-description">{d.description}</div>
    </div>
  ));
}
