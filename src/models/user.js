import { login, licenseVerify} from '../services/api';
import { setCookie } from '../utils/cookie'
export default {
    namespace:'user',
    state:{},
    effects:{
        *login( {payload} , {call,put}){
            const response = yield call(login,payload);
            yield put({
                type:'changeLoginStatus',
                payload:{...response}
            });
            setCookie('user_name',payload.userName);
        },

        *licenseVerify({} , {call,put}){
            const response = yield call(licenseVerify);
            yield put({
                type:'updateState',
                payload:{...response}
            });
        }
    },
    reducers:{
        changeLoginStatus(state, {payload}) {
            setCookie('crsf_token',payload.data.crsf_token);
            return {
              ...state,
            };
          },
        updateState(state,{payload}){
            const response = payload.data;
            return {
                ...state,
                ...response,
            }
        }
    }

}