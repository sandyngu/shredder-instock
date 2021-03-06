import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './edit-item-form.scss';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Warning from '../../assets/icons/error-24px.svg';


class EditItemForm extends Component {

    state = {
        id: '',
        itemName: '',
        description: '',
        category: '',
        status: '',
        quantity: 0,
        warehouseName: ''
    };

    componentDidMount() {
        const { match } = this.props;
        console.log(this.props);
        console.log(match);
        console.log(match.params.id);
        console.log(match.params.warehouseName);
        if (match.params.id !== this.state.id && match.params.warehouseName !== this.state.warehouseName) {
            axios.get(`http://localhost:8080/inventories/${match.params.id}/${match.params.warehouseName}`)
                .then(response => {
                    console.log(response.data);
                    this.setState(
                        {
                            id: response.data.id,
                            itemName: response.data.itemName,
                            description: response.data.description,
                            category: response.data.category,
                            status: response.data.status,
                            quantity: response.data.quantity,
                            warehouseName: response.data.warehouseName
                        }
                    );

                })
                .catch(error => console.log(error));
        }
    }


    submitForm = async (event) => {
        event.preventDefault();

        const editedItem = {
            id: uuidv4(),
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: event.target.status.value,
            warehouseName: event.target.warehouseName.value,
            warehouseID: 'make dynamic'
        }
        await axios.put("http://localhost:8080/inventories", editedItem)
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        itemName: '',
                        description: '',
                        category: '',
                        status: '',
                        quantity: 0,
                        warehouseName: '',
                    }
                );
            })
            .catch(error => console.log(error));
    };

    submitForm = async (event) => {
        event.preventDefault();

            const addItem = {
                id: uuidv4(),
                itemName: event.target.itemName.value,
                description: event.target.description.value,
                category: event.target.category.value,
                status: event.target.status.value,
                quantity: event.target.quantity.value,
                warehouseName: event.target.warehouseName.value,
                warehouseID: 'make dynamic'
            }

            console.log(addItem);
            await axios.post("http://localhost:8080/inventories", addItem)
                .then(response => {
                    console.log(event.target);
                    this.setState(
                        {
                            itemName: '',
                            description: '',
                            category: '',
                            status: '',
                            quantity: 0,
                            warehouseName: '',
                        }
                    );
                    //window.location.replace('/');
                })
                .catch(error => console.log(error));
    };

    getNewInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    render() {
        return (
            <>
                <form className="item-form" onSubmit={this.submitForm} onChange={this.getNewInput}>
                    <div className="item-form__masterdiv">
                        <div className="item-form__details">
                            <h2 className="item-form__title">Item Details</h2>
                            <label className="item-form__label">Item Name</label>
                            <input className="item-form__input" type="text" name="itemName" required value={this.state.itemName} />
                            {this.state.itemName === "" && (
                                <div className="item-form__error-box">
                                    <img className="item-form__warning" src={Warning} alt="Warning Sign"/>
                                    <div className="item-form__error"> This field is required</div>
                                </div>
                            )}
                            <label className="item-form__label">Description</label>
                            <textarea className="item-form__description-input" type="text" name="description" required value={this.state.description} />
                            {this.state.description === "" && (
                                <div className="item-form__error-box">
                                    <img className="item-form__warning" src={Warning} alt="Warning Sign"/>
                                    <div className="item-form__error">This field is required</div>
                                </div>
                            )}
                            <label className="item-form__label">Category</label>
                            <select className="item-form__dropdown" type="text" name="category" required value={this.state.category}>
                                <option type="text" value="Electronics">Electronics</option>
                                <option type="text" value="Gear">Gear</option>
                                <option type="text" value="Apparel">Apparel</option>
                                <option type="text" value="Accessories">Accessories</option>
                                <option type="text" value="Health">Health</option>
                            </select>
                            {this.state.category === "" && (
                                <div className="item-form__error-box">
                                    <img className="item-form__warning" src={Warning} alt="Warning Sign"/>
                                    <div className="item-form__error">This field is required</div>
                                </div>
                            )}
                        </div>
                        <div className="item-form__line"></div>
                        <div className="item-form__availability">
                            <h2 className="item-form__title">Item Availability</h2>
                            <label className="item-form__label">Status</label>
                            <div className="item-form__status">
                                <div className="item-form__status-subcontainer">
                                    <input className="item-form__status-subcontainer-option" type="radio" required value="In Stock" name="status" />
                                    <p className="item-form__status-subcontainer-text">In stock</p>
                                </div>
                                <div className="item-form__status-subcontainer">
                                    <input className="item-form__status-subcontainer-option" type="radio" required value="Out of Stock" name="status" />
                                    <p className="item-form__status-subcontainer-text">Out of stock</p>
                                </div>
                            </div>
                            {this.state.status === "" && (
                                <div className="item-form__error-box">
                                    <img className="item-form__warning" src={Warning} alt="Warning Sign"/>
                                    <div className="item-form__error">This field is required</div>
                                </div>
                            )}

                            <label className="item-form__label">Warehouse</label>
                            <select className="item-form__dropdown" type="text" name="warehouseName" required value={this.state.warehouseName}>
                                <option type="text" value=''>Please Select</option>
                                <option type="text" value="Manhatten">Manhatten</option>
                                <option type="text" value="King West">King West</option>
                                <option type="text" value="Granville">Granville</option>
                                <option type="text" value="San Fran">San Fran</option>
                                <option type="text" value="Santa Monica">Santa Monica</option>
                                <option type="text" value="Seattle">Seattle</option>
                                <option type="text" value="Montreal">Montreal</option>
                                <option type="text" value="Boston">Boston</option>
                            </select>
                            {this.state.warehouseName === "" && (
                                <div className="item-form__error-box">
                                    <img className="item-form__warning" src={Warning} alt="Warning Sign"/>
                                    <div className="item-form__error">This field is required</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="item-form__button">
                        <div className="item-form__button-box">
                            <button className="item-form__button-cancel">Cancel</button>
                            <button className="item-form__button-add">Save</button>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default EditItemForm;