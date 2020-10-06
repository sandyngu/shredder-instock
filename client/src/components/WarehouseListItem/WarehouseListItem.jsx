import React from 'react'
import { Link } from 'react-router-dom';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import Arrow from '../../assets/icons/chevron_right-24px.svg';
import './warehouse-list-item.scss';

function WarehouseListItem() {
    return (
        <>
        <div className="warehouse-list">
            <div className="warehouse-list-info">
                <p className="warehouse-list-info-heading">WAREHOUSE</p>
                <Link to='/'>
                    <p className="warehouse-list__city">Manhattan</p>
                    <img src={Arrow} alt="Arrow Icon" className="warehouse-list__icon warehouse-list__icon-arrow"/>
                </Link>
            </div>
            <div className="warehouse-list-info">
                <p className="warehouse-list-info-heading">ADDRESS</p>
                <p className="warehouse-list__address">503 Broadway, New York, USA</p>
            </div>
            <div className="warehouse-list-info">
                <p className="warehouse-list-info-heading">CONTACT NAME</p>
                <p className="warehouse-list__contact-name">Parmin Aujila</p>
            </div>
            <div className="warehouse-list__contact-info">
                <div className="warehouse-list-info">
                    <p className="warehouse-list-info-heading">CONTACT INFORMATION</p>
                    <p className="warehouse-list__contact-info-phone">+ 1 (629) 555-0129</p>
                    <p className="warehouse-list__contact-info-email">paujila@instock.com</p>
                </div>      
            </div>
        </div>
        <div className="warehouse-list__icon-container">
            <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete"/>
            <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit"/>
        </div>
        </>
    )
};

export default WarehouseListItem;
