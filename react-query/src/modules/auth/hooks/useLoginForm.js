import { useContext } from 'react';
import { Form } from 'antd';
import useAuthService from "../../../shared/services/authService";
import { UserContext } from '../../../shared/context';

export default function useLoginForm() {  
  const [form] = Form.useForm();
  const [, setUser] = useContext(UserContext);
  const { isLoading, signIn, sendResetPasswordEmail } = useAuthService();

  const login = (email, password) => {
    return signIn(email, password)
      .then((res) => setUser({
        id: '62fufrCSpAV9brZWZdOVXPupS8n2',
        name: 'Kylo Ren',
        photoUrl: 'https://vignette.wikia.nocookie.net/fortnite/images/b/b3/Kylo_Ren_-_Outfit_-_Fortnite.png/revision/latest?cb=20191222034729'
      }));
  }

  const resetPassword = (email) => {
    return sendResetPasswordEmail(email);
  }

  return { isLoading, form, login, resetPassword };
}
