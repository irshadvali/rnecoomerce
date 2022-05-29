import * as homepageAction from '../action/homepage.action';
const homepage = (
  state = {
    allData: null,
    allDataLoading: false,
    AllDataError: null,
    allDataStatus: '',
    allDataType: '',
    cata: [],
  },
  action,
) => {
  switch (action.type) {
    case homepageAction.GET_ALL_DATA_REQUEST:
      return Object.assign({}, state, {
        allDataLoading: true,
        allDataStatus: action.status,
        allDataType: homepageAction.GET_ALL_DATA_REQUEST,
      });
    case homepageAction.GET_ALL_DATA_SUCCESS: {
      return Object.assign({}, state, {
        allData: action.data,
        allDataLoading: false,
        allDataStatus: action.status,
        allDataType: homepageAction.GET_ALL_DATA_SUCCESS,
      });
    }
    case homepageAction.GET_ALL_DATA_FAILURE:
      return Object.assign({}, state, {
        AllDataError: action.error,
        allDataLoading: false,
        allDataStatus: action.status,
        allDataType: homepageAction.GET_ALL_DATA_FAILURE,
      });
    case homepageAction.GET_CAT__REQUEST:
      return Object.assign({}, state, {
        allDataLoading: true,
        allDataStatus: action.status,
        allDataType: homepageAction.GET_CAT_REQUEST,
      });
    case homepageAction.GET_CAT_SUCCESS: {
      return Object.assign({}, state, {
        allData: action.cat,
        allDataLoading: false,
        allDataStatus: action.status,
        allDataType: homepageAction.GET_CAT_SUCCESS,
      });
    }
    case homepageAction.GET_CAT_FAILURE:
      return Object.assign({}, state, {
        AllDataError: action.error,
        allDataLoading: false,
        allDataStatus: action.status,
        allDataType: homepageAction.GET_CAT_FAILURE,
      });
    default:
      return state;
  }
};
export default homepage;
