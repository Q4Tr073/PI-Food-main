import { applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "../Reducer/reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

//const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

//const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;