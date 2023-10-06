import React from 'react';
import './expensetracking.css';
import { expensedata } from '../../data/expensesData';
import { Link } from 'react-router-dom';

const ExpenseTracking = ({ expensename, expense }) => {
    expensename("Expense Tracking");
    expense(true)
    return (
        <>
           {
                expensedata && expensedata.map((data) => (
                    <div className='expense-details'>
                        <div className='expense-date-total-details'>
                            <div className='expense-date'>
                                {data.date}
                            </div>
                            <div className='expense-rupay'>
                                rs 2000
                            </div>
                            <div>
                                <Link className='edit-expense-buton' to="/updateexpense"><button>Edit</button></Link>
                            </div>
                        </div>

                        {
                            data.category && data.category.map((category) => (
                                <div className={category.name === 'Work' ? "category-work-border expense-category-details" : "category-other-border expense-category-details"}>
                                    <div className={category.name === 'Work' ? "category-name-work" : "category-name-other"}>
                                        {category.name}
                                    </div>
                                    <div className={category.name === 'Work' ? "category-rupay-work" : "category-rupay-other"}>
                                        {category.rupies}
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                ))
            }
        </>
    );
}
export default ExpenseTracking;