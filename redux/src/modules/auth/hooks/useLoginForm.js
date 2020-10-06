import { useDispatch } from "react-redux";
import { Form } from 'antd';
import useAuthService from "../../../shared/services/authService";
import { actionCreators } from "../../../shared/state/authStore";

export default function useLoginForm() {
  const { isLoading, signIn, sendResetPasswordEmail } = useAuthService();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const login = (email, password) => {
    return signIn(email, password)
      .then((res) => dispatch(actionCreators.setAuthUser(res)))
  }

  const resetPassword = (email) => {
    return sendResetPasswordEmail(email);
  }

  return { isLoading, form, login, resetPassword };
}
