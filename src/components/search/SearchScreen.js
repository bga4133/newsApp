import { useState } from "react";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { NewCard } from "../news/NewCard";
import { useNavigate, useLocation } from "react-router-dom";

export const SearchScreen = () => {
  const [state, setstate] = useState([]);
  // Screen de la busqueda
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  // hook para obtener el value de los campos
  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  // Hacemos la peticion para buscar la data por id
  async function getData() {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?id=${q}`
    );
    let res = await response.json();
    setstate(res);
    return res;
  }

  // pasamos el estado para el filtro de noticias
  const noticesFilter = [...state];

  // funcion del submit de la busqueda
  const handleSearch = e => {
    e.preventDefault();
    getData();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1 className="mt-5 mb-5">Busqueda de noticias por ID 🔍</h1>

      <div className="row">
        <div className="col-5">
          <h4>
            Buscar
            <hr />
            <form onSubmit={handleSearch}>
              <input
                type="number"
                placeholder="Buscar noticias"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="btn btn-outline-primary mt-3 moreInfoButton btn-lg"
              >
                Buscar ...
              </button>
            </form>
          </h4>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info animate__animated animate__pulse">
              Buscar noticias
            </div>
          ) : (
            noticesFilter.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hay resultados {q}
              </div>
            )
          )}

          {noticesFilter.map(notice => (
            <NewCard key={notice.id} {...notice} />
          ))}
        </div>
      </div>
    </>
  );
};
