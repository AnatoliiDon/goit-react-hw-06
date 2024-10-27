import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={css.findInput}
        value={filter}
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
