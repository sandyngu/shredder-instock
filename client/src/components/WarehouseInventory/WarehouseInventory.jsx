import axios from 'axios';
import React from 'react'
import InventoryList from "../InventoryList/InventoryList"
// import WarehouseListItem from "../WarehousesList/WarehousesList"
import "./warehouseInventory.scss"
import WarehouseInventoryLocation from "../WarehouseInventoryLocation/WarehouseInventoryLocation"

class WarehouseInventory extends React.Component {
  state={
    inventoryList:[],
    warehousesList:[],
    
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

      axios
      .get("http://localhost:8080/warehouses")
      .then((res) => {
        console.log(res)
        
          this.setState({
            warehousesList: res.data,
            
        })
   
      })
      .catch((error) => {
        console.log(error);
      });
      
  }
  

  render(){
    
    return (
      <div>
        {console.log(this.state)}
        <InventoryList inventoryList={this.state.inventoryList}/>
        {/* <WarehouseListItem name={this.state.name} address={this.state.address} city={this.state.city} country={this.state.country} /> */}
        <WarehouseInventoryLocation warehousesList={this.state.warehousesList} name={this.state.name} address={this.state.address} city={this.state.city} country={this.state.country} />
      </div>
       
       
                  
      
    )
  }

}
    

export default WarehouseInventory;