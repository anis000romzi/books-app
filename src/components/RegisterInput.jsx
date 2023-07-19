import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [passwordConfirm, onPasswordConfirmChange] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    register({ name, email, password, password_confirmation: passwordConfirm });
  };

  return (
    <form onSubmit={onSubmitHandler} className="col-lg-5 col-sm-8 mx-auto">
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          placeholder="Name"
          onChange={onNameChange}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="email"
          value={email}
          placeholder="Email"
          onChange={onEmailChange}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="password"
          className="form-control"
          id="passwordConfirm"
          value={passwordConfirm}
          placeholder="Confirm Password"
          onChange={onPasswordConfirmChange}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
      </div>
      <div className="col-auto mb-2">
        <button type="submit" className="btn btn-outline-primary mb-3">
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterInput;
