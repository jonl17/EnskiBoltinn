import React from "react"
import { Provider } from "react-redux"
import { createStore as createAStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyles } from "./src/components/GlobalStyle"

const createStore = () => createAStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <GlobalStyles />
      {element}
    </Provider>
  )
}
