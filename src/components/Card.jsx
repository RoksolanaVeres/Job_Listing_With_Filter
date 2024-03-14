import { useContext } from "react";
import { TagsContext } from "../contexts/TagsContext";

export default function Card({
  company,
  contract,
  featured,
  newLabel,
  position,
  postedAt,
  location,
  tags,
  logo,
  handleTagClick,
}) {
  const { filterTags, setFilterTags } = useContext(TagsContext);

  function handleTagClick(tag) {
    if (filterTags.indexOf(tag) === -1) {
      setFilterTags((currentTags) => [...currentTags, tag]);
    }
  }

  return (
    <div className="card">
      <div className="card__divider--vertical"></div>
      <div className="card__content">
        <div className="card__img-details-container">
          <img src={logo} alt="company logo" className="card__img" />
          <div className="card__details">
            <div className="card__header">
              <p className="card__company">{company}</p>
              <div className="card__labels">
                {newLabel && (
                  <p className="card__label card__label--new">New!</p>
                )}

                {featured && (
                  <p className="card__label card__label--featured">Featured!</p>
                )}
              </div>
            </div>
            <p className="card__position">{position}</p>
            <div className="card__position-details">
              <p className="position__posted-at">{postedAt}</p>
              <div className="card__divider--round"></div>
              <p className="position__contract">{contract}</p>
              <div className="card__divider--round"></div>
              <p className="position__location">{location}</p>
            </div>
          </div>
        </div>
        <div className="card__divider--horizontal"></div>
        <ul className="card__tags">
          {tags.map((tag, index) => {
            return (
              <li
                key={index}
                className="card__tag"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
