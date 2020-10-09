import React from 'react'
import "./inventoryList.scss";
import Sort from "../../assets/icons/sort-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Right from "../../assets/icons/chevron_right-24px.svg";
import {Link} from "react-router-dom";
import DeleteItem from "../DeleteItem/DeleteItem";

class InventoryList extends React.Component{
state={
  display: false,

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
deleteModal = (e) => {
  this.setState({
    display: false,
  });
};




  render(){
    return (
      <div className="inventoryList">
      
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
    
      {this.props.inventoryList.map((item,id) => {
        // console.log(item)
        return (
          <>
            <div className="inventoryList__main" key={id}>
              <section className="inventoryList__parent-section" >
                <section className="inventoryList__section inventoryList__section-left" >
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
                    <Link to={`/inventories/${item.warehouseName}`}>
                      <p className="inventoryList__warehouse">
                        {item.warehouseName}
                      </p>
                    </Link>
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
                    <button onClick={(e) => {
                          this.showModal();
                        }}>
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
            </div>
            <hr className="inventoryList__list-divider" />
            <DeleteItem 
                display={this.state.display}  
                cancelModal={this.cancelModal} 
                deleteModal={this.deleteModal}
                itemName={item.itemName}
                id={item.id}
                />
          </>
            );
          })}
    </div>
    )
  }
}
export default InventoryList;