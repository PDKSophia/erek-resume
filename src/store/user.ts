import * as Actions from './action'
import * as ActionsType from './action-type'

const initialState = {
  user: {}
}

type IState = Readonly<typeof initialState>

export default function reducer(
  state: IState = initialState,
  action: Actions.All
) {
  switch (action.type) {
    case ActionsType.SET_USER:
      return {
        ...state,
        user: { ...action.payload }
      }
    default:
      return state
  }
}
