import { login } from '../services/api'
export default {
    namespace:'user',
    state:{
        token:'',
    },
    effects:{
        *login( {payload ,callback} , {call,put}){
            const response = yield call(login(payload));
            yield put({
                type:'setLogin',
                payload:{...response}
            })
            callback()
        }
    },
    reducers:{
        updateState(state,{payload}){
            return {
                ...state,
                ...payload,
            }
        }
    }

}