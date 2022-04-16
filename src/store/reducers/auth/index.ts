export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGOUT: 'auth/LOGOUT',
}

const INITIAL_STATE = {
  username: '',
  email: ''
}

interface ActionProps {
  type: string,
  payload: {
    user: typeof INITIAL_STATE
  }
}

export default function Auth(state = INITIAL_STATE, action: ActionProps) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, ...action.payload.user }
    case Types.LOGOUT:
      return { ...state, ...action.payload.user }
    default:
      return state
  }
}

export const authLogin = (user: typeof INITIAL_STATE) => {
  return {
    type: Types.LOGIN,
    payload: {
      user
    }
  }
}
export const authLogout = (user: typeof INITIAL_STATE) => {
  return {
    type: Types.LOGOUT,
    payload: {
      user
    }
  }
}