import React from "react";
import { Link } from "react-router-dom";

const UpdateExpense = ({ UpdateExpense, expense }) => {
    UpdateExpense("Edit Expense")
    expense(false)
    return (
        <>
            <div className="add-expense-main">
                <div className="expensetype">
                    <div>Type</div>
                    <div className="add-expense-buttons">
                        <Link className="add-expense-links"><button>Cash In</button></Link>
                        <Link className="add-expense-links"><button>Cash Out</button></Link>
                    </div>

                </div>
                <div className="add-expense-margin-top">
                    <div>Category</div>
                    <select className="add-expense-categoryselect">
                        <option>
                            Food
                        </option>
                        <option>
                            Transport
                        </option>
                    </select>
                </div>
                <div className="add-expense-margin-top">
                    <div>Amount</div>
                    <input className="add-expense-categoryselect" type="text" />
                </div>
                <div className="add-expense-margin-top">
                    <div>Date</div>
                    <input className="add-expense-categoryselect" type="date" />
                </div>
                <div className="add-expense-margin-top">
                    <div>Description</div>
                    <textarea className="add-expense-categoryselect add-expense-textarea" type='text' />
                </div>
            </div>

        </>
    )
}
export default UpdateExpense