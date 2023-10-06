import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateexpense } from "../../features/expenseSlice";

const UpdateExpense = ({ UpdateExpense, expense }) => {
    const { id } = useParams()
    UpdateExpense("Edit Expense")
    expense(false);
    const dispatch = useDispatch()
    const expenseData = useSelector((state) => state.ExpenseTrack)
    const exisitingExpense = expenseData.find((expense) => expense.id == id)
    const [updatecategory, setCategory] = useState(exisitingExpense.category)
    const [updateamount, setAmount] = useState(exisitingExpense.amount)
    const [updatedate, setDate] = useState(exisitingExpense.date)
    const [updatedescription, setDescription] = useState(exisitingExpense.description)
    const handleUpdate = () => {
        dispatch(updateexpense({
            id: id,
            category: updatecategory,
            amount: updateamount,
            date: updatedate,
            description: updatedescription,

        }))
    }
    console.log(exisitingExpense)
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
                <form onSubmit={handleUpdate}>
                    <div className="add-expense-margin-top">
                        <div>Category</div>
                        <select className="add-expense-categoryselect" value={updatecategory} onChange={(e) => setCategory(e.target.value)}>
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
                        <input
                        onChange={(e) => setAmount(e.target.value)}
                         value={updateamount} className="add-expense-categoryselect" type="text" />
                    </div>
                    <div className="add-expense-margin-top">
                        <div>Date</div>
                        <input
                        onChange={(e) => setDate(e.target.value)}
                         value={updatedate} className="add-expense-categoryselect" type="date" />
                    </div>
                    <div className="add-expense-margin-top">
                        <div>Description</div>
                        <textarea 
                        onChange={(e) => setDescription(e.target.value)}
                        value={updatedescription} className="add-expense-categoryselect add-expense-textarea" type='text' />
                    </div>
                    <button>Submit</button>
                </form>
            </div>

        </>
    )
}
export default UpdateExpense