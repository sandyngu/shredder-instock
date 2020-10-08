import React from "react";
import Sort from "../../assets/icons/sort-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg";
import Search from "../../assets/icons/search-24px.svg";
import "./inventoryList.scss";
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
            <div className="inventoryList__title-container">
              <h1 className="inventoryList__title">Inventory</h1>
            </div>
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

              <button className="inventoryList__button" name="inventoryButton">
                <img className="inventoryList__sort-icon" alt=""></img>+ Add New
                Item
              </button>
            </form>
            <hr className="inventoryList__form-divider" />
          </div>
          <div className="inventoryList__category-top">
            <div className="inventoryList__category-left">
              <div className="inventoryList__category-inventory">
                INVENTORY ITEM
                <img
                  className="inventoryList__sort-icon"
                  src={Sort}
                  alt="Sort Icon"
                ></img>
              </div>
              <div className="inventoryList__category-category">
                CATEGORY
                <img
                  className="inventoryList__sort-icon"
                  src={Sort}
                  alt="Sort Icon"
                ></img>
              </div>

              <div className="inventoryList__category-center">
                <div className="inventoryList__category-status">
                  STATUS
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
                <div className="inventoryList__category-quantity">
                  QTY
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
                <div className="inventoryList__category-warehouse">
                  WAREHOUSE
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
              </div>
              <div className="inventoryList__category-actions">ACTIONS</div>
            </div>
          </div>

          {this.state.inventoryList.map((item) => {
            return (
              <>
                <div className="inventoryList__main">
                  <section className="inventoryList__parent-section">
                    <section className="inventoryList__section inventoryList__section-left">
                      <div className="inventoryList__item-container">
                        <p className="inventoryList__item-heading inventoryList__heading-color">
                          INVENTORY ITEM
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </p>
                        <p className="inventoryList__item">
                          {item.itemName}

                          <img
                            className="inventoryList__chevron-right-icon"
                            src={Right}
                            alt="Chevron Right Icon"
                          ></img>
                        </p>
                      </div>
                      <div className="inventoryList__category-container">
                        <p className="inventoryList__category-heading inventoryList__heading-color">
                          CATEGORY
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </p>
                        <p className="inventoryList__category">
                          {item.category}
                        </p>
                      </div>
                    </section>

                    <section className="inventoryList__section inventoryList__section-right">
                      <div className="inventoryList__status-container">
                        <p className="inventoryList__status-heading inventoryList__heading-color">
                          STATUS
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </p>
                        <p className="inventoryList__status">{item.status}</p>
                      </div>
                      <div className="inventoryList__quantity-container">
                        <p className="inventoryList__quantity-heading inventoryList__heading-color">
                          QTY
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </p>
                        <p className="inventoryList__quantity">
                          {item.quantity}
                        </p>
                      </div>
                      <div className="inventoryList__warehouse-container">
                        <p className="inventoryList__warehouse-heading inventoryList__heading-color">
                          WAREHOUSE
                          <img
                            className="inventoryList__sort-icon"
                            src={Sort}
                            alt="Sort Icon"
                          ></img>
                        </p>
                        <a href={item.warehouseName}>
                          <p className="inventoryList__warehouse" key={item.id}>
                            {item.warehouseName}
                          </p>
                        </a>
                      </div>
                    </section>
                    <section className="inventoryList__action-section inventoryList__action-section-hide">
                      <div className="inventoryList__action-container">
                        <p className="inventoryList__action-heading inventoryList__heading-color">
                          ACTIONS
                        </p>
                        <div className="inventoryList__action-logo-container">
                          <button
                            onClick={(e) => {
                              this.showModal();
                            }}
                          >
                            <img
                              className="inventoryList__delete-icon"
                              src={Delete}
                              alt="Delete Icon"
                            />
                          </button>

                          <img
                            className="inventoryList__edit-icon"
                            src={Edit}
                            alt="Edit Icon"
                          />
                        </div>
                      </div>
                    </section>
                  </section>
                  <section className="inventoryList__action-section inventoryList__action-section-hide-tablet">
                    <div className="inventoryList__action-container">
                      <p className="inventoryList__action-heading inventoryList__heading-color">
                        ACTIONS
                      </p>
                      <div className="inventoryList__action-logo-container">
                        <img
                          className="inventoryList__delete-icon"
                          src={Delete}
                          alt="Delete Icon"
                        />

                        <img
                          className="inventoryList__edit-icon"
                          src={Edit}
                          alt="Edit Icon"
                        />
                      </div>
                    </div>
                  </section>
                </div>
                <hr className="inventoryList__list-divider" />
              </>
            );
          })}
        </div>
        <DeleteItem display={this.state.display} />
      </>
    );
  }
}
export default InventoryList;