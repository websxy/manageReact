import { login } from '../services/api';
import { setCookie } from '../utils/cookie'
export default {
    namespace:'user',
    state:{
        token:'',
    },
    effects:{
        *login( {payload} , {call,put}){
            const response = yield call(login,payload);
            yield put({
                type:'updateState',
                payload:{...response}
            });
            setCookie('user_name',payload.userName);
            setCookie('crsf_token',response.data.crsf_token);
        }
    },
    reducers:{
        updateState(state,{payload}){
            const response = payload.data;
            return {
                ...state,
                ...response,
            }
        }
    }

}