export default function SkillsRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="skills-resume-item resume-item">
      <p>
        <span className="resume-section-heading">
          {d.skillType && d.skillType + ": "}
        </span>
        {d.skillsList}
      </p>
    </div>
  ));
}
