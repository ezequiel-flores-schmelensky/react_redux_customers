import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers }) => {
    const urlPath = "";
    return (
        <div>
            <div className="customers-CustomerList">
               {
                   customers.map( c=> 
                   <CustomerListItem 
                        key={c.dni}
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

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomerList;