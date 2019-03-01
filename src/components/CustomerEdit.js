import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomerActions';

/*const isRequired = value => (
    !value && "Este campo es requerido"
);*/

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es reauerido";
    }

    if (!values.dni) {
        error.dni = "El campo nombre es reauerido";
    }
    
    return error;
};

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>   
);

const toNumber = value => value && Number(value);

const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, previousValue, values) => 
    value && previousValue && (value > previousValue ? value : previousValue);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    label="Nombre"
                    component={MyField} 
                    type="text"
                    parse={toUpper}
                    format={toLower}></Field>
                <Field 
                    name="dni" 
                    label="DNI"
                    component={MyField}
                    type="text"></Field>
                <Field 
                    name="age"
                    label="Edad" 
                    component={MyField} 
                    validate={isNumber}
                    type="number"
                    parse={toNumber}
                    normalize={onlyGrow}></Field>
                <CustomerActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack}>Cancelar</button>
                </CustomerActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);