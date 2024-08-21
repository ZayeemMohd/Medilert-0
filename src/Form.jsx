import "./Form.css";
import { useState } from "react";

function Form() {
  const [user, setUser] = useState([
    { password: "21", userName: "CROCIN" },
    { password: "25", userName: "PARACITOMOL" },
    { password: "26", userName: "Dolo" },
    { password: "26", userName: "Aspirin" },
    { password: "26", userName: "Paracetamol" },
    { password: "25", userName: "zental" },
    { password: "25", userName: "Amoxicillin" },
    { password: "27", userName: "Ofloxacin" },
    { password: "28", userName: "Ciprobid" },
    { password: "29", userName: "Lasix" },
    { password: "29", userName: "Cetirizine" },
  ]);

  const [userInpVal, setUserInpVal] = useState();
  const [pwdInpVal, setPwdInpVal] = useState();

  const getUserName = (event) => {
    setUserInpVal(event.target.value);
  };

  const getPwd = (event) => {
    setPwdInpVal(event.target.value);
  };

  const postData = () => {
    setUser([...user, { userName: `${userInpVal}`, password: `${pwdInpVal}` }]);
    setUserInpVal("");
    setPwdInpVal("");
    console.log(user);
  };

  let Date = 19;

  return (
    <>
      <h2>MediLert</h2>
      <h3 className="LoginText">ADD Medicine</h3>

      <input
        type="text"
        placeholder="Medicine Name:"
        className="UserName"
        value={userInpVal}
        onChange={getUserName}
      />

      <input
        type="text"
        placeholder="Expiry Date:"
        className="password"
        value={pwdInpVal}
        onChange={getPwd}
      />

      <button className="LoginButton" onClick={postData}>
        ADD
      </button>

      {user.map((object) => {
        if (object.password == Date + 10) {
          // alert(`${object.userName} is expiring in 20 days`);
          return (
            <div className="renderDetails">
              <p>{object.userName}</p>
              <p>{object.password}</p>
            </div>
          );
        }
      })}
    </>
  );
}

export default Form;
