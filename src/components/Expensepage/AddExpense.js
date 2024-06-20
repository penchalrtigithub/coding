import { useEffect, useState } from "react";

function AddExpense({ onCancel, onhandlesubmit }) {
          const [expensetype, setexpensetype] = useState('');
          let [expensedate, setexpensedate] = useState("");
          let [cretedate, setcretedate] = useState("");
          let [price, setprice] = useState("");


          let handleexpensetype = (e) => {
                    setexpensetype(e.target.value);
          }

          let handleexpensedate = (e) => {
                    setexpensedate(e.target.value)
          }

          const handlecretedte = (e) => {
                    setcretedate(e.target.value);
          }

          const handleprice = (e) => {
                    setprice(e.target.value);
          }

          let handlesubmit = (e) => {
                    e.preventDefault();
                    onhandlesubmit();

          }



          return (
                    <div className="w-50 p-4 shadow border" style={{ marginLeft: '25%', marginTop: "12%", borderRadius: "5px" }}>

                              <form onSubmit={handlesubmit}>
                                        <h2 className="text-primary text-center" >Addexpense</h2>
                                        <div>
                                                  expenseType:
                                                  <input className="form-control" type="text"
                                                            name="name" placeholder="ExpenseType:-"
                                                            value={expensetype} onChange={handleexpensetype} />

                                        </div>
                                        <div>
                                                  expenseDate:
                                                  <input className="form-control" type="date" value={expensedate} onChange={handleexpensedate} />
                                        </div>

                                        <div>
                                                  createdDate:
                                                  <input className="form-control" type="date" value={cretedate} onChange={handlecretedte} />
                                        </div>

                                        <div>
                                                  Price:
                                                  <input className="form-control" type="number" placeholder="Price:-" value={price} onChange={handleprice} />
                                        </div>

                                        <div className="mt-4">
                                                  <button className="btn btn-outline-primary" type="submit" >Submit</button>
                                                  <button className=" ms-4 btn btn-outline-danger" type="button" onClick={onCancel} >Cancel</button>
                                        </div>

                              </form>

                    </div>
          );
}
export default AddExpense;