import React from "react";
import axios from "axios";
import InventoryListForm from "../InventoryListForm/InventoryListForm";
import InventoryList from "../InventoryList/InventoryList"


class Inventories extends React.Component {
  state = {
    inventoryList: [],
    singleItem: [],

    search: ""
  };


  // handleInput = (e) =>{
  //   console.log(e.target.value);
  //   this.setState({
  //     inventoryList: e.target.value
  //   })
  // } 
  

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


  
  render() {
    // let filterItem = this.state.inventoryList.filter((item)=>{
    //      return item.warehouseName.toLowercase().includes(this.state.search.toLowercase())
    //     })
    console.log(this.state);

    // const stateData = this.state.inventoryList;
    return (
      <>
        {console.log(this.state)}

       <InventoryListForm/>
       <InventoryList display={this.state.display} cancelModal={this.cancelModal}  deleteModal={this.deleteModal} inventoryList={this.state.inventoryList}/>
            {/* <WarehouseInventory inventoryList={stateData}/> */}
      </>
    );
  }
}
export default Inventories;
