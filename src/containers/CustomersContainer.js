import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomerActions from './../components/CustomerActions';

const customers = [
    {
        "dni": "adsd",
        "name": "Juan Perez",
        "age": 37
    },
    {
        "dni": "sdfsdf",
        "name": "Jotro",
        "age": 37
    },
    {   
        "dni": "fghgfh",
        "name": "otro",
        "age": 37
    }
];

class CustomersContainer extends Component {
    
    renderBody = customers => (
        <div>
            <CustomersList customers={customers} urlPath={'customer/'} >
            </CustomersList>
            <CustomerActions>
                <button  onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>   
    )

    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'} body={this.renderBody(customers)}></AppFrame>       
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;