import React from 'react';

class editClick extends React.Component {
    render () {
        return (
            editWarehouse = (id, warehouseName) => {
        window.location = `/inventories/${id}/${warehouseName}`
    }

        )
    }
};

export default editClick;