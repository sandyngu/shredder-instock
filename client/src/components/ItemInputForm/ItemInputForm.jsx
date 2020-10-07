import React from 'react';
import { NavLink } from 'react-router-dom';
import './ItemInputForm.scss';

function ItemInputForm() {

    return (
        <>
            <form className="item-form">
                <div className="item-form__details">
                <h2 className="item-form__title">Item Details</h2>
                <label className="item-form__label">Item Name</label>
                <input className="item-form__input" type="text" placeHolder="Item Name" name="name" />
                <label className="item-form__label">Description</label>
                <textarea className="item-form__description-input" type="text" placeHolder="Please enter a brief item description..." name="description" />
                <label className="item-form__label">Category</label>
                <select className="item-form__dropdown" placeHolder="Please Select">
                    <option value="">Please select</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Health">Health</option>
                </select>
                </div>
            <div className="item-form__availability">
                <h2 className="item-form__title">Item Availability</h2>
                <label className="item-form__label">Status</label>
                <div className="item-form__status-container">
                    <input className="item-form__status-option" type="radio" value="In Stock" name="stockStatus" />
                    <input className="item-form__status-option" type="radio" value="Out of Stock" name="stockStatus" />
                </div>
                <label className="item-form__label">Quantity</label>
                <input className="item-form__input" type="text" placeHolder="0" name="quantity" />
                <label className="item-form__label">Warehouse</label>
                <select className="item-form__dropdown">
                    <option value="">Please select</option>
                    <option value="Manhatten">Manhatten</option>
                    <option value="King West">King West</option>
                    <option value="Granville">Granville</option>
                    <option value="San Fran">San Fran</option>
                    <option value="Santa Monica">Santa Monica</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Montrea">Montreal</option>
                    <option value="Boston">Boston</option>
                </select>
                <div className="item-form__button">
                    <button className="item-form__button-cancel">Cancel</button>
                    <button className="item-form__button-add">+ Add Item</button>
                </div>
            </div>
        </form>
        </>
    )


}

export default ItemInputForm;