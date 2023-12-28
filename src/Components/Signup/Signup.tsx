import { FormEvent, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { auth, db } from "../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup(): ReactElement {
  //navigate

  const navigate = useNavigate();
  
   const handleNavigation = ()=>{
    
    navigate('/login')
  }

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      const user = result.user;

      await updateProfile(user, {
        displayName: username,
      });

      console.log("User created successfully:", user);

      const docRef = await addDoc(collection(db, "users"), {
        id: user.uid,
        username: username,
        phone: phone,
      });

      console.log("User data added to Firestore with ID:", docRef.id);
      
      navigate('/login')
      
    } catch (err: any) {
      
      if (err.code === "auth/email-already-in-use") {
        
        console.log("Email is already in use. Please choose a different one.");
        
      } else {
        
        console.log("An error occurred. Please try again later.");
        
      }

      console.log(err);
    }
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
          <button >Signup</button>
        </form>
        <a onClick={handleNavigation}>Login</a>
      </div>
    </div>
  );
}
