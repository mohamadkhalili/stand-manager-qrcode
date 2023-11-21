import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore("auth", {
  state: () => ({ name: "Eduardo", roll: "" }),
  getters: {
    getName: (state) => state.name,
  },
  actions: {
    setName(name: string) {
      this.name = name;
    },
    setRoll(roll: string) {
      this.roll = roll;
    },
  },
});
