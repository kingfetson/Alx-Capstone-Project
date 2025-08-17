import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const searchMealByName = async (name: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.meals;
  } catch (error) {
    console.error("Error searching meal by name:", error);
    return null;
  }
};
