import React from 'react'
import "./warehouseInventoryLocation.scss"
import Arrow from "../../assets/icons/arrow_back-24px.svg"
// import Edit from "../../assets/icons/edit-24px.svg"
function WarehouseInventoryLocation ({warehouse}) {
  console.log(warehouse)
    return (
      // this.props.warehousesList.map((item) => {
        // return (
          <>
          <div className="warehouseInventoryLocation">
            <div className="warehouseInventoryLocation__name-container">
              <div className="warehouseInventoryLocation__img-name-container">
                <img src={Arrow} alt="arrow back"></img>
                <h1 className="warehouseInventoryLocation__name">
                    {warehouse.name}
                </h1>
              </div>
                <button className="warehouseInventoryLocation__button"> Edit</button>
            </div>
           <hr className="warehouseInventoryLocation__hr"/>
            <div className="warehouseInventoryLocation__sub">
            <div className="warehouseInventoryLocation__address-container">
            <h3 className="warehouseInventoryLocation__address-heading">WAREHOUSE ADDRESS:</h3>
                <p className="warehouseInventoryLocation__address">{warehouse.address}</p>
                <p className="warehouseInventoryLocation__city">{warehouse.city}, {warehouse.country}</p>
            </div>
            <div className="warehouseInventoryLocation__left-container">
              <div className="warehouseInventoryLocation__contact-name-container">
                  <h3 className="warehouseInventoryLocation__contact-name-heading">CONTACT NAME:</h3>
                  <p className="warehouseInventoryLocation__contact-name">
                    {warehouse.contact.name}
                  </p>
                  <p className="warehouseInventoryLocation__contact-position">
                    {warehouse.contact.position}
                  </p>
              </div>
              <div className="warehouseInventoryLocation__contact-information-container">
                  <h3 className="warehouseInventoryLocation__contact-information-heading">CONTACT INFORMATION</h3>
                  <p className="warehouseInventoryLocation__contact-information-phone">
                    {warehouse.contact.phone}
                  </p>
                  <p className="warehouseInventoryLocation__contact-information-email">
                    {warehouse.contact.email}
                  </p>
              </div>
              </div>
            </div>
       </div>
          </>
        // );
      // })
  )
}
export default WarehouseInventoryLocation;