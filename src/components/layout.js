import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ExpenseTracking from './expensetracking/expensetracking';
import Category from './category/category';
import './layout.css'
import AddExpense from './expensetracking/addexpense';
import UpdateExpense from './expensetracking/updateexpense';

const Layout = () => {
    const [name, setName] = useState();
    const [expense, setExpense] = useState();
    const [selectedButton, setSelectedButton] = useState('expensebutton')
    const handleButtonClick = (buttonID) => {
        setSelectedButton(buttonID)
    }
    return (
        <>
            <BrowserRouter>

                <div className='expense-container'>
                    <div className='expense-tracking-main'>
                        <div className='expense-tracking-container'>
                            <div className='expence-tracking'>
                                {name}
                            </div>
                            <div className='expense-add-button'>
                                {
                                    expense ? <Link to="/addexpense"><button className=''>ADD</button></Link> : ''
                                }

                            </div>
                        </div>
                    </div>

                    <div className='layout-main'>
                        <Routes>
                            <Route path="/" element={<ExpenseTracking expensename={setName} expense={setExpense} />} />
                            <Route path="/category" element={<Category Categoryname={setName} Category={setExpense} />} />
                            <Route path="/addexpense" element={<AddExpense AddExpense={setName} expense={setExpense} />} />
                            <Route path="/updateexpense" element={<UpdateExpense UpdateExpense={setName} expense={setExpense} />} />
                        </Routes>
                    </div>

                    <div className='expense-tracking-buttons'>
                        <Link to="/">
                            <button onClick={() => handleButtonClick('expensebutton')}
                                className={selectedButton === 'expensebutton' ? 'expense-tracking-buttons-selected' : 'expense-tracking-buttons-notselected'
                                }
                            >
                                Expense
                            </button>
                        </Link>
                        <Link to="/category">
                            <button onClick={() => handleButtonClick('categorybutton')}
                                className={selectedButton === 'categorybutton' ? 'expense-tracking-buttons-selected' : 'expense-tracking-buttons-notselected'}
                            >Category</button>
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}
export default Layout;