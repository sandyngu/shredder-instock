import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import uuid from 'uuid'
import BackArrow from '../../assets/icons/arrow_back-24px.svg';

import './EditWarehouse.scss'

function EditWarehouse(props) {
console.log(props)

        return (
  
            <div className="edit-warehouse">
                <div className="edit-warehouse__header-container">
                    <Link to='/warehouses'>
                        <img src={BackArrow} className="edit-warehouse__back-img" alt="Go back"/>
                    </Link>
                    <h1 className="edit-warehouse__title">Edit Warehouse</h1>
                </div>
                    <form className="edit-warehouse__form">
                        <div className="edit-warehouse__warehouse-container">
                            <div className="edit-warehouse__warehouse-title">
                                <h2>Warehouse Details</h2>
                            </div>
                            <ul className="edit-warehouse__warehouse-list">
                                <li className="edit-warehouse__warehouse-list-name">
                                    <label className="edit-warehouse__warehouse-list-name-label">Warehouse Name</label>
                                    <input type='text' value={props.name} placeholder='Warehouse Name' className="edit-warehouse__warehouse-list-name-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-street">
                                    <label className="edit-warehouse__warehouse-list-street-label">Street Address</label>
                                    <input type='text' value={props.address} placeholder='Street Address' className="edit-warehouse__warehouse-list-street-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-city">
                                    <label className="edit-warehouse__warehouse-list-city-label">City</label>
                                    <input type='text' value={props.city} placeholder='City' className="edit-warehouse__warehouse-list-city-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-country">
                                    <label className="edit-warehouse__warehouse-list-country-label">Country</label>
                                    <input type='text' value={props.country} placeholder='Country' className="edit-warehouse__warehouse-list-country-input"/>
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
                                    <input type='text' value={props.name} placeholder='Contact Name' required className="edit-warehouse__contact-list-name-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-position">
                                    <label className="edit-warehouse__contact-list-position-label">Position</label>
                                    <input type='text' value={props.position} placeholder='Position' className="edit-warehouse__contact-list-position-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-phone">
                                    <label className="edit-warehouse__contact-list-phone-label">Phone Number</label>
                                    <input type='text' value={props.phone} placeholder='Phone Number' className="edit-warehouse__contact-list-phone-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-email">
                                    <label className="edit-warehouse__contact-list-email-label">Email</label>
                                    <input type='text' value={props.email} placeholder='Email' className="edit-warehouse__contact-list-email-input"/>
                                </li>
                            </ul>
                        </div>
                        <div className="edit-warehouse__button-container">
                            <button className="edit-warehouse__button-cancel">Cancel</button>
                            <button className="edit-warehouse__button-save">Save</button>
                        </div>
                    </form>
              </div>  
        )
        
    };
        
export default EditWarehouse;