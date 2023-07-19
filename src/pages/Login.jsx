import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';

function Login({ loginSuccess }) {
  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <main className="row text-center mx-auto vh-100">
      <div className="col-sm-12 my-auto">
        <h1 className="mb-4">Please Login to Continue</h1>
        <LoginInput login={onLoginHandler} />
        <p>
          Don&apos;t have an account? <Link to="/register">Register here!</Link>
        </p>
      </div>
    </main>
  );
}
export default Login;
