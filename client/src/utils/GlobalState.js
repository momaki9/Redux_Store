import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import React, { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'
// const StoreContext = createContext();
// const { Provider } = StoreContext;

export default function StoreProvider(props) {
  return <Provider store={store} {...props} />;
};

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
