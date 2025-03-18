import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="login-container">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className="login-form-container">
        <div className="login-email-container">
          <label>
            Email: 
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id ='email-input'
              required
            />
          </label>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               id ='password-input'
              required
            />
          </label>
          {errors.password && <p>{errors.password}</p>}
        </div>   
        <button   className={password.length<6?'submit-login-button-disable':'submit-login-button'}
                  type="submit"
                  disabled={password.length<6}>Log In</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
