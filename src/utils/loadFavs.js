export const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem("favs");
  return storedData ? JSON.parse(storedData) : [];
};