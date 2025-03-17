import "./Filter.css";

const Filter = () => {
  const handleTitleFilterChange = (e) => {};

  const handleAuthorFilterChange = (e) => {};

  const handleOnlyFavoriteFilterChange = () => {};

  const handleResetFilters = () => {};

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input type="text" placeholder="Filter by title..." />
        </div>
        <div className="filter-group">
          <input type="text" placeholder="Filter by author..." />
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" />
            Only Favorite
          </label>
        </div>
        <button type="button">Reset Filters</button>
      </div>
    </div>
  );
};

export default Filter;
