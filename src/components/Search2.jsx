import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c484df224ef249ea954c65d810ca87f9";

const Search2 = ({ foodNewData, setFoodNewData }) => {
  const [query, setQuery] = useState("bk");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch("https://dummyjson.com/todos");
      const todos = await res.json();
      console.log(todos.todos);
      // const res = await fetch("https://dummyjson.com/recipes/1");
      // const data = await res.json();
      // console.log(data.name);
      // console.log(data.posts);
      setFoodNewData(todos.todos);
    }
    fetchFood();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search2;
