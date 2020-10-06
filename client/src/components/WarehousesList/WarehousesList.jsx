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
                    <h4 className="warehouses__headings-warehouse">WAREHOUSE</h4>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-address">
                    <h4 className="warehouses__headings-warehouse">ADDRESS</h4>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-contact-name">
                    <h4 className="warehouses__headings-warehouse">CONTACT NAME</h4>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-contact-info">
                    <h4 className="warehouses__headings-warehouse">CONTACT INFORMATION</h4>
                    <img src={Arrows} alt="Arrows" className="warehouses__headings-icon"/>
                </div>
                <div className="warehouses__title warehouses__title-actions">
                    <h4 className="warehouses__headings-warehouse">ACTIONS</h4>
                </div>
            </div>
            <WarehouseListItem />
        </div>
    );
};

export default WarehousesList;
