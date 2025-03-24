import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { authorValuehandler, onlyFavorites, resetFilter, titleValuehandler } from "../../store/slices/filterSlice";


const Filter = () => {
  const {favoritBooks , filterByAuthor, filterByTitle } = useSelector((state) =>  state.filter)
  const dispatch = useDispatch()
  const handleTitleFilterChange = (e) => {
    dispatch(titleValuehandler(e.target.value))
  };

  const handleAuthorFilterChange = (e) => {
    dispatch( authorValuehandler(e.target.value))
  };

  const handleOnlyFavoriteFilterChange = (e) => {
    dispatch(onlyFavorites(e.target.value))
  };

  const handleResetFilters = (e) => {
    dispatch(resetFilter(e.target.value))
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input 
          type="text" 
          placeholder="Filter by title..." 
          onChange={handleTitleFilterChange}
          value={filterByTitle}
          />
         
        </div>
        <div className="filter-group">
          <input type="text"
           placeholder="Filter by author..."
           onChange={handleAuthorFilterChange}
           value={filterByAuthor} />
          
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox"
            onChange={handleOnlyFavoriteFilterChange}
            checked={favoritBooks} />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
