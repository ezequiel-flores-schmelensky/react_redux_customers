import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from "redux-actions";

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

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers); 