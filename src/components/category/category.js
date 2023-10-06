import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import './category.css';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, removeCategory } from '../../features/categorySlice';

const Category = ({ Categoryname, Category }) => {
    Categoryname("Category");
    Category(false)
    const [openModal, setOpenModal] = useState(false);
    const [category, setCategoryName] = useState('')
    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.CategoryList)
    const openConfirmationModal = () => {
        setOpenModal(true)
    }

    const closeConfirmationModal = () => {
        setOpenModal(false)
    }
    console.log(openModal)
    const handleAddCategory = (e) => {
        e.preventDefault()
        dispatch(addCategory({ id: categoryList[categoryList.length - 1].id + 1, category }))
        setCategoryName('')
    }


    const handleDeleteConfirmation=(id)=>{
        closeConfirmationModal()
        dispatch(removeCategory({ id: id }))
    }
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
                            <Link className='remove-category-link' to="/category"><button onClick={(()=>handleDeleteConfirmation(list.id))} className='confirm-button'>Confirm</button></Link>
                        </div>
                    </div>
                </ReactModal>
            </div>

                        </>
                    ))}
                <form onSubmit={handleAddCategory}>
                    <div className='category-add-input'>
                        <input
                            type='text'
                            value={category}
                            onChange={((e) => setCategoryName(e.target.value))}
                        />
                    </div>
                    <div className='category-add-button'>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
            
        </>
    );
}
export default Category;