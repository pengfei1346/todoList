import axios from 'axios';
import Vue from 'vue';
import router from '../router/index'

var xhr = axios.create({
  baseURL: 'http://localhost3000/api/',
  timeout:5000
});

var $axios = {
  get(url,params,config){
    return new Promise((resolve,reject)=>{
      xhr.get(api[url],{params:params,config}).then(res=>{

        resolve(res.data)
      })
    })
  },

  post(url,params,config){
    return new Promise((resolve,reject)=>{
    xhr.post(api[url],params,config).then(res=>{

      resolve(res)
    })
    })
    }
}

Vue.prototype.$axios = $axios;
