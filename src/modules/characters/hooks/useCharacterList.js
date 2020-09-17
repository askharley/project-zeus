import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useCharacterService from "../../../shared/services/characterService";

export default function useCardList() {
  const { isLoading, getCharacters } = useCharacterService();
  const characters = useSelector((state) => state.character.list);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return { isLoading, characters };
}
