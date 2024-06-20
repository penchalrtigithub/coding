import { useContext } from "react";
import { Applicasioncontext } from "../../Context/Applicasioncontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
          let objdata = useContext(Applicasioncontext);
          let histery = useHistory();

          const handlelogout = () => {
                    objdata.login('');
                    histery.push("/login");
          }

          return (
                    <div className="d-flex justify-content-between">
                              <h2>Expense Management</h2>
                              <span>
                                        <div class="dropdown">
                                                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {objdata.username}

                                                  </button>
                                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><a class="dropdown-item" >Action</a></li>
                                                            <li><a class="dropdown-item" onClick={handlelogout} >LogOut</a></li>
                                                  </ul>
                                        </div>

                              </span>
                    </div>
          );
}
export default Header;