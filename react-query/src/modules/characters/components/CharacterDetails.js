import React from 'react';
import { Spin } from 'antd';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function CharacterDetails() {
  const { id } = useParams();
  const { isLoading, data } = useQuery('characterDetails', () => fetch(`https://swapi.dev/api/people/${id}`).then((res) => res.json()));

  return (
    <>
      {
        isLoading
          ? <Spin size='large' />
          : <pre>{JSON.stringify(data, null, 2)}</pre>
      }
    </>
  );
}
