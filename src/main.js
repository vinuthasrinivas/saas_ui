import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router, axios);
window.axios = axios;
app.mount("#app");
// Add a 401 response interceptor
window.axios.interceptors.response.use(
  function (response) {
    if (!response) {
      throw new Error("response is empty")
    }
    return response;
  },
  function (error) {
  //  isShowSnackbar = false;
    if (error.config && error.config.showSnackbar) {
  //    isShowSnackbar = true;
    }

    // Handling unauthorized status
    if (error.response && error.response.status === 401) {
      window.location.href =
        location.protocol +
        "//" +
        location.hostname +
        (location.port ? ":" + location.port : "") +
        "/auth/login";
    } else if (
      error.response &&
      (error.response.status === 400 || error.response.status === 404)
    ) {
      if (error.response.data) {
      //  addSnackbar(error.response.data, "error", isShowSnackbar);
      } else {
  /*      addSnackbar(
          "Unable to fetch details, Responsed with status " +
            error.response.status,
          "error",
          isShowSnackbar
        );*/
      }
    } else {
      if (error.response && error.response.data)
        console.log(error.response.data, "error");
  //      addSnackbar(error.response.data, "error", isShowSnackbar);
      else {
        if (error.response) {
          console.log(
            "Unable to fetch details, Responsed with status " +
              error.response.status,
            "error"
          );
        /*  addSnackbar(
            "Unable to fetch details, Responsed with status " +
              error.response.status,
            "error",
            isShowSnackbar
          );*/
        } else {
          console.log("Unable to reach API, Host is down", "error");
        /*  addSnackbar(
            "Unable to reach API, Host is down",
            "error",
            isShowSnackbar
          );*/
        }
      }
    }
    return error.response;
  }
);
