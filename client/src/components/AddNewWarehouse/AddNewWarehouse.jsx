import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import Exclamation from '../../assets/icons/error-24px.svg';

import './AddNewWarehouse.scss'

class AddNewWarehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            country: '',
            contact: {
                name: '',
                position: '',
                phone: '',
                email: '',
            }
            
        };
    }

        handleSubmit = (e) => {
            e.preventDefault();
            
            const addWarehouseData = {
                id: uuidv4(),
                name: e.target.name.value,
                address: e.target.address.value,
                city: e.target.city.value,
                country: e.target.country.value,          
                contact: {
                    name: e.target.name.value,
                    position: e.target.position.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value
                }
                
            };
                
            // if (e.target.name.value === '') {
            //     this.setState({ name: true });
            // }
            // if (e.target.address.value === '') {
            //     this.setState({ address: true });
            // }
            // if (e.target.city.value === '') {
            //     this.setState({ city: true });
            // }
            // if (e.target.country.value === '') {
            //     this.setState({ country: true });
            // }
            // if (e.target.contactName.value === '') {
            //     this.setState({ contactName: true });
            // }
            // if (e.target.position.value === '') {
            //     this.setState({ position: true });
            // }
            // if (e.target.phone.value === '') {
            //     this.setState({ phone: true });
            // }
            // if (e.target.email.value === '') {
            //     this.setState({ email: true });
            // }

            Axios.post('http://localhost:8080/warehouses', addWarehouseData) 
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });

        };
        AddNewInput = e => {
            this.setState({
                [e.target.name] : e.target.value,
            })
        };

        formCancel = (e) => {
            e.preventDefault();
            this.setState({
                name: '',
                address: '',
                city: '',
                country: '',
                name: '',
                position: '',
                phone: '',
                email: '',
            });
        };

            render() {

                return (
                    <div className="edit-warehouse">
                        <div className="edit-warehouse__header-container">
                            <Link to='/warehouses'>
                                <img src={BackArrow} className="edit-warehouse__back-img" alt="Go back"/>
                            </Link>
                            <h1 className="edit-warehouse__title">Add New Warehouse</h1>
                        </div>
                            <form className="edit-warehouse__form" method="post" required name="addNew" onSubmit={this.handleSubmit} onChange={this.AddNewInput} >
                                <div className="edit-warehouse__warehouse-container">
                                    <div className="edit-warehouse__warehouse-title">
                                        <h2>Warehouse Details</h2>
                                    </div>
                                    <ul className="edit-warehouse__warehouse-list">
                                        <li className="edit-warehouse__warehouse-list-name">
                                            <label className="edit-warehouse__warehouse-list-name-label">Warehouse Name</label>
                                            <input type='text' name="name"  value={this.state.name} placeholder='Warehouse Name' className="edit-warehouse__warehouse-list-name-input"/>
                                            {this.state.name === "" && (
                                                <div className="edit-warehouse__error-container">
                                                    <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                    <div className="edit-warehouse__error-msg">This field is required</div>
                                                </div>
                                            )}
                                        </li>
                                        <li className="edit-warehouse__warehouse-list-street">
                                            <label className="edit-warehouse__warehouse-list-street-label">Street Address</label>
                                            <input type='text' name="address" value={this.state.address} placeholder='Street Address' className="edit-warehouse__warehouse-list-street-input"/>
                                            {this.state.address === "" && (
                                                <div className="edit-warehouse__error-container">
                                                    <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                    <div className="edit-warehouse__error-msg">This field is required</div>
                                                </div>
                                            )}
                                        </li>
                                        <li className="edit-warehouse__warehouse-list-city">
                                            <label className="edit-warehouse__warehouse-list-city-label">City</label>
                                            <input type='text' name="city" value={this.state.city} placeholder='City' className="edit-warehouse__warehouse-list-city-input"/>
                                            {this.state.city === "" && (
                                                <div className="edit-warehouse__error-container">
                                                    <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                    <div className="edit-warehouse__error-msg">This field is required</div>
                                                </div>
                                            )}
                                        </li>
                                        <li className="edit-warehouse__warehouse-list-country">
                                            <label className="edit-warehouse__warehouse-list-country-label">Country</label>
                                            <input type='text' name="country" value={this.state.country} placeholder='Country' className="edit-warehouse__warehouse-list-country-input"/>
                                            {this.state.country === "" && (
                                                <div className="edit-warehouse__error-container">
                                                    <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                    <div className="edit-warehouse__error-msg">This field is required</div>
                                                </div>
                                            )}
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
                                            <input type='text' name="name" value={this.state.name} placeholder='Contact Name' className="edit-warehouse__contact-list-name-input"/>
                                            {this.state.name === "" && (
                                                        <div className="edit-warehouse__error-container">
                                                            <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                            <div className="edit-warehouse__error-msg">This field is required</div>
                                                        </div>
                                                    )}
                                        </li>
                                        <li className="edit-warehouse__contact-list-position">
                                            <label className="edit-warehouse__contact-list-position-label">Position</label>
                                            <input type='text' name="position" value={this.state.position} placeholder='Position' className="edit-warehouse__contact-list-position-input"/>
                                            {this.state.contact.position === "" && (
                                                        <div className="edit-warehouse__error-container">
                                                            <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                            <div className="edit-warehouse__error-msg">This field is required</div>
                                                        </div>
                                                    )}
                                        </li>
                                        <li className="edit-warehouse__contact-list-phone">
                                            <label className="edit-warehouse__contact-list-phone-label">Phone Number</label>
                                            <input type='text' name="phone" value={this.state.phone} placeholder='Phone Number' className="edit-warehouse__contact-list-phone-input"/>
                                            {this.state.contact.phone === "" && (
                                                        <div className="edit-warehouse__error-container">
                                                            <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                            <div className="edit-warehouse__error-msg">This field is required</div>
                                                        </div>
                                                    )}
                                        </li>
                                        <li className="edit-warehouse__contact-list-email">
                                            <label className="edit-warehouse__contact-list-email-label">Email</label>
                                            <input type='text' name="email" value={this.state.email} placeholder='Email' className="edit-warehouse__contact-list-email-input"/>
                                            {this.state.contact.email === "" && (
                                                        <div className="edit-warehouse__error-container">
                                                            <img className="edit-warehouse__error-img" src={Exclamation} alt="exclamation"/>
                                                            <div className="edit-warehouse__error-msg">This field is required</div>
                                                        </div>
                                                    )}
                                        </li>
                                    </ul>
                                </div>
                                <div className="edit-warehouse__button-container">
                                    <button onClick={this.formCancel} className="edit-warehouse__button-cancel">Cancel</button>
                                    <button type="submit" value="add" className="edit-warehouse__button-add">+ Add Warehouse</button>
                                </div>
                            </form>
                            <div className="footer">
                                <p className="footer__text">© InStock Inc. All Rights Reserved.</p>   
                            </div>
                    </div>
        );
    };
};

    export default AddNewWarehouse;
