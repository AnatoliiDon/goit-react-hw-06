import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const selectNameFilter = useSelector(state => state.filter.filters.name);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={css.findInput}
        value={selectNameFilter}
        type="text"
        onChange={event => {
          const changeFilter = setFilter(event.target.value);
          dispatch(changeFilter);
        }}
      />
    </div>
  );
};

export default SearchBox;
