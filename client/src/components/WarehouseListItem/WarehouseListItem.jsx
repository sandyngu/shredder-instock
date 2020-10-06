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
                <div className="warehouse-list__container">
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">WAREHOUSE</h4>
                        <div className="warehouse-list__city-container">
                            <Link to='/'>
                                <p className="warehouse-list__city">Manhattan</p>
                            </Link>
                                <img src={Arrow} alt="Arrow Icon" className="warehouse-list__icon warehouse-list__icon-arrow"/>
                        </div>
                    </div>
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">ADDRESS</h4>
                        <p className="warehouse-list__address">503 Broadway, New York, USA</p>
                    </div>
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">CONTACT NAME</h4>
                        <p className="warehouse-list__contact-name">Parmin Aujila</p>
                    </div>
                    <div className="warehouse-list__contact-info">
                        <div className="warehouse-list-info">
                            <h4 className="warehouse-list-info-heading">CONTACT INFORMATION</h4>
                            <p className="warehouse-list__contact-info-phone">+ 1 (629) 555-0129</p>
                            <p className="warehouse-list__contact-info-email">paujila@instock.com</p>
                        </div>      
                    </div>
                <div className="warehouse-list__icon-container warehouse-list__icon-container-desktab">
                    <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete"/>
                    <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit"/>
                </div>
                </div>
                <div className="warehouse-list__icon-container warehouse-list__icon-container-mobile">
                    <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete"/>
                    <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit"/>
                </div>
            </div>
        </>
    )
};

export default WarehouseListItem;
