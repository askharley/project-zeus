import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Avatar, message } from 'antd';
import { routeKeys } from '../shared/utils/constants';
import { useNavigation } from '../shared/hooks';
import { UserProfileModal } from '../modules/auth/components/modals';
import { actionCreators } from '../shared/state/authStore';

export default function TheHeader() {
  const dispatch = useDispatch()
  const { push } = useNavigation();
  const user = useSelector((state) => state.auth.current);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

  const toggleUserProfileModal = () => {
    setShowUserProfileModal(!showUserProfileModal);
  }

  const handleLogout = () => {
    dispatch(actionCreators.clearAuthUser());
    message.success('You successfully logged out.');
    push(routeKeys.LOGIN);
  }

  return (
    <Layout.Header style={{ padding: 0, backgroundColor: '#FFFFFF' }}>
      <Menu mode="horizontal" style={{ backgroundColor: 'inherit' }}>
        {user &&
          <Menu.SubMenu style={{ float: 'right' }} title={<Avatar src={user.photoUrl} />}>
            <Menu.Item onClick={toggleUserProfileModal}>View Profile</Menu.Item>
            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
          </Menu.SubMenu>}
      </Menu>
      {user && <UserProfileModal isOpen={showUserProfileModal} toggle={toggleUserProfileModal} user={user} />}
    </Layout.Header>
  );
}
