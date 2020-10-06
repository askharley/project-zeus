import React from 'react';
import { useQuery } from 'react-query';
import { Typography, Card, Divider, Select } from 'antd';
import { CustomDataTable } from '../../../shared/components/table'
import { useNavigation } from '../../../shared/hooks';
import { listTable } from '../schemas/table';

export default function CharacterList() {
  const { push } = useNavigation();
  const { isLoading, data } = useQuery('characterList', () => fetch('https://swapi.dev/api/people/').then((res) => res.json()));

  const handleCharacterSelection = (data, index) => {
    push(`/characters/${Number(index) + 1}`);
  };

  return (
    <>
      {isLoading
        ? <></>
        : <Card>
          <Typography.Title level={3}>
            Characters
            <Select
              showSearch
              style={{ float: 'right', width: 300 }}
              placeholder='Search a character...'
              onSelect={(selected, index) => handleCharacterSelection(selected, index.key)}
            >
              {data?.results?.length && data?.results.map((option, index) => <Select.Option key={index} value={option.name}>{option.name}</Select.Option>)}
            </Select>
          </Typography.Title>
          <Divider />
          <CustomDataTable schema={listTable} data={data.results} onClick={handleCharacterSelection} />
        </Card>}
    </>
  );
}
