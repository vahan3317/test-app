import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

 state:{
  users:[]
 },
 actions:{
  GET_USERS_FROM_API({commit}){
   return axios('http://127.0.0.1:8000/api/users ',{
    method:'GET'
   })
   .then((response)=>{
    commit('SET_USERS_TO_VUEX',response.data)

   })
  }
 },
 mutations:{
  SET_USERS_TO_VUEX:(state,users) =>{
   state.users =users
  }
 },
 getters:{
  USERS(state){
   return state.users;
  }
 }

})

export default store;
