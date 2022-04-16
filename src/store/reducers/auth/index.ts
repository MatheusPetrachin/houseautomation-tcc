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
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, user: action.payload.user }
    case Types.LOGOUT:
      return { ...state, user: action.payload.user }
    default:
      return state
  }
}

export const login = (user: typeof INITIAL_STATE) => {
  return {
    type: Types.LOGIN,
    payload: {
      user
    }
  }
}
export const logout = (user: typeof INITIAL_STATE) => {
  return {
    type: Types.LOGOUT,
    payload: {
      user
    }
  }
}