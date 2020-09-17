import React from 'react';
import { useParams } from 'react-router-dom';
import useCharacterDetails from '../hooks/useCharacterDetails';

export default function CharacterDetails() {
  const { id } = useParams();
  const { character } = useCharacterDetails(id);

  return (
    <pre>{JSON.stringify(character, null, 2)}</pre>
  );
}
