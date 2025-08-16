import axios from "axios";

const BASE_URL = "https://api.edamam.com/search";
const API_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export const fetchRecipes = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: query,
                app_id: API_ID,
                app_key: APP_KEY,
            },
        });
        return response.data.hits;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    };
}
    