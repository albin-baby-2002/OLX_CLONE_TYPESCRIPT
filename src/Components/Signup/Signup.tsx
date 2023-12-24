import {
  FormEvent,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import Logo from "../../../public/olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/firebaseContext";

const Firebase = useContext(FirebaseContext);

export default function Signup(): ReactElement {
  // regex
  const nameRegEx = new RegExp(/^[a-zA-Z ]+$/);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const indianPhoneRegex = /^(\+91[\-\s]?)?[6789]\d{9}$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // state
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [hasInteracted, setHasInteracted] = useState(false);

  const [userNameValidation, setUserNameValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);
  const [phoneValidation, setPhoneValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(username);
  };

  useEffect(() => {
    if (hasInteracted) {
      setUserNameValidation(
        nameRegEx.test(username) && username.trim().length > 0
      );
    }
  }, [username]);

  useEffect(() => {
    if (hasInteracted) {
      setEmailValidation(emailRegex.test(email) && email.trim().length > 0);
    }
  }, [email]);

  useEffect(() => {
    if (hasInteracted) {
      setPhoneValidation(indianPhoneRegex.test(phone));
    }
  }, [phone]);

  useEffect(() => {
    if (hasInteracted) {
      setPasswordValidation(passwordRegex.test(password));
    }
  }, [password]);

  return (
    <div className="signUp">
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="labels" htmlFor="fname">
              Username
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
                setHasInteracted(true);
              }}
            />

            {!userNameValidation ? (
              <p className="error"> Only Letters Allowed</p>
            ) : (
              ""
            )}
          </div>

          <br />

          <div>
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="fname"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setHasInteracted(true);
              }}
            />

            {!emailValidation ? <p className="error"> Invalid Email</p> : ""}
          </div>

          <div>
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              className="input"
              type="text"
              id="lname"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.trim());
                setHasInteracted(true);
              }}
            />

            {!phoneValidation ? (
              <p className="error"> Invalid Phone Number</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="lname"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value.trim());
                setHasInteracted(true);
              }}
            />

            {!passwordValidation ? (
              <p className="error">
                Min 8 Char & Min 1 [ Letter , Digit, (@$!%*?&)]
              </p>
            ) : (
              ""
            )}
          </div>

          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
