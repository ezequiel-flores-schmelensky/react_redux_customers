import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';


const CustomersList = ({ customers, urlPath }) => {
    //console.log(customers);
    return (
        <div>
            <div className="customers-list">
               {
                   customers.map( c => 
                   <CustomerListItem 
                        key={c.dni}
                        dni={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </CustomerListItem> )
               } 
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomersList;