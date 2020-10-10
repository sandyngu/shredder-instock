import React from './node_modules/react';
import { NavLink } from './node_modules/react-router-dom';
import ItemInputForm from '../ItemInputForm/ItemInputForm';
import './AddItem.scss';
import axios from './node_modules/axios';
import Arrow from '../../assets/icons/arrow_back-24px.svg';

function AddItem() {

    return (

        <>
            <section className="additem">
                <div className="additem__top">
                    <img className="additem__top-arrow" src={Arrow} alt="Back arrow" />
                    <h1 className="additem__top-title">Add New Inventory Item</h1>
                </div>
                <div className="additem__import">
                    <ItemInputForm />
                </div>
            </section>
        </>
    )
}

export default AddItem;