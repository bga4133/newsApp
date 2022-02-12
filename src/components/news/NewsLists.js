import { useEffect, useState } from "react";
import { NewCard } from "./NewCard";

// Lista de las noticias
export const NewsLists = ({ publisher }) => {
  const [state, setstate] = useState([]);

  //get data api function
  async function getDataApi() {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let res = await response.json();
    // Odenamos por id ascendente
    res.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    setstate(res);
    return res;
  }
  useEffect(() => {
    getDataApi();
  }, []);
  const news = [...state];
  return (
    <div className="row rows-cols-1  row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {news.map(notice => (
        <NewCard key={notice.id} {...notice} />
      ))}
    </div>
  );
};
