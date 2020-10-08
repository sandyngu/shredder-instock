import React from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
// import Exclamation from '../../assets/icons/error-24px.svg';

import './AddNewWarehouse.scss'



const AddNewWarehouse = () => {
        return (
            <div className="edit-warehouse">
                <div className="edit-warehouse__header-container">
                    <Link to='/warehouses'>
                        <img src={BackArrow} className="edit-warehouse__back-img" alt="Go back"/>
                    </Link>
                    <h1 className="edit-warehouse__title">Add New Warehouse</h1>
                </div>
                    <form className="edit-warehouse__form">
                        <div className="edit-warehouse__warehouse-container">
                            <div className="edit-warehouse__warehouse-title">
                                <h2>Warehouse Details</h2>
                            </div>
                            <ul className="edit-warehouse__warehouse-list">
                                <li className="edit-warehouse__warehouse-list-name">
                                    <label className="edit-warehouse__warehouse-list-name-label">Warehouse Name</label>
                                    <input type='text' placeholder='Warehouse Name' className="edit-warehouse__warehouse-list-name-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-street">
                                    <label className="edit-warehouse__warehouse-list-street-label">Street Address</label>
                                    <input type='text' placeholder='Street Address' className="edit-warehouse__warehouse-list-street-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-city">
                                    <label className="edit-warehouse__warehouse-list-city-label">City</label>
                                    <input type='text' placeholder='City' className="edit-warehouse__warehouse-list-city-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-country">
                                    <label className="edit-warehouse__warehouse-list-country-label">Country</label>
                                    <input type='text' placeholder='Country' className="edit-warehouse__warehouse-list-country-input"/>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="edit-warehouse__border-styling"></div>
                        </div>
                        <div className="edit-warehouse__contact-container">
                            <div className="edit-warehouse__contact-title">
                                <h2>Contact Details</h2>
                            </div>
                            <ul className="edit-warehouse__contact-list">
                                <li className="edit-warehouse__contact-list-name">
                                    <label className="edit-warehouse__contact-list-name-label">Contact Name</label>
                                    <input type='text' placeholder='Contact Name' required className="edit-warehouse__contact-list-name-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-position">
                                    <label className="edit-warehouse__contact-list-position-label">Position</label>
                                    <input type='text' placeholder='Position' className="edit-warehouse__contact-list-position-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-phone">
                                    <label className="edit-warehouse__contact-list-phone-label">Phone Number</label>
                                    <input type='text' placeholder='Phone Number' className="edit-warehouse__contact-list-phone-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-email">
                                    <label className="edit-warehouse__contact-list-email-label">Email</label>
                                    <input type='text' placeholder='Email' className="edit-warehouse__contact-list-email-input"/>
                                </li>
                            </ul>
                        </div>
                        <div className="edit-warehouse__button-container">
                            <button className="edit-warehouse__button-cancel">Cancel</button>
                            <button className="edit-warehouse__button-add">+ Add Warehouse</button>
                        </div>
                    </form>
              </div>

        ) 
};

export default AddNewWarehouse;