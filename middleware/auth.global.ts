import { useStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore();

  async function login() {
    const { data } = await useFetch("/proxy/develop/users/login/", {
      method: "get",
    });
    console.log("midleware");
    console.log(data?.value);
    store.setRoll(data?.value?.roll);
  }
  login();
  // if (to.params.id === "1") {
  //   return abortNavigation();
  // }
  // // In a real app you would probably not redirect every route to `/`
  // // however it is important to check `to.path` before redirecting or you
  // // might get an infinite redirect loop
  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }
});
