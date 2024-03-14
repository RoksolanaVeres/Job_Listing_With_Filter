import data from "./data.json";
import Card from "./components/Card";
import removeButtonImg from "./assets/images/icon-remove.svg";

import { useState } from "react";

export default function App() {
  const [filterTags, setFilterTags] = useState([]);

  const jobs = data;

  const jobsWithTags = jobs.filter((job) => {
    let jobValues = Object.values(job).flat();
    return filterTags.every((tag) => jobValues.includes(tag));
  });

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
                        <img src={removeButtonImg} alt="remove button" />
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
                key={job.id}
                {...job}
                newLabel={job.new}
                tags={tags}
                setFilterTags={setFilterTags}
                filterTags={filterTags}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
