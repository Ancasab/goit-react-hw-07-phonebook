import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from '../../redux/filterSlice';
import {Input, Text } from './Filter.styled'

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
        <>    
            <Text>
                Find contacts by name
            </Text>
            <Input
                type="text"
                name={filter}
                value={filter}
                onChange={onChange}

            />
        </>
    );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};



