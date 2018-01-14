import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger'
import todoApp from './reducers'

export default function configureStore(initialState) {
  const store = createStore(
    todoApp,
    initialState,
    applyMiddleware(logger),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
