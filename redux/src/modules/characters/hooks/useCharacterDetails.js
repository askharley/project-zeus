import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../shared/state/characterStore";
import useCharacterService from "../../../shared/services/characterService";

export default function useCharacterDetails(id) {
  const dispatch = useDispatch();
  const { isLoading, getCharacter } = useCharacterService();
  const character = useSelector(state => state.character.current);

  useEffect(() => {
    getCharacter(id)
      .then((res) => dispatch(actionCreators.setCharacter(res)))
  }, []);

  return { isLoading, character };
}