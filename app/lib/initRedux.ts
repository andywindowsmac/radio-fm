import { applyMiddleware, compose, createStore } from 'redux'
import { persistCombineReducers, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from 'ducks'

const persistConfig = {
  storage,
  key: 'root',
}

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = f => f
if (process.browser && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__()
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer)

const enhancedCreateStore = (reducers, initialState, middleware) => {
  const store = createStore(reducers, initialState, middleware)
  const persistor = persistStore(store)
  return { store, persistor }
}

let configuredStore = null

// Create store with reducers and initial state
const initStore = (initialState = {}) => {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return enhancedCreateStore(
      persistedReducer,
      initialState,
      compose(devtools),
    )
  }

  // Reuse store on the client-side
  if (!configuredStore) {
    configuredStore = enhancedCreateStore(
      persistedReducer,
      initialState,
      compose(devtools),
    )
  }

  return configuredStore
}

export default initStore
