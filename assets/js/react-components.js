function ExperienceBox(props) {
    return (
      <div className="col-4 col-6-medium col-12-small">
        <section className="box style2">
          <img src={props.logo} alt={`${props.company} Logo`} width="100" height="100" />
          <h3 style={{margin: 0}}>{props.company}</h3>
          <h4 style={{margin: 0}}>{props.position}</h4>
          <p className="work-date" style={{margin: 0}}>{props.date}</p>
          <p>{props.location}</p>
          <ul>
            {props.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
  
  function WorkExperience() {
    const experiences = [
      {
        logo: "images/logo/JungTalents.jpeg",
        company: "JUNG TALENTS",
        position: "ICT Business Analyst",
        date: "Feb 2024 - Present",
        location: "Sydney",
        responsibilities: [
          "Collaborated with other stakeholders to understand requirements, design solutions, and contributed to the overall design and architecture of AI-powered applications.",
          "Analysed existing business processes and systems to identify areas for improvement and integration of new technologies.",
          // ... other responsibilities
        ]
      },
      {
        logo: "images/logo/KPMG.png",
        company: "KPMG",
        position: "Data Engineer",
        date: "Nov 2023 - Feb 2024",
        location: "Sydney",
        responsibilities: [
          "Collaborated with cross-functional teams and other stakeholders such as product manager and business analysts to gather requirements for data model development.",
          "Developed code-based ETL/ELT pipelines with performance-optimized data modeling.",
          // ... other responsibilities
        ]
      }
    ];
  
    return (
      <article id="experience" className="wrapper style1">
        <div className="container">
          <header>
            <h2>Work Experience</h2>
          </header>
          <div className="row aln-center">
            {experiences.map((exp, index) => (
              <ExperienceBox key={index} {...exp} />
            ))}
          </div>
        </div>
      </article>
    );
  }
  
  ReactDOM.render(<WorkExperience />, document.getElementById('react-root'));