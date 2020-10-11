import axios from 'axios';
import React from 'react'
import InventoryList from "../InventoryList/InventoryList"
// import WarehouseListItem from "../WarehousesList/WarehousesList"
import "./warehouseInventory.scss"
import WarehouseInventoryLocation from "../WarehouseInventoryLocation/WarehouseInventoryLocation"

class WarehouseInventory extends React.Component {
  state={
    inventoryList:[],
    
    warehouse: {}
    
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
        console.log(this.props.match.params.id)
        console.log(res.data)
        const warehouseLocation = res.data.filter((warehouse)=>{
          return warehouse.name === this.props.match.params.id
         })
          this.setState({
            warehouse: warehouseLocation[0],
            
        })
        console.log(this.state.warehouse)
      })
      .catch((error) => {
        console.log(error);
      });
      
  }
  

  render(){
    console.log(this.state.warehouse)
     if (Object.keys(this.state.warehouse).length > 0){
       
       return (
          
      
        <div>
          
          <WarehouseInventoryLocation warehouse={this.state.warehouse} />
          <InventoryList inventoryList={this.state.inventoryList}/>
          {/* <WarehouseListItem name={this.state.name} address={this.state.address} city={this.state.city} country={this.state.country} /> */}
        </div>
        )}
        else{
          return <div>LOADING...</div>
        }
    } 
       
       
                  
      
    
  }


    

export default WarehouseInventory;