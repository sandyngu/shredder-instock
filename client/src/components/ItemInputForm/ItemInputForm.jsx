import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemInputForm.scss';
import Dropdown from '../../assets/icons/arrow_drop_down-24px.svg';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class ItemInputForm extends Component {

    clickHandler = (event) => {
        event.preventDefault();
        const addItem = {
            id: uuidv4(),
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: event.target.status.value,
            quantity: event.target.quantity.value,
            warehouseName: event.target.warehouseName.value,
            warehouseID:'make dynamic'
        }
        console.log(addItem);
        axios.post("http://localhost:8080/inventories", addItem)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        document.querySelector('./input-form__input');
        document.querySelector('./input-form__description-input');
        document.querySelector('./input-form__dropdown');
        document.querySelector('./input-form__status');
        window.location.replace('/');
    }

    render() {
        return (
            <>
                <form className="item-form" onSubmit={this.clickHandler}>
                    <div className="item-form__masterdiv">
                        <div className="item-form__details">
                            <h2 className="item-form__title">Item Details</h2>
                            <label className="item-form__label">Item Name</label>
                            <input className="item-form__input" type="text" placeHolder="Item Name" name="itemName" />
                            <label className="item-form__label">Description</label>
                            <textarea className="item-form__description-input" type="text" placeHolder="Please enter a brief item description..." name="description" />
                            <label className="item-form__label">Category</label>
                            <select className="item-form__dropdown" type="text" placeHolder="Please Select" name="category">
                                <option type="text" value="">Please select</option>
                                <option type="text" value="Electronics">Electronics</option>
                                <option type="text" value="Gear">Gear</option>
                                <option type="text" value="Apparel">Apparel</option>
                                <option type="text" value="Accessories">Accessories</option>
                                <option type="text" value="Health">Health</option>
                            </select>
                        </div>
                        <div className="item-form__line"></div>
                        <div className="item-form__availability">
                            <h2 className="item-form__title">Item Availability</h2>
                            <label className="item-form__label">Status</label>
                            <div className="item-form__status">
                                <div className="item-form__status-subcontainer">
                                    <input className="item-form__status-subcontainer-option" type="radio" value="In Stock" name="status" />
                                    <p className="item-form__status-subcontainer-text">In stock</p>
                                </div>
                                <div className="item-form__status-subcontainer">
                                    <input className="item-form__status-subcontainer-option" type="radio" value="Out of Stock" name="status" />
                                    <p className="item-form__status-subcontainer-text">Out of stock</p>
                                </div>
                            </div>
                            <label className="item-form__label">Quantity</label>
                            <input className="item-form__input" type="number" placeHolder="0" name="quantity" />
                            <label className="item-form__label">Warehouse</label>
                            <select className="item-form__dropdown" type="text" name="warehouseName">
                                <option type="text" value=''>Please Select</option>
                                <option type="text" value="Manhatten">Manhatten</option>
                                <option type="text" value="King West">King West</option>
                                <option type="text" value="Granville">Granville</option>
                                <option type="text" value="San Fran">San Fran</option>
                                <option type="text" value="Santa Monica">Santa Monica</option>
                                <option type="text" value="Seattle">Seattle</option>
                                <option type="text" value="Montrea">Montreal</option>
                                <option type="text" value="Boston">Boston</option>
                            </select>
                        </div>
                    </div>
                    <div className="item-form__button">
                        <div className="item-form__button-box">
                            <button className="item-form__button-cancel">Cancel</button>
                            <button className="item-form__button-add"> + Add Item</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default ItemInputForm;