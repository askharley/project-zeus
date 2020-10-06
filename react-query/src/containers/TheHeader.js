import React, { useState, useContext } from 'react';
import { Layout, Menu, Avatar, message } from 'antd';
import { routeKeys } from '../shared/utils/constants';
import { useNavigation } from '../shared/hooks';
import { UserProfileModal } from '../modules/auth/components/modals';
import { UserContext } from '../shared/context';

export default function TheHeader() {  
  const { push } = useNavigation();
  const [user, setUser] = useContext(UserContext);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

  const toggleUserProfileModal = () => {
    setShowUserProfileModal(!showUserProfileModal);
  }

  const handleLogout = () => {
    setUser(null);
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
