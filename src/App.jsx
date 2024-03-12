import data from "./data.json";
import Card from "./components/Card";

import { useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState(data);
  console.log(jobs);

  return (
    <>
      <header className="header"></header>
      <main className="main-container">
        <div className="cards-container">
          {jobs.map((job) => {
            const tags = [job.role, job.level, ...job.languages, ...job.tools];
            return (
              <Card
                logo={job.logo}
                key={job.id}
                company={job.company}
                contract={job.contract}
                featured={job.featured}
                newLabel={job.new}
                position={job.position}
                postedAt={job.postedAt}
                location={job.location}
                tags={tags}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
