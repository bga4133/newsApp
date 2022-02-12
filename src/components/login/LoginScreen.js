import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../images/undraw_happy_news_re_tsbd.svg";

// Screen del login
export const LoginScreen = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Vamos a la ruta de las noticias
    navigate("/new", {
      replace: true
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="animate__animated animate__fadeIn">
        Enteraté de las ultimas noticias 📺🔍📰🗞️👏
      </h1>
      <hr />

      <button
        className="btn btn-primary btnLogin animate__animated animate__fadeIn"
        onClick={handleLogin}
      >
        Login
      </button>
      <img src={Img} alt={Img} className="animate__animated animate__fadeIn" />
    </div>
  );
};
