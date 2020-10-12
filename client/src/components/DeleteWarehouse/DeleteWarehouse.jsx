import React from 'react';
import { Link } from 'react-router-dom';
import Exit from '../../assets/icons/close-24px.svg';
import './delete-warehouse.scss';

function DeleteWarehouse(props) {
    const { id, name, address, city, country } = props.singleWarehouse

    if (!props.display) {
        return null;
    }
    return (
        <div className="delete-warehouse">
            <div className="delete-warehouse__container">
                <Link to='/warehouses'>
                    <img src={Exit} alt="Exit Icon" className="delete-warehouse__icon" onClick={() => props.closeModal()}/>
                </Link>
                <h1 className="delete-warehouse__heading">Delete {name} warehouse?</h1>
                <p className="delete-warehouse__text">Please confirm that you’d like to delete the {name} from the list of warehouses. You won’t be able to undo this action.</p>
                <div className="delete-warehouse__button-container">
                    <Link to='/warehouses' className="delete-warehouse__cancel">
                        <button className="delete-warehouse__button delete-warehouse__button-cancel" onClick={() => props.closeModal()}>Cancel</button>
                    </Link>
                    <button className="delete-warehouse__button delete-warehouse__button-delete" onClick={() => {
                        console.log(id, name, address, city, country, name, props.singleWarehouse.contact.position, props.singleWarehouse.contact.phone, props.singleWarehouse.contact.email)
                        props.deleteWarehouse(id, name, address, city, country, name, props.singleWarehouse.contact.position, props.singleWarehouse.contact.phone, props.singleWarehouse.contact.email);
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWarehouse;