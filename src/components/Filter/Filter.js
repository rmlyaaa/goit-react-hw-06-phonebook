import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { Field, Text } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter.values);
  const dispath = useDispatch();
  return (
    <>
      <Text>Find contacts by name</Text>
      <Field
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispath(changeFilter(evt.target.value))}
      />
    </>
  );
};
