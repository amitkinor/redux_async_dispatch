import * as actionTypes from './actionsTypes';

export const saveResults = (result) => {
  
  return {
    type: actionTypes.STORE_RESULT,
    result
  };  
}

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResults(result));
    }, 2000)
  }
};

export const deleteResult = (resultElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId

  };
};