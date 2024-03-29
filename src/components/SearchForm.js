import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef("")

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }

  return (
    <div>
      <section className="section search">
        <form className="search-form">
          <div className="form-control">
            <label htmlFor="name"> Search your Favorite Cocktail </label>
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default SearchForm;
