import React from "react";
import Sort from "../../assets/Icons/sort-24px.svg";
import Delete from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import Right from "../../assets/Icons/chevron_right-24px.svg";
import Search from "../../assets/Icons/search-24px.svg";
import "./inventoryList.scss";

class InventoryList extends React.Component {
  // state = {
  //   inventoryList: [],
  //   singleItem: [],
  // };

  // componentDidMount() {}

  // componentDidUpdate() {}

  render() {
    return (
      <>
        <div className="inventoryList">
          <div className="inventoryList__form">
            <div className="inventoryList__title-container">
              <h1 className="inventoryList__title">Inventory</h1>
            </div>
            <form
              className="inventoryList__form"
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
                <img className="inventoryList__sort-icon" alt="Add Icon"></img>
                Add New Item
              </button>
            </form>
            <hr className="inventoryList__form-divider" />
          </div>
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
                  Television
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
                <p className="inventoryList__category">Electronics</p>
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
                <p className="inventoryList__status">IN STOCK</p>
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
                <p className="inventoryList__quantity">500</p>
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
                <p className="inventoryList__warehouse">Manhattan</p>
              </div>
            </section>
          </section>
          <section className="inventoryList__action-section">
            <div className="inventoryList__action-container">
              <p className="inventoryList__action-heading inventoryList__heading-color">
                ACTION
              </p>
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
          </section>
        </div>
        <hr className="inventoryList__list-divider" />
      </>
    );
  }
}
export default InventoryList;
