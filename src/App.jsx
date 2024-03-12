import data from "./data.json";
import Card from "./components/Card";

import { useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState(data);

  let tags = [];

  let jobsWithTags = jobs.filter((job) => {
    let jobValues = Object.values(job).flat();
    return tags.every((tag) => jobValues.includes(tag));
  });

  console.log(jobsWithTags);

  return (
    <>
      <header className="header"></header>
      <main className="main-container">
        <div className="cards-container">
          {jobsWithTags.map((job) => {
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
