import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export default function (history) {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);
  const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, router, thunk))
  );
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}
