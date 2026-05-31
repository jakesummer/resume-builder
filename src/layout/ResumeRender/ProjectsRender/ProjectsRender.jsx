export default function ProjectsRender({ data }) {
  return data.map((d) => (
    <div key={d.id} className="projects-resume-item resume-item">
      <div className="projects-info">
        <div>
          <h3 className="resume-item-heading">{d.projectName}</h3>
          <a href="d.linkUrl" className="project-link">
            {d.linkUrl && " | " + (d.linkText ? d.linkText : d.linkUrl)}
          </a>
        </div>
        <div className="align-right">
          <p className="resume-item-heading">{d.tools}</p>
        </div>
      </div>
      <div className="resume-item-description">{d.description}</div>
    </div>
  ));
}
