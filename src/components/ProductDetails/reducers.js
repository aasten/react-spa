import * as Actions from './actions';

// recursively removing nulls
function removeNulls(obj){
//  var isArray = obj instanceof Array;
  for (var k in obj){
    if (obj[k]===null) /* isArray ? obj.splice(k,1) : */ delete obj[k];
    else if (typeof obj[k]=="object") removeNulls(obj[k]);
  }
}

// TODO get rid of failure property?
export function entryDetails(state = {dataIsLoading: false}, action) {
  switch(action.type) {
    // case Actions.SELECT_ENTRY: return Object.assign({},state, {entryId: action.id});
    case Actions.LOADING_ENTRY_DETAILS: return Object.assign({},state, {dataIsLoading: true, failure: undefined});
    case Actions.LOAD_ENTRY_DETAILS_FAILED: return Object.assign({},state, {dataIsLoading: false, failure: action.failure, details:undefined});
    case Actions.LOADED_ENTRY_DETAILS: { let nullFree = action.details; removeNulls(nullFree);
      return Object.assign({},state, {dataIsLoading: false, details: nullFree, failure: undefined}); }
    // case Actions.SHOW_MODAL: return Object.assign({},state,{isShowingModal: true});
    // case Actions.CLOSE_MODAL: return Object.assign({},state,{isShowingModal: false});
  }
  return state;
}
