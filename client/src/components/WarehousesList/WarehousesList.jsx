import React from 'react'
import WarehouseListItem from '../WarehouseListItem/WarehouseListItem';
import Arrows from '../../assets/icons/sort-24px.svg';
import './warehouses-list.scss';

function WarehousesList() {
    return (
        <div className="warehouses">
            <div className="warehouses__header">
                <h1 className="warehouses__header-title">Warehouses</h1>
                <div className="warehouses__header-container">
                    <form className="warehouses__header-form">
                        <input type="text" name="search" className="warehouses__header-form-search" placeholder="Search..."/>
                        <button className="warehouses__header-form-button">+ Add New Warehouse</button>
                    </form>
                </div>
            </div>
            <div className="warehouses__headings">
                <div className="warehouses__title warehouses__title-warehouse">
                    <p className="warehouses__headings-warehouse">WAREHOUSE</p>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-address">
                    <p className="warehouses__headings-warehouse">ADDRESS</p>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-contact-name">
                    <p className="warehouses__headings-warehouse">CONTACT NAME</p>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-contact-info">
                    <p className="warehouses__headings-warehouse">CONTACT INFORMATION</p>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-actions">
                    <p className="warehouses__headings-warehouse">ACTIONS</p>
                </div>
            </div>
            <WarehouseListItem />
        </div>
    );
};

export default WarehousesList;
