import * as ActionTypes from './action-type'

interface SET_USER {
  type: ActionTypes.SET_USER
  payload: {}
}

export type All = SET_USER

export function SET_USER(data: any): SET_USER {
  return {
    type: ActionTypes.SET_USER,
    payload: data
  }
}
