import React from 'react'
import { Link } from 'react-router-dom';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import Arrow from '../../assets/icons/chevron_right-24px.svg';
import './warehouse-list-item.scss';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';

function WarehouseListItem(props) {
    const { name, address, city, country, contact, } = props

    return (
        <>
            <div className="warehouse-list">
                <div className="warehouse-list__container warehouse__hide">
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">WAREHOUSE</h4>
                        <div className="warehouse-list__city-container">
                            <Link to={`/warehouses/${name}`}>
                                <p className="warehouse-list__city">{name}</p>
                            </Link>
                            <img src={Arrow} alt="Arrow Icon" className="warehouse-list__icon warehouse-list__icon-arrow" />
                        </div>
                    </div>
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">ADDRESS</h4>
    <p className="warehouse-list__address">{address}, {city}, {country}</p>
                    </div>
                    <div className="warehouse-list-info">
                        <h4 className="warehouse-list-info-heading">CONTACT NAME</h4>
                        <p className="warehouse-list__contact-name">{contact.name}</p>
                    </div>
                    <div className="warehouse-list__contact-info">
                        <div className="warehouse-list-info">
                            <h4 className="warehouse-list-info-heading">CONTACT INFORMATION</h4>
                            <p className="warehouse-list__contact-info-phone">{contact.phone}</p>
                            <p className="warehouse-list__contact-info-email">{contact.email}</p>
                        </div>
                    </div>
                    <div className="warehouse-list__icon-container warehouse-list__icon-container-desktab">
                        <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete" onClick={(e) => {props.activateModal()}}/>
                        <Link to='/warehouses/edit-warehouse'>
                            <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit" />
                        </Link>
                    </div>
                </div>
                <div className="warehouse-list__icon-container warehouse-list__icon-container-mobile warehouse__hide">
                    <img src={Delete} alt="Delete Icon" className="warehouse-list__icon warehouse-list__icon-delete" onClick={(e) => {props.activateModal()}}/>
                    <Link to='/warehouses/edit-warehouse'>
                        <img src={Edit} alt="Edit Icon" className="warehouse-list__icon warehouse-list__icon-edit" />
                    </Link>
                </div>
           
            </div>
            <DeleteWarehouse display={props.display}  city={city} address={address} country={country} name={name} contact={contact} deleteWarehouse= {props.deleteWarehouse} closeModal={props.closeModal} 
             />
        </>
    )
};

export default WarehouseListItem;
