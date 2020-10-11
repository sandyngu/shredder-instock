import React from "react";
import axios from "axios";
// import InventoryList from "../InventoryList/InventoryList";
// import WarehouseInventoryLocation from "../WarehouseInventoryLocation/WarehouseInventoryLocation";
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails';


class Inventories extends React.Component {
  state = {
    inventoryList: [],
    warehousesList: [],
    singleItem: [],

    search: ""
  };

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

  deleteInventory = (id, warehouseID, warehouseName, itemName, description, category, status, quantity) => {
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
        })
        .catch(err => console.log(err));
}

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
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get("http://localhost:8080/warehouses")
      .then((response) => {
        console.log(response.data);
        this.setState({
          warehousesList: response.data,
        }); 
      })
      .catch((error) => {
        console.log(error);
      });
    
      
  //     axios
  //     .get("http://localhost:8080/warehouses")
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({
  //         singleItem: res.data,
  //       });
  //       console.log(this.state);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  }

  // componentDidUpdate(){
  //   console.log(this)
  //   const {match}=this.props;
  //   const itemIDWarehouse = match.params.id !== this.state.singleItem.id && match.params.id !== this.state.singleItem.warehouseID;
  //     axios.get(`http://localhost:8080/inventories/${match.params.id}`).then(()=>{
  //       this.setState({
  //         singleItem: itemIDWarehouse
  //       }).catch(err=>{
  //         console.log(err)
  //       })
    
  //     })
    
  //   }


  
  render() {


    // let filterItem = this.state.inventoryList.filter((item)=>{
    //      return item.warehouseName.toLowercase().includes(this.state.search.toLowercase())
    //     })
    console.log(this.state);


    // if(this.state.singleItem.hasOwnProperty("itemName")){

    
    // const stateData = this.state.inventoryList;
    return (
      <>
        {console.log(this.state)}
       {/* <InventoryList display={this.state.display} cancelModal={this.cancelModal}  deleteModal={this.deleteModal} deleteInventory={this.deleteInventory} inventoryList={this.state.inventoryList}/> */}
        <WarehouseDetails display={this.state.display} cancelModal={this.cancelModal}  deleteModal={this.deleteModal} deleteInventory={this.deleteInventory} warehousesList={this.state.warehousesList} inventoryList={this.state.inventoryList}/>
       {/* <WarehouseInventoryLocation warehousesList={this.state.singleItem}/> */}
            {/* <WarehouseInventory inventoryList={stateData}/> */}
      </>
    
    );
    }
    // else{
    //   return (<div>LOADING...</div>)
    // }
  // }
}
export default Inventories;
