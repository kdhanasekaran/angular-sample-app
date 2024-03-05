import { environment } from './../../../environments/environment';
​
export const API_URL = environment.apiUrl;

export const SPEND_TYPE: Array<any> = [
    { option: "Cash", value: "Cash", checked: false },
    { option: "Credit Card", value: "Credit Card", checked: false },
    { option: "Debit Card", value: "Debit Card", checked: false },    
    { option: "e-Wallet", value: "e-wallet", checked: false },
    { option: "Account", value: "Account", checked: false }  
];