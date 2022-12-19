import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};

export const editEmployee = employee => dispatch => {
  dispatch(actions.editEmployee(employee));
};

export const deleteEmployee = employee => dispatch => {
  dispatch(actions.deleteEmployee(employee));
};
