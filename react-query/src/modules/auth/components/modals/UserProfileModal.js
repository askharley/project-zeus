import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Avatar } from 'antd';
import { PrimaryModal } from '../../../../shared/components/modals';

export default function UserProfileModal({ isOpen, toggle, user }) {
  return (
    <PrimaryModal isOpen={isOpen} toggle={toggle} title="User Profile">
      <Row>
        <Col span={12} offset={6}>
          <Avatar src={user?.photoUrl} size={250} />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
        <Col>
          <div><strong>{user?.name}</strong></div>
        </Col>
      </Row>
    </PrimaryModal>
  );
}

UserProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}
