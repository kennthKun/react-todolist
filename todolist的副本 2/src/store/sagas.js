import {put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './ActionTypes'
import { initListAciton } from './actionCreators'
import axios from 'axios'

function* getInitlist() {
  try{
    const res = yield axios.get('/list.json');
    const action = initListAciton(res.data)
    yield put(action)
  }catch(e){
    console.log('list.json失败')
  }
}
    // generator函数
function* mySaga() {
    // 捕捉每一个GET_INIT_LIST
    yield takeEvery(GET_INIT_LIST, getInitlist);
}

export default mySaga;