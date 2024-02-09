import { MAIN_URL } from "../utils/constants";

export const request = async (query) => {
  try {
    const result = await fetch(MAIN_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await result.json();

    return data;
  } catch (err) {
    console.error(err); // Log the error for debugging
    throw err; // Rethrow the error or handle it as needed
  }
};

export const sortByDate = (arr) => {
  return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getLocalDateString = (date, {month = "numeric", day = "numeric", year = "numeric"} ) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    month,
    day,
    year,
  })
} 
