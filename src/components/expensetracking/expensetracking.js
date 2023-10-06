import React, { useState } from 'react';
import './expensetracking.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ExpenseTracking = ({ expensename, expense }) => {
    expensename("Expense Tracking");
    expense(true);
    const expensedata = useSelector((state) => state.ExpenseTrack)
    const categoryList = useSelector((state) => state.categoryList)

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
                                {data.category.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.rupies
                                }, 0)}
                            </div>
                            <div>
                                 <Link className='edit-expense-buton' to={`/updateexpense/${data.id}`}><button>Edit</button></Link> 
                            </div>
                        </div>
                        {
                            categoryList && categoryList.length > 0 && data.category && data.category.length === 1 ? data.category[0] : data.category.map((category) => (


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