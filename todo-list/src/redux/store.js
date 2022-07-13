import { combineReducers, legacy_createStore as createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension";
import { todoApp } from "./reducers/reducer-todo";
import { VisionTodo } from "./reducers/reducer-vision";

const rootReducer = combineReducers({
    todos: todoApp,
    vision: VisionTodo
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;