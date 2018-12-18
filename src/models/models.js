import { login } from '../services/api'
export default {
    namespace:'user',
    state:{
        token:'',
        username:'',
        role:'user'
    },
    effects:{
        *login( {payload ,callback} , {call,put}){
            const response = yield call(login);
            yield put({
                type:'login',
                payload:{...response}
            })
            callback()
        }
    },
    reducers:{
        login(state,{payload}){
            return {
                ...state,
            }
        }
    }

}