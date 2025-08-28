# 🍲 Recipe Finder App

A simple and interactive **Recipe Finder** web application built with **React.js**, **Vite**, and **Tailwind CSS** that allows users to explore real recipes from [TheMealDB API](https://www.themealdb.com/).  

---

## <img src="https://img.icons8.com/color/48/000000/chef-hat.png" width="25"/> Features 
- 📖 View a list of available recipes.  
- 🔍 Search recipes by name.  
- ➕ Add new recipes with ingredients and instructions.  
- 🎨 Clean and responsive UI with Tailwind CSS.  

---

## <img src="https://img.icons8.com/color/48/000000/ingredients.png" width="25"/> Tech Stack  
- ⚛️ **React.js** – Component-based UI framework.  
- 🚀 **Vite** – Lightning-fast development environment.  
- 🎨 **Tailwind CSS** – Utility-first styling.  
- 🗂 **React Router** – Smooth page navigation.  
- 🌐 **TheMealDB API** – Real recipe data source.  

---

## <img src="https://img.icons8.com/color/48/000000/recipe-book.png" width="25"/> How It Works  
1. 🏠 Landing page displays categories of recipes.  
2. 🔎 Search bar lets you find meals by name.  
3. 🍴 Clicking a recipe card redirects you to its **detailed recipe page** on TheMealDB.

##  Project Structure
```

recipe-finder/
│── src/
|   ├──assets/
|          ├──
│   ├── components/
         ├──ui/
            ├──button.tsx
            ├──card.tsx
            ├──input.tsx
         ├── Footer.jsx
         ├──Header.jsx
         ├──Navbar.jsx
         ├──SearchBar.jsx
         ├──lib/
              ├──utils.ts
|   |    ├──pages/
             ├── HomePage.jsx        # Displays recipe list
│   │        ├── AboutPage.jsx       
│   │        ├── CategoriesPage.jsx
             ├── NetFound.jsx
             ├──RecipePage.jsx
         ├──services
              ├──api.js
│   ├── data.json               # Sample recipe data
│   ├── App.jsx                 # Main app components center
│   ├── global.js                # styles
    ├──main.jsx                  #main app
│── public/
│── package.json
├──components.json
│── README.md

````

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/recipe-finder.git
cd recipe-finder
````

## <img src="https://img.icons8.com/color/48/000000/installing-updates.png" width="25"/> Installation & Setup  


npm install


### 3️⃣ Run the project


npm start


App will run at  `http://localhost:3000`

---

##  Screenshots

### Home Page

![Home Page](./public/LandingPage.png)

### Add Recipe

![RecipeDasBoard](./public/RecipeDashboard.png)

---

##  Next Steps

* Add recipe categories (Breakfast, Lunch, Dinner).
* Implement persistent storage (localStorage or backend API).
* Enhance search with ingredients and tags.
* Improve design with animations and better layout.

---

## Author

**Festus Kimani**
📧 Contact: [your-email@example.com](mailto:your-email@example.com)
🔗 GitHub: [your-username](https://github.com/your-username)


