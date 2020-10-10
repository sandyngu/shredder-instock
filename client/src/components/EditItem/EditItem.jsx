import React from 'react';
import EditItemForm from '../ItemInputForm/ItemInputForm';
import './edit-item.scss';
import Arrow from '../../assets/icons/arrow_back-24px.svg';

function EditItem() {

    return (

        <>
            <section className="edititem">
                <div className="edititem__top">
                    <img className="edititem__top-arrow" src={Arrow} alt="Back arrow" />
                    <h1 className="edititem__top-title">Edit Inventory Item</h1>
                </div>
                <div className="edititem__import">
                    <EditItemForm />
                </div>
            </section>
        </>
    )
}

export default EditItem;