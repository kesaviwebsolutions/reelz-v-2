import { createStore, action } from 'easy-peasy';

const MainStore = createStore({
    wallet_address: undefined,
    setWallet_address: action((state, payload) => {
        state.wallet_address = payload;
    }),
  });
  
  export default MainStore;


  