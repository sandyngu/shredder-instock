import React from 'react';
import { Link } from 'react-router-dom';
import Exit from '../../assets/icons/close-24px.svg';
import './delete-warehouse.scss';

function DeleteWarehouse(props) {
    if (!props.display) {
        return null;
    }
    return (
        <div className="delete-warehouse">
            <div className="delete-warehouse__container">
                <Link to='/warehouses/delete'>
                    <img src={Exit} alt="Exit Icon" className="delete-warehouse__icon"/>
                </Link>
                <h1 className="delete-warehouse__heading">Delete King West warehouse?</h1>
                <p className="delete-warehouse__text">Please confirm that you’d like to delete the King West from the list of warehouses. You won’t be able to undo this action.</p>
                <div className="delete-warehouse__button-container">
                    <button className="delete-warehouse__button delete-warehouse__button-cancel">Cancel</button>
                    <button className="delete-warehouse__button delete-warehouse__button-delete">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWarehouse
