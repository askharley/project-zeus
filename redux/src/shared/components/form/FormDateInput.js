import React from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';

export default function FormDateInput({ label, placeholder }) {
  return (
    <Form.Item label={<b>{label}</b>}>
      <DatePicker format='DD/MM/YYY' placeholder={placeholder} />
    </Form.Item>
  );
}

FormDateInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
