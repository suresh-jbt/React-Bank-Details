import { API_BASE_URL } from '../common/globals';

const AppUtils = {
  getAllBanks : function(){
    return fetch(API_BASE_URL + '/banks',{
      method:'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json());
  },

  getCitiesByBank : function(data){
    return fetch(API_BASE_URL + '/city/' + data.bankName,{
      method:'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json());
  },

  getBranches : function(data){
    return fetch(API_BASE_URL + '/branches',{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => response.json());
  }
}

module.exports = AppUtils;
