import { useDispatch } from "react-redux";
import API from "../Axios/api";
import {call,put,takeEvery} from 'redux-saga/effects'
import { loader } from "./Actions/Actions";

async function usersFetch(){
   const response = await API.get('/');
   
   return( response.data.products);
   

}

function* loaderStarter(value){
    yield put({type:'LOADER',payload:value})
}

function* fetchUserDetails(){
    
   const users = yield call(usersFetch); //waits for this api call to be finished before going to the next yield
   yield put({type:'FETCH_SUCCESS',payload:users}) // put effect dispatches an action to the redux store. In this case after the api has yielded the users response the put effect will dispatch the action to the reducer
   yield call(()=> loaderStarter(false))
}


function* mySaga(){
    yield call(()=>loaderStarter(true))
    yield takeEvery('ADD',fetchUserDetails)  // for every occurence of this action , saga will run in response. In this case it would trigger workGetUsersFetch() saga for each GET_USERS_FETCH action
}

export default mySaga