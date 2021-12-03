import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: "root",
    storage: storage
  };


const persistedReducer = persistReducer(persistConfig, rootReducer);


const configureStore = () => {
  const middlewares = [thunkMiddleware];
  // redux devtools
  const enhancers =composeWithDevTools(applyMiddleware(...middlewares))
    //process.env.NODE_ENV === "development"
      /* ? */ 
      //: applyMiddleware(...middlewares);
  // create redux store
  const store = createStore(rootReducer, enhancers);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
