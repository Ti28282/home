import axios from "axios"



// Main Data
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
export const ADDRESS = 'http://93.157.248.178:4666'
export const Token_Fetch_CONFIG = {headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}}



