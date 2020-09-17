import { useDispatch } from 'react-redux';
import useAxios from '../hooks/useAxios';
import { actionCreators } from '../state/characterStore';

export default function useCharacterService() {
  const dispatch = useDispatch();
  const { isLoading, getRequest } = useAxios();

  const getCharacters = () => {
    return getRequest('/people/')
      .then((res) => dispatch(actionCreators.setCharacters(res.results)));
  };

  const getCharacter = (id) => {
    return getRequest(`/people/${id}`)
      .then((res) => dispatch(actionCreators.setCharacter(res)));
  };

  return { isLoading, getCharacters, getCharacter };
}
