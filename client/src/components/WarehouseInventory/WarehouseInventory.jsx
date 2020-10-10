import axios from 'axios';
import React from 'react'
import InventoryList from "../InventoryList/InventoryList"

class WarehouseInventory extends React.Component {
  state={
    inventoryList:[],

  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/inventories")
      .then((response) => {
        console.log(this.props)
        const warehouseInventoryList = response.data.filter((inventoryItem)=>{
         return inventoryItem.warehouseName === this.props.match.params.id
        })
        console.log(response.data);
        this.setState({
          inventoryList: warehouseInventoryList,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render(){
    
    return (
      
      <InventoryList inventoryList={this.state.inventoryList}/>
       
       
                  
      
    )
  }

}
    

export default WarehouseInventory;