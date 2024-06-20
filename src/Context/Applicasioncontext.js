import { createContext, useState } from "react";

export const Applicasioncontext = createContext({
          username: "",
          login: (username) => { },
});

export let Applicasioncontextprovider = (props) => {
          const [username, setusername] = useState('');

          function login(username) {
                    setusername(username)
          }
          return (
                    <Applicasioncontext.Provider value={{ username, login }}>
                              {props.children}
                    </Applicasioncontext.Provider>
          );
}

export default Applicasioncontextprovider;