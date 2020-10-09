import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import WarehouseListItem from '../WarehouseListItem/WarehouseListItem';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import Arrows from '../../assets/icons/sort-24px.svg';
import './warehouses-list.scss';

class WarehousesList extends React.Component {

    state = {
        warehousesList: [],
        display: false
    }

    componentDidMount() {
        axios.get('http://localhost:8080/warehouses')
            .then(res => {
            this.setState({
                warehousesList: res.data
            });
            })
            .catch(err => console.log(err));
    };

    activateModal = (e) => {
        this.setState({
          display: true,
        });
      };

    closeModal = (e) => {
        this.setState({
            display: false
        });
    };

    render() {
        return (
            <>
            <div className="warehouses">
                <div className="warehouses__header">
                    <h1 className="warehouses__header-title">Warehouses</h1>
                    <div className="warehouses__header-container">
                        <form className="warehouses__header-form">
                            <input type="text" name="search" className="warehouses__header-form-search" placeholder="Search..." />
                            <Link to="/warehouses/add-warehouse">
                                <button className="warehouses__header-form-button">+ Add New Warehouse</button>
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="warehouses__headings-container">
                    <div className="warehouses__headings">
                        <div className="warehouses__title warehouses__title-warehouse">
                            <h4 className="warehouses__heading warehouses__headings-warehouse">WAREHOUSE</h4>
                            <img src={Arrows} alt="Arrows" className="warehouses__headings-icon" />
                        </div>
                        <div className="warehouses__title warehouses__title-address">
                            <h4 className="warehouses__heading warehouses__headings-warehouse">ADDRESS</h4>
                            <img src={Arrows} alt="Arrows" className="warehouses__headings-icon" />
                        </div>
                        <div className="warehouses__title warehouses__title-contact-name">
                            <h4 className="warehouses__heading warehouses__headings-warehouse">CONTACT NAME</h4>
                            <img src={Arrows} alt="Arrows" className="warehouses__headings-icon" />
                        </div>
                        <div className="warehouses__title warehouses__title-contact-info">
                            <h4 className="warehouses__heading warehouses__headings-warehouse">CONTACT INFORMATION</h4>
                            <img src={Arrows} alt="Arrows" className="warehouses__headings-icon" />
                        </div>
                        <div className="warehouses__title warehouses__title-actions">
                            <h4 className="warehouses__heading warehouses__headings-warehouse">ACTIONS</h4>
                        </div>
                    </div>
                </div>
                <div className="warehouses__divider"></div>
                {this.state.warehousesList.map(warehouse =>
                    <WarehouseListItem key={warehouse.id} id={warehouse.id} city={warehouse.city} address={warehouse.address} country={warehouse.country} name={warehouse.name} contact={warehouse.contact} display={this.state.display} activateModal={this.activateModal} />
                )}
            </div>
            <DeleteWarehouse display={this.state.display} closeModal={this.closeModal}/>
            </>
        );
    };
};

export default WarehousesList;
