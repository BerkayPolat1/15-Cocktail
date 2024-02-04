import React from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        {" "}
        no cocktails matched your search criteria{" "}
      </h2>
    );
  } else {
    return (
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <div className="cocktails-center">
          {cocktails.map((cocktail) => {
            const {glass, id, image, info, name} = cocktail;
            return (
              <article className="cocktail" key={id}>
                <div className="img-container">
                  <img src={image} alt={name} />
                </div>
                <div className="cocktail-footer">
                  <h3> {name} </h3>
                  <h4> {glass} </h4>
                  <p> {info} </p>
                  <Link className="btn btn-primary btn-details" to={`cocktail/${id}`}> details </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    );
  }
};

export default CocktailList;
