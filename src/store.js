// eslint-disable-next-line
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

const devtools = process.env.NODE_ENV === 'test'
      ? x => x /* eslint-disable no-underscore-dangle */
      : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
      /* eslint-enable no-underscore-dangle */

// Las acciones de los cambios que pueden ocurrir en el store.
export const actions = {
  INACTIVE: 'INACTIVE',
  ACTIVE: 'ACTIVE',
}

// Creadores de acciones para agrupan las acciones con los datos necesarios para ejecutarlas.
export const inactiveLink = id => ({ type: actions.INACTIVE, id })
export const activeLink = id => ({ type: actions.ACTIVE, id })

// Cambiando el estado de una sola pregunta.
function questionStateReducer(questionState) {
  return (state, action) => {
    return {
      ...state,
      links: state.links.map(
        question => (question.id === action.id ? { ...question, state: questionState } : question)
      ),
    }
  }
}

// Cambiando los contenidos del store por cada acción.
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INACTIVE:
      return questionStateReducer('INACTIVE')(state, action);
    case actions.ACTIVE:
      return questionStateReducer('ACTIVE')(state, action);
    default:
      return state;
  }
}

const defaultLinks = [
  {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'ABOUT US',
    linkto: '/about',
    state: 'INACTIVE'
  },
  {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'OUR ADVISERS',
    linkto: '/our_advisers',
    state: 'INACTIVE'
  },
  {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'HOW 10TRAITS WORKS',
    linkto: '/how_works',
    state: 'INACTIVE'
  },
  {
    id: Math.round(Math.random() * 1000000).toString(),
    title: '303-443-3697',
    linkto: '/contact',
    state: 'INACTIVE'
  },
  {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'Sign in',
    linkto: '/signin',
    state: 'INACTIVE'
  },
  {
    id: Math.round(Math.random() * 1000000).toString(),
    title: 'Register',
    linkto: '/register',
    state: 'ACTIVE'
  }
]

export default createStore(reducer, { links: defaultLinks })

// const store = createStore(
//   rootReducer,
//   initialState,
//   reducer,
//   { links: defaultLinks },
//   compose(
//     applyMiddleware(...middleware)
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )
//
//
// export default store
