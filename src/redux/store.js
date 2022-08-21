import { legacy_createStore } from "redux";
import { reducer } from "./auth/reducer";

export const store = legacy_createStore(reducer)