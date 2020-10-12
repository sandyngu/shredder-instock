import React from 'react'
import Sort from "../../assets/icons/sort-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg";
import {Link} from "react-router-dom";
import Search from "../../assets/icons/search-24px.svg";
import "./InventoryList.scss";
import DeleteItem from "../DeleteItem/DeleteItem";
import axios from "axios"

class InventoryList extends React.Component{
  state = {
    inventoryList: [],
    singleItem: [],
    search: ''
  };

  componentDidMount() {
    axios
      .get('http://localhost:8080/inventories')
      .then((response) => {
        this.setState({
          inventoryList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

showModal = (e) => {
   
  this.setState({
    display: true,
  });
};

cancelModal = (e) => {
  this.setState({
    display: false,
  });
};

deleteInventory = (id, warehouseID, warehouseName, itemName, description, category, status, quantity ) => {
  let deletedInventory = {
    id: id,
    warehouseID: warehouseID,
    warehouseName: warehouseName,
    itemName: itemName,
    description: description,
    category: category,
    status: status,
    quantity: quantity
      }
    
    axios.delete('http://localhost:8080/inventories', deletedInventory)
      .then(res => {
          console.log(res.data)
          window.location.reload()
      })
      .catch(err => console.log(err));
}

findItem = (id, warehouseName) => {
  window.location = `/inventories/${id}/${warehouseName}`
}

  render(){
    console.log()

    return (
      <>
        
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
                <h4 className="inventoryList__category-top-heading inventoryList__category-top-inventory">INVENTORY ITEM</h4>
                <img
                  className="inventoryList__sort-icon"
                  src={Sort}
                  alt="Sort Icon"
                ></img>
              </div>
              <div className="inventoryList__category-title inventoryList__category-category">
              <h4 className="inventoryList__category-top-heading inventoryList__category-top-category">CATEGORY</h4>
                <img
                  className="inventoryList__sort-icon"
                  src={Sort}
                  alt="Sort Icon"
                ></img>
              </div>
                <div className="inventoryList__category-title inventoryList__category-status">
                <h4 className="inventoryList__category-top-heading inventoryList__category-top-status">STATUS</h4>
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
                <div className="inventoryList__category-title inventoryList__category-quantity">
                <h4 className="inventoryList__category-top-heading inventoryList__category-top-quantity">QTY</h4>
                  <img
                    className="inventoryList__sort-icon"
                    src={Sort}
                    alt="Sort Icon"
                  ></img>
                </div>
                <div className="inventoryList__category-title inventoryList__category-warehouse">
                <h4 className="inventoryList__category-top-heading inventoryList__category-top-warehouse">WAREHOUSE</h4>
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
                        <Link>
                        <p className="inventoryList__text inventoryList__item" onClick={() => { this.findItem(item.id, item.warehouseName)}}>
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
                        <Link to={`/inventories/${item.warehouseName}`}>
                        <p className="inventoryList__warehouse">
                        {item.warehouseName}
                        </p>
                        </Link>
                       
                      </div>
                    <section className="inventoryList__action-section inventoryList__action-section-hide">
                      <div className="inventoryList__container">
                        <h4 className="inventoryList__action-heading inventoryList__heading-color">
                          ACTIONS
                        </h4>
                        <div className="inventoryList__action-logo-container">
                          <Link to='/inventories'>
                          <button 
                            onClick={(e) => {
                              this.showModal();
                            }}>
                            <img
                              className="inventoryList__delete-icon"
                              src={Delete}
                              alt="Delete Icon"
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
                      <Link to='/inventories'>
                          <button 
                            onClick={(e) => {
                              this.showModal();
                            }}>
                            <img
                              className="inventoryList__delete-icon"
                              src={Delete}
                              alt="Delete Icon"
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
                  <DeleteItem 
                    display={this.state.display}  
                    id={item.id}
                    warehouseID={item.warehouseID}
                    warehouseName={item.warehouseName}
                    itemName={item.itemName}
                    description={item.description}
                    category={item.category}
                    status={item.status}
                    quantity={item.quantity}
                    deleteInventory={this.deleteInventory}
                    cancelModal={this.cancelModal} 
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="empty"></div>
            <div className="footer">
                <p className="footer__text">© InStock Inc. All Rights Reserved.</p>   
            </div>
      </>
    );
  }
}
export default InventoryList;