import React, { useState } from 'react';
import { categoryList } from '../../data/categoryList';
import { RxCross2 } from 'react-icons/rx';
import './category.css';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal'

const Category = ({ Categoryname, Category }) => {
    Categoryname("Category");
    Category(false)
    const [openModal, setOpenModal] = useState(false);
    const openConfirmationModal = () => {
        setOpenModal(true)
    }

    const closeConfirmationModal = () => {
        setOpenModal(false)
    }
    console.log(openModal)
    return (
        <>
            <div className={openModal ? 'category-list-modalopen' : ''} >
                {
                    categoryList && categoryList.map((list) => (
                        <>
                            <div className='category-list-details' >
                                <div key={list.id} className='category-name'>
                                    {list.category}
                                </div>
                                <div onClick={openConfirmationModal}>
                                    <RxCross2 onClick={openConfirmationModal} color='red' />
                                </div>
                            </div>


                        </>
                    ))}
                <div className='category-add-input'>
                    <input
                        type='text'
                    />
                </div>
                <div className='category-add-button'>
                    <button>Add</button>
                </div>
            </div>
            <div>
                   <ReactModal isOpen={openModal} onRequestClose={closeConfirmationModal} ariaHideApp={false}>
                        <div className='modal-main'>
                            <div className='expense-removal-details'>
                                <div className='this-removed'>Wil be removed</div>
                                <div className='all-expense-remove'>All the expenses wuth category will also be removed</div>
                                <div className='confirm-expense-remove'>Do you really want to remove?</div>
                            </div>
                            <div className='remove-category-button'>
                                <Link className='remove-category-link' to="/category"><button onClick={closeConfirmationModal} className='cancel-button'>Cancel</button></Link>
                                <Link className='remove-category-link' to="/category"><button onClick={closeConfirmationModal} className='confirm-button'>Confirm</button></Link>
                            </div>
                        </div>
                    </ReactModal>
            </div>
        </>
    );
}
export default Category;