import React from "react";
import { Link } from 'react-router-dom';
import Sort from "../../assets/icons/sort-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg";
import Search from "../../assets/icons/search-24px.svg";
import "./InventoryList.scss";
import axios from "axios";
import DeleteItem from "../DeleteItem/DeleteItem";

class InventoryList extends React.Component {
  
  state = {
    inventoryList: [],
    singleItem: [],

    display: false,
  };
  showModal = (e) => {
    this.setState({
      display: true,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventories")
      .then((response) => {
        console.log(response.data);
        this.setState({
          inventoryList: response.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidUpdate() {}

  render() {
    console.log(this.state);

    return (
      <>
        {console.log(this.state)}

        <div className="inventoryList">
          <div className="inventoryList__form">
              <h1 className="inventoryList__title">Inventory</h1>
              <div className="inventoryList__form-container">
                <form
                  className="inventoryList__form-sub"
                  action=""
                  name="inventoryForm"
                  >
                  <input
                    className="inventoryList__search"
                    name="inventorySearch"
                    type="search"
                    src={Search}
                    placeholder="Search..."
                    />
                    <Link to='/inventories/add-item'>
                      <button className="inventoryList__button" name="inventoryButton">
                        + Add New Item
                      </button>
                    </Link>
                </form>
            </div>
          </div>
          <div className="inventoryList__list-divider"/>
          <div className="inventoryList__category-box">
            <div className="inventoryList__categories">
              <div className="inventoryList__category-title inventoryList__category-inventory">
                <h4 className="inventoryList__ category-top-heading inventoryList__ category-top-inventory">INVENTORY ITEM</h4>
                <img
                  className="inventoryList__sort-icon"
                  src={Sort}
                  alt="Sort Icon"
                ></img>
              </div>
              <div className="inventoryList__category-title inventoryList__category-category">
              <h4 className="inventoryList__ category-top-heading inventoryList__ category-top-category">CATEGORY</h4>
                <img
                  className="inventoryList__sort-icon"
                  src={Sort}
                  alt="Sort Icon"
                ></img>
              </div>
                <div className="inventoryList__category-title inventoryList__category-status">
                <h4 className="inventoryList__ category-top-heading inventoryList__ category-top-status">STATUS</h4>
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
                <div className="inventoryList__category-title inventoryList__category-quantity">
                <h4 className="inventoryList__ category-top-heading inventoryList__ category-top-quantity">QTY</h4>
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
                <div className="inventoryList__category-title inventoryList__category-warehouse">
                <h4 className="inventoryList__ category-top-heading inventoryList__ category-top-warehouse">WAREHOUSE</h4>
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
              <h4 className="inventoryList__category-title inventoryList__category-actions">ACTIONS</h4>
            </div>
          </div>

          {this.state.inventoryList.map((item) => {
            return (
              <>
                <div className="inventoryList__main">
                  <section className="inventoryList__parent-section">
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__item-heading inventoryList__heading">
                          INVENTORY ITEM
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </h4>
                        <Link to='/inventories/:id'>
                          <p className="inventoryList__text inventoryList__item">
                            {item.itemName}

                            <img
                              className="inventoryList__chevron-right-icon"
                              src={Right}
                              alt="Chevron Right Icon"
                            ></img>
                          </p>
                        </Link>
                      </div>
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__category-heading inventoryList__heading">
                          CATEGORY
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </h4>
                        <p className="inventoryList__text inventoryList__category">
                          {item.category}
                        </p>
                      </div>
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__status-heading inventoryList__heading">
                          STATUS
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </h4>
                        <div className="inventoryList__text inventoryList__status-container">
                        <p className="inventoryList__status">{item.status}</p>
                        </div>
                      </div>
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__quantity-heading inventoryList__heading">
                          QTY
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </h4>
                        <p className="inventoryList__text inventoryList__quantity">
                          {item.quantity}
                        </p>
                      </div>
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__warehouse-heading inventoryList__heading">
                          WAREHOUSE
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </h4>
                          <p className="inventoryList__text inventoryList__warehouse" key={item.id}>
                            {item.warehouseName}
                          </p>
                      </div>
                    <section className="inventoryList__action-section inventoryList__action-section-hide">
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__action-heading inventoryList__heading-color">
                          ACTIONS
                        </h4>
                        <div className="inventoryList__action-logo-container">
                          <Link to='/inventories'>
                          <button 
                          >
                            <img
                              className="inventoryList__delete-icon"
                              src={Delete}
                              alt="Delete Icon"
                              onClick={(e) => {
                                this.showModal();
                              }}
                            />
                          </button>
                          </Link>
                          <Link to='/inventories/edit-item'>
                          <img
                            className="inventoryList__edit-icon"
                            src={Edit}
                            alt="Edit Icon"
                          />
                          </Link>
                        </div>
                      </div>
                  </section>
                    </section>
                  <section className="inventoryList__action-section inventoryList__action-section-hide-tablet">
                    <div className="inventoryList__action-container">
                      <h4 className="inventoryList__action-heading inventoryList__heading-color">
                        ACTIONS
                      </h4>
                      <div className="inventoryList__action-logo-container">
                      <Link to='/inventories/delete-item'>
                        <img
                          className="inventoryList__delete-icon"
                          src={Delete}
                          alt="Delete Icon"
                        />
                        </Link>
                        <Link to='/inventories/edit-item'>
                        <img
                          className="inventoryList__edit-icon"
                          src={Edit}
                          alt="Edit Icon"
                        />
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            );
          })}
        </div>
        <div className="empty"></div>
            <div className="footer">
                <p className="footer__text">© InStock Inc. All Rights Reserved.</p>   
            </div>
        <DeleteItem display={this.state.display} />
      </>
    );
  }
}
export default InventoryList;
