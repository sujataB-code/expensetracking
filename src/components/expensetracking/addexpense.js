import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, addCategoryToExpense } from "../../features/expenseSlice";

const AddExpense = ({ AddExpense, expense }) => {
    AddExpense("Add Expense")
    expense(false);
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [selectCashType, setSelectCashType] = useState('CashIn')
    const dispatch = useDispatch()
    const expenseData = useSelector((state) => state.ExpenseTrack)

    const handleCashType = (value) => {
        setSelectCashType(value)
    }
    const data = expenseData.map((date) =>
        date.category[2]
    )
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addExpense({ id: expenseData[expenseData.length - 1].id + 1, category: data[data.length - 1].id + 1, amount, date, description }))
    }

    return (
        <>
            <div className="add-expense-main">
                <div className="expensetype">
                    <div>Type</div>
                    <div className="add-expense-buttons">
                        <Link className="add-expense-links">
                            <button className={selectCashType === 'CashIn' ? 'selectCashIn' : 'selectCashOut'} onClick={(() => handleCashType("CashIn"))}>
                                Cash In
                            </button>
                        </Link>
                        <Link className="add-expense-links">
                            <button className={selectCashType === 'CashOut' ? 'selectCashIn' : 'selectCashOut'} onClick={(() => handleCashType("CashOut"))}>
                                Cash Out
                            </button>
                        </Link>
                    </div>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className="add-expense-margin-top">
                        <div>Category</div>
                        <select
                            className="add-expense-categoryselect"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            {
                                selectCashType === 'CashIn' && <option>
                                    Work
                                </option>
                            }
                            {
                                selectCashType === 'CashOut' &&
                               <>
                                <option>
                                            Food
                                        </option>
                                        <option>
                                            Transport
                                        </option>
                               </>
                            }

                        </select>
                    </div>
                    <div className="add-expense-margin-top">
                        <div>Amount</div>
                        <input
                            className="add-expense-categoryselect"
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="add-expense-margin-top">
                        <div>Date</div>
                        <input
                            className="add-expense-categoryselect"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="add-expense-margin-top">
                        <div>Description</div>
                        <textarea
                            className="add-expense-categoryselect add-expense-textarea"
                            type='text'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className='expense-tracking-buttons'>
                    <Link to="/"><button className='edit-expense-buttons-selected'>Cancel</button></Link>
                    <Link to="/"><button className='edit-expense-buttons-selected'>Submit</button></Link>
                    </div>
                </form>
            </div>

        </>
    )
}
export default AddExpense