import React from 'react';
import axios from 'axios';
import InventoryList from '../InventoryList/InventoryList';

class Inventories extends React.Component {
  state = {
    inventoryList: [],
    warehousesList: [],
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

  render() {

    return (
      <>
       <InventoryList display={this.state.display} cancelModal={this.cancelModal}  deleteModal={this.deleteModal} deleteInventory={this.deleteInventory} inventoryList={this.state.inventoryList}/>
      </>
    );
    }
}
export default Inventories;