import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';



const EditWarehouse = () => {
        return (

            <div className="edit-warehouse">
                <div className="edit-warehouse__header-container">
                    <Link to='/warehouses'>
                        <img src={BackArrow} className="edit-warehouse__back-img" alt="Go back"/>
                    </Link>
                    <h1 className="edit-warehouse__title">Edit Warehouse</h1>
                </div>
                <div className="edit-warehouse__warehouse-container">
                    <div className="edit-warehouse__title">
                        <h2>Warehouse Details</h2>
                    </div>
                    <form className="edit-warehouse__form">
                        <div className="edit-warehouse__warehouse-container">
                            <ul className="edit-warehouse__warehouse-list">
                                <li className="edit-warehouse__warehouse-list-name">
                                    <label className="edit-warehouse__warehouse-list-name-label">Warehouse Name</label>
                                    <input type='text' placeholder='King West' className="edit-warehouse__warehouse-list-name-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-street">
                                    <label className="edit-warehouse__warehouse-list-street-label">Street Address</label>
                                    <input type='text' placeholder='469 King Street West' className="edit-warehouse__warehouse-list-street-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-city">
                                    <label className="edit-warehouse__warehouse-list-city-label">City</label>
                                    <input type='text' placeholder='Toronto' className="edit-warehouse__warehouse-list-city-input"/>
                                </li>
                                <li className="edit-warehouse__warehouse-list-country">
                                    <label className="edit-warehouse__warehouse-list-country-label">Country</label>
                                    <input type='text' placeholder='CAN' className="edit-warehouse__warehouse-list-country-input"/>
                                </li>
                            </ul>
                        </div>
                        <div className="edit-warehouse__contact-container">
                            <ul className="edit-warehouse__contact-list">
                                <li className="edit-warehouse__contact-list-name">
                                    <label className="edit-warehouse__contact-list-name-label">Contact Name</label>
                                    <input type='text' placeholder='Graeme' className="edit-warehouse__contact-list-name-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-position">
                                    <label className="edit-warehouse__contact-list-position-label">Position</label>
                                    <input type='text' placeholder='Warehouse Manager' className="edit-warehouse__contact-list-position-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-phone">
                                    <label className="edit-warehouse__contact-list-phone-label">Phone Number</label>
                                    <input type='text' placeholder='+1 (647) 504-0911' className="edit-warehouse__contact-list-phone-input"/>
                                </li>
                                <li className="edit-warehouse__contact-list-email">
                                    <label className="edit-warehouse__contact-list-email-label">Email</label>
                                    <input type='text' placeholder='glyon@instock.com' className="edit-warehouse__contact-list-email-input"/>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button className="edit-warehouse__button-save">Cancel</button>
                            <button className="edit-warehouse__button-save">Save</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    };


export default EditWarehouse; 