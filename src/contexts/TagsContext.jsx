import { createContext, useState } from "react";
export const TagsContext = createContext(null);

export function TagsContextProvider({ children }) {
  const [filterTags, setFilterTags] = useState([]);
  const value = {
    filterTags,
    setFilterTags,
  };
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
}
