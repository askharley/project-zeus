import { useEffect } from 'react';
import { useSelector } from "react-redux";
import useCharacterService from "../../../shared/services/characterService";

export default function useCharacterDetails(id) {
  const { isLoading, getCharacter } = useCharacterService();
  const character = useSelector(state => state.character.current);

  useEffect(() => {
    getCharacter(id);
  }, [id, getCharacter]);

  return { isLoading, character };
}