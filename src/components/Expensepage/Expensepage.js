import { useEffect, useState } from "react";
import { deleteexpense, loadpostwithedata, saveexpense, updateexpense } from "../hooks/Api";
import AddExpense from "./AddExpense";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Expensepage() {
    const [data, setdata] = useState([]);
    const histery = useHistory();
    let [showdiloage, setshowdialog] = useState(false);



    useEffect(() => {
        sessionStorage.setItem("token","xyztoken")
        loadpostwithedata(setdata);
    }, []);

  
    let handleshowdialog = () => {
        setshowdialog(true);
    };

    const handlecancel = () => {
        setshowdialog(false);
    }

    let handlesubmit = (model) => {
        saveexpense(model, setdata);
        setshowdialog(false);
    }

    if (showdiloage) {
        return <AddExpense onCancel={handlecancel} onhandlesubmit={handlesubmit} />
    }


    function editeexpense(index) {
        setshowdialog(true);

    }


    return (
        <div>
            <h1 className="text-center text-primary">User Data</h1>
            <div className="d-flex justify-content-between">

                <button className="btn btn-outline-primary" onClick={handleshowdialog} >Addexpense</button><button className="btn btn-outline-info">{data.length}</button>

            </div>

            <table className="table table-success table-dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>expenseType</th>
                        <th>expenseDate</th>
                        <th>createdDate</th>
                        <th>price</th>
                        {/* <th>byWhom</th> */}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(index => {
                            return (
                                <tr key={index.id}>
                                    <td>{index.id}</td>
                                    <td>{index.expenseType}</td>
                                    <td>{index.expenseDate}</td>
                                    <td>{index.createdDate}</td>
                                    <td>{index.price}</td>
                                    {/* <td>{index.byWhom}</td> */}
                                    <td>
                                        <button className="btn btn-outline-success" onClick={() => editeexpense(index)} >Edite</button>
                                        <button className="btn btn-outline-danger ms-4" onClick={() => deleteexpense(index.id, setdata)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Expensepage;