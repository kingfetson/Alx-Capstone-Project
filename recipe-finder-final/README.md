
#  Recipe Finder

A simple and interactive **Recipe Finder** web application built with **React.js**.  
The app allows users to browse, search, and add their own recipes.  

---

## Features
- 📖 View a list of available recipes.  
- 🔍 Search recipes by name.  
- ➕ Add new recipes with ingredients and instructions.  
- 🎨 Clean and responsive UI with Tailwind CSS.  

---

## 🛠 Tech Stack
- **React.js** – Frontend framework  
- **React Router** – Navigation between pages  
- **Tailwind CSS** – Styling  
- **Local JSON / State** – Recipe data management  

---

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

### 2️ Install dependencies


npm install


### 3️⃣ Run the project


npm start


App will run at  `http://localhost:3000`

---

##  Screenshots

### Home Page

![Home Page](https://via.placeholder.com/800x400?text=Home+Page+Screenshot)

### Add Recipe

![Add Recipe](https://via.placeholder.com/800x400?text=Add+Recipe+Screenshot)

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


