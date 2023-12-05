import RegisterInput from '../components/RegisterInput';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';

function Register() {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <main className="row text-center mx-auto vh-100">
      <div className="col-sm-12 my-auto">
        <h1 className="mb-4">Create Your Account!</h1>
        <RegisterInput register={onRegisterHandler} />
        <p>
          <Link to="/">Back to Login</Link>
        </p>
      </div>
    </main>
  );
}
export default Register;
