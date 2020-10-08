import React from 'react'
import { Link } from 'react-router-dom';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import Arrow from '../../assets/icons/chevron_right-24px.svg';
import './warehouse-list-item.scss';

function WarehouseListItem(props) {

    return (
        <>
            {props.warehousesList.map(warehouse =>
            <div className="warehouse-list" key={warehouse.id}>
                <div className="warehouse-list__container">
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">WAREHOUSE</h4>
                        <div className="warehouse-list__city-container">
                            <Link to={`/warehouses/${warehouse.id}`}>
                                <p className="warehouse-list__city">{warehouse.name}</p>
                            </Link>
                            <img src={Arrow} alt="Arrow Icon" className="warehouse-list__icon warehouse-list__icon-arrow" />
                        </div>
                    </div>
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">ADDRESS</h4>
                        <p className="warehouse-list__address">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                    </div>
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">CONTACT NAME</h4>
                        <p className="warehouse-list__contact-name">{warehouse.contact.name}</p>
                    </div>
                    <div className="warehouse-list__contact-info">
                        <div className="warehouse-list-info">
                            <h4 className="warehouse-list-info-heading">CONTACT INFORMATION</h4>
                            <p className="warehouse-list__contact-info-phone">{warehouse.contact.phone}</p>
                            <p className="warehouse-list__contact-info-email">{warehouse.contact.email}</p>
                        </div>
                    </div>
                    <div className="warehouse-list__icon-container warehouse-list__icon-container-desktab">
                        <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete" onClick={(e) => {props.deleteModal()}}/>
                        <Link to='/warehouses/edit-warehouse'>
                            <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit" />
                        </Link>
                    </div>
                </div>
                <div className="warehouse-list__icon-container warehouse-list__icon-container-mobile">
                    <Link to='/warehouses/delete-warehouse'>
                        <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete" />
                    </Link>
                    <Link to='/warehouses/edit-warehouse'>
                        <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit" />
                    </Link>
                </div>
            </div>
            )}
        </>
    )
};

export default WarehouseListItem;
