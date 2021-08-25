import { useState, useMemo } from "react";

const Form = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass1, setPass1] = useState(null);
  const [pass2, setPass2] = useState(null);

  const err1 = useMemo(
    () => (username === "" ? "username is empty !" : null),
    [username]
  );
  const err2 = useMemo(() => {
    if (email === null) {
      return null;
    }
    if (email === "") {
      return "email is empty!";
    }
    if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(email)) {
      return "illgel email";
    }

    return null;
  }, [email]);

  const err3 = useMemo(
    () => (username === "" ? "username is empty !" : null),
    [username]
  );

  const err4 = useMemo(() => {
    if (pass2 === "") {
      return "pass2 is empty";
    }
    if (pass1 !== pass2) {
      return "different password";
    }
    return null;
  }, [pass1, pass2]);

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white w-400 shadow-lg rounded-md">
        <form className="p-10">
          <h2 className="text-center m-2 text-2xl">Register With Us</h2>
          <div className="mb5">
            <label className="block text-grey-400 mb-1">Username</label>
            <input
              className="block min-w-full border-2 border-grey-50 rounded-md text-sm p-2"
              style={{ borderColor: err1 ? "red" : "grey" }}
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {err1 && <small className="block mb-1 text-red-500">{err1}</small>}
          </div>
          <div className="block text-grey-400 mb-1">
            <label className="block text-grey-400 mb-1">Email</label>
            <input
              className="block min-w-full border-2 border-grey-50 rounded-md text-sm p-2 "
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {err2 && <small className="block text-red-500 mb-1">{err2}</small>}
          </div>
          <div className="block text-grey-400 mb-1">
            <label className="block text-grey-400 mb-1">Password</label>
            <input
              className="block min-w-full border-2 border-grey-50 rounded-md text-sm p-2"
              type="password"
              value={pass1}
              placeholder="Enter password"
              onChange={(e) => setPass1(e.target.value)}
            />
            {err3 && <small className="block text-red-500 mb-1">{err3}</small>}
          </div>
          <div className="block text-grey-400 mb-1">
            <label className="block text-grey-400 mb-1">Confirm Password</label>
            <input
              className="block min-w-full border-2 border-grey-50 rounded-md text-sm p-2"
              type="password"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
            />
            {err4 && <small className="block text-red-500 mb-1">{err4}</small>}
          </div>
          <button className="bg-blue-500 cursor-pointer border-2 border-blue-500 text-white block p-2 mt-5 min-w-full rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
