import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { Input, Text } from './Filter.styled'
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };
  return (
    <>    
      <Text htmlFor="filter-input">
        Find contacts by name
        <Input
          id="filter-input"  
          type="text"
          value={filter}
          onChange={onChange}
          aria-label="Search contacts by name" 
        />
      </Text>
    </>
  );
};




