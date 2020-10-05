import React from 'react'
import { Link } from 'react-router-dom';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import Arrow from '../../assets/icons/chevron_right-24px.svg';

function WarehouseListItem() {
    return (
        <div className="warehouse-list">
            <Link to='/'>
                <p className="warehouse-list__city">Manhattan<img src={Arrow} alt="Arrow Icon" className="warehouse-list__icon warehouse-list__icon-arrow"/></p>
            </Link>
            <p className="warehouse-list__address">503 Broadway, New York, USA</p>
            <p className="warehouse-list__contact-name">Parmin Aujila</p>
            <div className="warehouse-list__contact-info">
                <p className="warehouse-list__contact-info-phone">+ 1 (629) 555-0129</p>
                <p className="warehouse-list__contact-info-email">paujila@instock.com</p>
            </div>
            <div className="warehouse-list__icon-container">
                <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete"/>
                <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit"/>
            </div>
        </div>
    )
};

export default WarehouseListItem;
