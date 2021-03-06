import {retrieveApiEnv, endpoints} from './api'

const {url} = retrieveApiEnv();
const endpoints_api = endpoints();

export async function doLoginRequest(user, password){
    const fullUrl = `${url}${endpoints_api.login}`;
    const body = {username: user, password};
    const config_request = {
        method:'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(fullUrl,config_request)
      .then((response) =>response.json())
      .then((data) => data);
  
}

export async function doValidTokenRequest(token){
    const fullUrl = `${url}${endpoints_api.valid_token}?token=${token}`;
    return fetch(fullUrl)
      .then((response) =>response);  
}

export async function doGetAgreementsRequest(){
    const fullUrl = `${url}${endpoints_api.agreements}`;
    const config_request = {
        method:'GET',
        headers: {
            Authorization: 'Bearer '+localStorage.getItem('timbre_gyf_token')
        }
    }    
    console.log(`GET ALL AGREEMENTS REQUEST `,config_request);
    return fetch(fullUrl,config_request)
      .then((response) =>{
        console.log(response)
        if(response.status == 200) {
            return response.json()
        }
        return null;
      }
    ).then(data => data);  
}

export async function doGetTransactionsRequest(convenio_id, cashier_agency, total_value, reference){
    const fullUrl = `${url}${endpoints_api.transactions}?code_agreement=${convenio_id}&cashier_agency=${cashier_agency}&total_value=${total_value}&reference=${reference}`;
    const config_request = {
        method:'GET',
        headers: {
            Authorization: 'Bearer '+localStorage.getItem('timbre_gyf_token')
        }
    }    
    return fetch(fullUrl,config_request)
      .then((response) =>{
        console.log(response)
        if(response.status == 200) {
            return response.json()
        }
        return null;
      }
    ).then(data => data);  
}

export async function doPostTransactionsRequest(receipt_id){
    const fullUrl = `${url}${endpoints_api.transactions}?receipt_id=${receipt_id}`;
    const config_request = {
        method:'POST',
        headers: {
            Authorization: 'Bearer '+localStorage.getItem('timbre_gyf_token')
        }
    }    
    return fetch(fullUrl,config_request)
      .then((response) =>{
        console.log(response)
        if(response.status == 201) {
            return response.blob();
        }
        return null;
      }
    ).then(data => data);  
}