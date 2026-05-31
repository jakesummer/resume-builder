import Description from "../../../components/Description/Description.jsx";

export default function ExperienceRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="experience-resume-item resume-item">
      <div className="experience-info resume-item-info">
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
      {d.description && <Description description={d.description} />}
    </div>
  ));
}
