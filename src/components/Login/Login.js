import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Applicasioncontext } from "../../Context/Applicasioncontext";

function Login() {
    const [Username, setusername] = useState('');
    const [Password, setpassword] = useState('');
    const [Fullname, setfullname] = useState('');
    let [error, seterror] = useState({});
    let history = useHistory();
    const objdata = useContext(Applicasioncontext);


    function handleusername(e) {
        setusername(e.target.value);
    };

    function handlepassword(e) {
        setpassword(e.target.value);
    };

    function handlefullname(e) {
        setfullname(e.target.value);
    };

    function handlesubmit(e) {
        e.preventDefault();
        let error1 = valdete()
        let errrprops = Object.keys(error1);
        if (!errrprops.length) {
            if (Username == "admin" && Password == "admin" && Fullname == "admin") {
                history.push('/expensepage');
                objdata.login(Username);
            }
        }
    }

    const valdete = () => {
        let ErrorObj = {};
        if (!Username || !Username.trim()) {
            ErrorObj.Username = "username is importent!";
        } else if (Username.trim().length < 5) {
            ErrorObj.Username = "username is min 5 char";
        }

        if (!Password || !Password.trim()) {
            ErrorObj.Password = "password is importent!";
        } else if (Password.trim().length < 5) {
            ErrorObj.Password = "password is min 5 char";
        }

        if (!Fullname || !Fullname.trim()) {
            ErrorObj.Fullname = "fullname is importent!";
        } else if (Fullname.trim().length < 5) {
            ErrorObj.Fullname = "fullname is min 5 char";
        }
        seterror(ErrorObj);
        return ErrorObj;
    }

    return (
        <div className="w-50 shadow p-4 " style={{ marginLeft: "24%", marginTop: "13%", borderRadius: "2%" }}>
            <form onSubmit={handlesubmit}>
                <h3 className="text-center " style={{ color: "blue" }}>Login Form</h3>
                <div className="mt-2">
                    Username:
                    <input className="form-control" value={Username} onChange={handleusername} type="text" name="name" placeholder="Username:-" />
                </div>
                {
                    error.Username && <div>
                        <small className="text-danger">{error.Username}</small>
                    </div>
                }


                <div className="mt-2">
                    Password:
                    <input className="form-control" value={Password} onChange={handlepassword} type="password" placeholder="Password:-" />
                </div>
                {
                    error.Password && <div>
                        <small className="text-danger">{error.Password}</small>
                    </div>
                }


                <div className="mt-2">
                    Fullname:
                    <input className="form-control" value={Fullname} onChange={handlefullname} placeholder="Fullname:-" type="taxt" name="name" />
                </div>
                {
                    error.Fullname && <div>
                        <small className="text-danger">{error.Fullname} </small>
                    </div>
                }

                <button className="btn btn-outline-primary mt-2" type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Login