import React from "react";
import { Link } from 'react-router-dom';
import "./ItemDetails.scss";
import axios from "axios";
import Edit from '../../assets/icons/edit-24px.svg';
import Arrow from '../../assets/icons/arrow_back-24px.svg';
import EditItem from "../EditItem/EditItem";

class ItemDetails extends React.Component {

    state = {
        singleItem: {
            id: "",
            warehouseName: ""
        }
    }

    componentDidMount() {

        const { match } = this.props;

        console.log(match);
        console.log(match.params.id);
        console.log(match.params.warehouseName);


        if (match.params.id !== this.state.singleItem.id && match.params.warehouseName !== this.state.singleItem.warehouseName) {

            axios.get(`http://localhost:8080/inventories/${match.params.id}/${match.params.warehouseName}`)
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        singleItem: response.data
                    })
                })
                .catch(error => console.log(error));
        }
    }

    editItem = (id, warehouseName) => {
        console.log(this.props.history);
        this.props.history.push(`/inventories/edititem/${id}/${warehouseName}`);
    }

    render() {

        console.log(this.state.singleItem)

        return (

            <section className="item-details">
                <div className="item-details__header">
                    <img className="item-details__header-arrow" src={Arrow} alt="Back arrow" />
                    <h1 className="item-details__header-title">{this.state.singleItem.itemName}</h1>
                    <Link className="item-details__link">
                        <button className="item-details__header-button" onClick={() => { this.editItem(this.state.singleItem.id, this.state.singleItem.warehouseName) }}>
                            <img className="item-details__header-button-icon" src={Edit} alt="edit" />
                            <p className="item-details__header-button-text">Edit</p>
                        </button>
                    </Link>
                </div>
                <div className="item-details__container">
                    <div className="item-details__description">
                        <h3 className="item-details__description-header">ITEM DESCRIPTION:</h3>
                        <p className="item-details__description-description">{this.props.success.description}</p>
                        <h3 className="item-details__description-header">CATEGORY:</h3>
                        <p className="item-details__description-description">{this.props.success.category}</p>
                    </div>
                    <div className="item-details__line"></div>
                    <div className="item-details__logistics">
                        <div className="item-details__logistics-amount">
                            <div className="item-details__logistics-amount-status">
                                <h3 className="item-details__logistics-header">STATUS:</h3>
                                <p className="item-details__logistics-instock">IN STOCK</p>
                                <p className="item-details__logistics-outstock">OUT OF STOCK</p>
                            </div>
                            <div className="item-details__logistics-amount-quantity">
                                <h3 className="item-details__logistics-header">QUANTITY:</h3>
                                <p className="item-details__logistics-description">{this.props.success.quantity}</p>
                            </div>
                        </div>
                        <div className="item-details__logistics-warehouse">
                            <h3 className="item-details__logistics-header">WAREHOUSE:</h3>
                            <p className="item-details__logistics-description">{this.props.success.warehouseName}</p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default ItemDetails;