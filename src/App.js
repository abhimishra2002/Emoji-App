import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import Category from './components/Category';
import EmojisList from './components/EmojisList';

function App() {
  const [categories, setCategories] = useState({});
  const [categoriesNames, setCategoriesNames] = useState([]);
  const fetchDataFromAPI = useCallback(async () => {
    try {
      const response = await fetch("https://emojihub.yurace.pro/api/all");
      const data = await response.json();
      const categories = {};

      data.forEach((emoji) => {
        const category = emoji.category;
        if (!categories[category]) {
          categories[category] = [];
        }
        categories[category].push(emoji);
      });
      const categoryNames = Object.keys(categories)
      setCategories(categories);
      setCategoriesNames(categoryNames);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }, []);
  useEffect(() => {
    fetchDataFromAPI()
  }, [fetchDataFromAPI]);
  return (
    <BrowserRouter>
    <Navbar categoriesNames={categoriesNames}/>
      <Routes>{/*All the routes definition */}
        <Route path="/" element={<EmojisList categories={categories}/>} />
        <Route path="category/:categoryName" element={<Category categories={categories} />} />
        <Route path="*" element={<EmojisList categories={categories}/>} />
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
