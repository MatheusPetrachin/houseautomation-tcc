export const Types = {
  TOGGLE: 'house/TOGGLE',
}

const INITIAL_STATE = {
  suite: false,
  escritorio: false,
  corredor: false,
  copa: false,
  sala: false,
  varanda: false,
  quarto: false,
  cozinha: false,
  banheiroSuite: false,
}
type PayloadProps = 'suite' | 'escritorio' | 'corredor' | 'copa' | 'sala' | 'varanda' | 'quarto' | 'cozinha' | 'banheiroSuite'

export default function House(state = INITIAL_STATE, action: { type: string, payload: PayloadProps }) {
  switch (action.type) {
    case Types.TOGGLE:
      return { ...state, [action.payload]: !state[action.payload] }
    default:
      return state
  }
}

export const toggleLight = (convenient: string) => {
  return {
    type: Types.TOGGLE,
    payload: convenient
  }
}