import { useState } from "react";
import {fetchRecipes } from "../services/api";

export default function SearchBar([setRecipes]) {
    const [query, setQuery] = useState("");

    const handlesearch = async () => {
        if (!query.trim()) return;
        const results = await fetchRecipes(query);
        setRecipes(results);
    };

    return (
        <div className="flex gap-2 p-4">
            <input 
            type="text" 
            placeholder="Search by ingredient or dish name"
            className="flex-grow p-2 border-rounded"
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>

            <button 
            onClick={handlesearch}
            className="bg-green-500 text-white px-4 py-2 hover:bg-green-600">
                search...
            </button>
        </div>
    );
}