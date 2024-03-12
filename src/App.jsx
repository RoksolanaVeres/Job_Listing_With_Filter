import data from "./data.json";

import { useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState(data);
  console.log(jobs);

  return (
    <>
      <header className="header"></header>
      <main className="main-container">
        <div className="cards-container">
          <div className="card">
            <div className="card__divider--vertical"></div>
            <div className="card__content">
              <div className="card__img-details-container">
                <div className="card__img"></div>
                <div className="card__details">
                  <div className="card__header">
                    <p className="card__company">Photosnap</p>
                    <div className="card__labels">
                      <p className="card__label card__label--new">New!</p>
                      <p className="card__label card__label--featured">
                        Featured!
                      </p>
                    </div>
                  </div>
                  <p className="card__position">Senior Frontend Developer</p>
                  <div className="card__position-details">
                    <p className="position__posted-at">1d ago</p>
                    <div className="card__divider--round"></div>
                    <p className="position__contract">Full Time</p>
                    <div className="card__divider--round"></div>
                    <p className="position__location">USA only</p>
                  </div>
                </div>
              </div>
              <div className="card__divider--horizontal"></div>
              <ul className="card__tags">
                <li className="card__tag">Frontend</li>
                <li className="card__tag">Senior</li>
                <li className="card__tag">HTML</li>
                <li className="card__tag">CSS</li>
                <li className="card__tag">JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
