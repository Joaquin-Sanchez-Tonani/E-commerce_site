import {create} from 'zustand';

const useProductsStore = create((set) => ({
  products: '',
  state: true,
  Mode: true,
  Amount: 0,
  ListCar: [],
  Car: false,
  BarMenu: false,
  handleFilterProducts: (data) => {
    set((s) => ({
      products: data,
      state: false,
      Car: false,
      BarMenu: false,
    }));
  },
  removeFilter: () => {
    set(() => ({
      state: true
    }));
  },
  toggleMode: () => {
    set((s) => ({
      Mode: !s.Mode,
    }));
  },
  resetCar: () => {
    set(() => ({
      Amount: 0,
      ListCar: [],
    }));
  },
  setCar: () => {
    set((s) => ({
      Car: !s.Car,
    }));
  },
  addToCar: (price,description) =>{
    set((s)=>({
      Amount: s.Amount + 1,
      ListCar: [...s.ListCar, { Price: price, Description: description }],
    }))
  },
  barMenu: () =>{
    set((s)=>({
      BarMenu: !s.BarMenu,
    }))
  }
}));

export default useProductsStore;