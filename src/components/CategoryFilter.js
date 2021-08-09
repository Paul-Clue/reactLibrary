import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const category = useRef();
  const { filt } = props;
  const { filter } = props;

  function handleForm(event) { event.preventDefault(); }

  const cat = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form className="filter" onSubmit={handleForm}>
      <strong>Filter Books By Category:</strong>

      <input type="submit" value="Submit" />

      <label htmlFor="category">
        Category:
        <select name="category" id="category" value={filt} ref={category} onChange={() => filter(category.current.value)}>
          <option value="All" key="All">All</option>
          {cat.map((catt) => <option value={catt} key={catt}>{catt}</option>)}
        </select>
      </label>
    </form>
  );
}

CategoryFilter.propTypes = { filt: PropTypes.instanceOf(Function).isRequired };
CategoryFilter.propTypes = { filter: PropTypes.instanceOf(Function).isRequired };

export default CategoryFilter;
