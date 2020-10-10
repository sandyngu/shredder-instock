import React from 'react'
import Search from "../../assets/icons/search-24px.svg";

export default function InventoryListForm() {
  return (
    
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
              // handleInput={this.handleInput} 
              // filterItem={this.state.filterItem}
              // onChange={this.handleInput}
              
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
    
  )
}
