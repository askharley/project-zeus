import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';

export default function FormSelectInput({ label, placeholder, options }) {
  return (
    <Form.Item label={label}>
      <Select
        style={{ float: 'right', width: 300 }}
        placeholder={placeholder}
        onChange={(event) => console.log(event)}
      >
        {options.map((option) => <Select.Option value={option.value}>{option.label}</Select.Option>)}
      </Select>
    </Form.Item>
  );
}

FormSelectInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.object.isRequired
}
