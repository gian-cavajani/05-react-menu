import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";



const allCategories = ["all", ...new Set(items.map((item) => item.category))];


function App() {
  const [dishes, setDishes] = useState(items);
  const [categories, setCategories] = useState([allCategories]);
  const filterItems = (category) => {
    if (category === "all") {
      setDishes(items); 
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setDishes(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu items={dishes} />
      </section>
    </main>
  );
}

export default App;
