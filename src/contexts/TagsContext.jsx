import { createContext, useState, useEffect } from "react";

export const TagsContext = createContext(null);

export function TagsContextProvider({ children }) {
  const [filterTags, setFilterTags] = useState([]);

  //update filters based on query parameters in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const filterParam = searchParams.get("filters");
    if (filterParam) {
      setFilterTags(filterParam.split(","));
    }
  }, []);

  // update URL when filters change
  useEffect(() => {
    const searchParams = new URLSearchParams();
    let newUrl = window.location.pathname;
    if (filterTags.length > 0) {
      searchParams.set("filters", filterTags.join(","));
      newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    }
    window.history.replaceState(null, null, newUrl);
  }, [filterTags]);

  const value = {
    filterTags,
    setFilterTags,
  };
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
}
