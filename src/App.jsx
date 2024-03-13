import data from "./data.json";
import Card from "./components/Card";

import { useState } from "react";

export default function App() {
  const [filterTags, setFilterTags] = useState([]);

  const jobs = data;

  const jobsWithTags = jobs.filter((job) => {
    let jobValues = Object.values(job).flat();
    return filterTags.every((tag) => jobValues.includes(tag));
  });

  function handleTagClick(e) {
    let chosenTag = e.target.firstChild.data;
    if (filterTags.indexOf(chosenTag) === -1) {
      setFilterTags((currentTags) => [...currentTags, chosenTag]);
    }
  }

  function deleteTag(clickedTag) {
    setFilterTags((currentTags) =>
      [...currentTags].filter((tag) => tag !== clickedTag)
    );
  }

  function clearTags() {
    setFilterTags([]);
  }

  console.log(filterTags);

  return (
    <>
      <header className="header"></header>
      <main className="main-container">
        <div className="cards-container">
          {filterTags.length > 0 && (
            <div className="filters-container">
              <div className="filter-tags-container">
                {filterTags.map((tag, index) => {
                  return (
                    <div key={index} className="filter-tag__container">
                      <div className="filter-tag__text">{tag} </div>
                      <button
                        className="button__tag--delete"
                        onClick={() => deleteTag(tag)}
                      >
                        <img
                          src="./src/assets/images/icon-remove.svg"
                          alt="remove button"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
              <button className="button__tags--clear" onClick={clearTags}>
                Clear
              </button>
            </div>
          )}

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
                handleTagClick={handleTagClick}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
