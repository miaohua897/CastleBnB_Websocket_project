import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        thunkSignup({
          email,
          username,
          firstName,
          lastName,
          password
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <div className='signup-container'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} >
      <div className='signup-form-container'>
      <label>
          Email:
          <input
            type="text"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            className='signup-input'
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
            className='signup-input'
            required
          />
        </label>
        {errors.username && <p>{errors.username}</p>}
        <label>
          First Name
          <input
            type="text"
            value={firstName}
             placeholder="Enter your First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className='signup-input'
            required
          />
        </label>
        {errors.firstName && <p>{errors.firstName}</p>}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
             placeholder="Enter your Last Name"
            onChange={(e) => setLastName(e.target.value)}
            className='signup-input'
            required
          />
        </label>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
             placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            className='signup-input'
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
             placeholder="Comfirm your Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='signup-input'
            required
          />
        </label>
        {errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )}
        <button 
        className={email.length===0||username.length<4||firstName.length===0||lastName.length===0||password.length<6||confirmPassword.length<6?
          'submit-sinup-button-disable':'submit-sinup-button'
        }
        type="submit"
        disabled={email.length===0||username.length<4||firstName.length===0||lastName.length===0||password.length<6||confirmPassword.length<6}
        >Sign Up</button>
      </div>
      
      </form>
    </div>
  );
}

export default SignupFormModal;
