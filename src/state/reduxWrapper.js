import React from "react"
import { Provider } from "react-redux"
import { createStore as createAStore } from "redux"
import rootReducer from "."

const createStore = () => createAStore(rootReducer)

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
