import React from 'react';
import { Typography, Card, Divider, Select } from 'antd';
import { CustomDataTable } from '../../../shared/components/table'
import { useNavigation } from '../../../shared/hooks';
import useCharacterList from '../hooks/useCharacterList';
import { listTable } from '../schemas/table';

export default function CharacterList() {
  const { push } = useNavigation();
  const { characters } = useCharacterList();

  console.log(characters);

  const handleCharacterSelection = (data, index) => {
    push(`/characters/${Number(index) + 1}`);
  };

  return (
    <>
      {characters === undefined
        ? <></>
        : <Card>
          <Typography.Title level={3}>
            Characters
            <Select
              showSearch
              style={{ float: 'right', width: 300 }}
              placeholder='Search a character...'
              onSelect={(data, index) => handleCharacterSelection(data, index.key)}
            >
              {characters.map((option, index) => <Select.Option key={index} value={option.name}>{option.name}</Select.Option>)}
            </Select>
          </Typography.Title>
          <Divider />
          <CustomDataTable schema={listTable} data={characters} onClick={handleCharacterSelection} />
        </Card>}
    </>
  );
}
