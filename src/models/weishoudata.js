import {queryweishou} from '../services/ListService';
export default {
    namespace: 'weishoudata',
    state: {
        list:[],
    },
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        let a = yield call(queryweishou,payload);
        yield put({ type: 'save' ,payload:a});
      },
    },
      reducers: {
        'save'(state, action) {
            let sta = {...state}
            sta.list = action.payload;
            return sta;
        },
      },
};
