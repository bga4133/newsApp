import React from "react";
import { Link } from "react-router-dom";

// Screen de la noticia
export const NewCard = ({ id, title, url }) => {
  return (
    <div className="col animate__animated animate__fadeIn ">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-6">
            <img src={url} className="card-img-top" srcset="" alt={url} />
          </div>
          <div className="col-6">
            <div className="card-body">
              <p className="card-text">{id}</p>
              <h3 className="card-text mt-1">{title.substring(15, -1)}...</h3>
              <Link to={`/notice/${id}`} className="moreInfoButton btn-sm">
                Más info...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
