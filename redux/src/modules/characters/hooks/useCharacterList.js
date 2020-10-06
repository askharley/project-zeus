import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from "../../../shared/state/characterStore";
import useCharacterService from "../../../shared/services/characterService";

/**
 * This is a custom hook that handles all of the business logic for it's component.
 * The hook is responsible for fetching/posting any data that the component needs.
 * The hook concerns itself with how we want to store the data. It could use Redux. It coulse use useState(). It could use anything.
 * This decouples the way we get data from an API with how we store it which makes the request lifecycle agnostic.
 */
export default function useCharacterList() {
  const dispatch = useDispatch();
  const { isLoading, getCharacters } = useCharacterService();
  const characters = useSelector((state) => state.character.list);

  useEffect(() => {
    getCharacters()
      .then((res) => dispatch(actionCreators.setCharacters(res.results)));
  }, [getCharacters, dispatch]);

  return { isLoading, characters };
}
