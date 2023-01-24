<template>
  <div id="loginPage" class="h-full w-full">
    <div id="loginBox">
      <div id="clientLogo">
        <!-- Please add the file to the location /static/img/clientLogo.png (File name should be clientLogo.png if using someother extension please add that extension) -->
        <img
          id="clientImg"
          class="clientLogoImage"
          :src="imageUrl"
          onerror="this.style.display='none'"
        />
      </div>
      <div
        id="headerContent"
        class="flex items-center justify-center w-full h-9"
      >
        <img id="logo" src="../assets/logo-48x48.png" />
        <h3 id="deviceLab">DEVICE LAB</h3>
      </div>
      <div id="loginDetails">
        <form @submit.prevent="verifyLogin()" class="main__form">
          <div class="group">
            <input
              id="email"
              class="inputfield"
              type="email"
              required
              placeholder=" "
              v-model="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <label for="email">Email</label>
          </div>
          <div class="group">
            <input
              id="password"
              v-if="isPasswordVisible"
              class="inputfield"
              type="text"
              required
              placeholder=" "
              v-model="password"
              pattern=".{6,}"
              title="Password should be min of 6 character"
              autocomplete="off"
            />
            <input
              id="password"
              v-else
              class="inputfield"
              type="password"
              required
              placeholder=" "
              v-model="password"
              pattern=".{6,}"
              title="Password should be min of 6 character"
              autocomplete="off"
            />
            <label for="password">Password</label>
            <span
              class="tooltip-toggle"
              :aria-label="
                isPasswordVisible ? 'Hide Password' : 'Show Password'
              "
              tabindex="0"
            >
              <eyeOutline
                :aria-label="
                  isPasswordVisible ? 'Hide Password' : 'Show Password'
                "
                @click="isPasswordVisible = !isPasswordVisible"
                width="20"
                id="passwordVisibility"
                :style="
                  isPasswordVisible
                    ? { color: '#4285f4' }
                    : { color: 'lightgray' }
                "
              />
            </span>
          </div>
          <!--       <input type="hidden" name="{{.xsrfName}}" value="{{.xsrfToken}}" />-->
          <div class="submitButtonSection">
            <button id="submit" class="button bg-primaryBlue">
              Log onto RobusTest
            </button>
          </div>
          <div style="margin-top: 20px; text-align: center; font-size: 15px">
            <!--		{{if .enableEmailSignup}}-->
            <a href="#/auth/register" class="otherPageLink text-primaryBlue">
              Create Account
            </a>
            |
            <!--        {{ end }}
              {{if .showRecover}}-->
            <a
              href="#/auth/recover"
              class="otherPageLink text-primaryBlue"
              style="margin-left: 5px"
            >
              Forgot Password
            </a>
            <!--    {{ end }}-->
          </div>
        </form>
        <!--       {{if .enableGoogleOauth}}-->
        <div style="margin: 15px auto">
          <span
            style="
              border: 1px solid silver;
              width: 100px;
              display: inline-block;
              margin-right: 3px;
            "
          ></span>
          <span style="display: inline-block; position: relative; top: 3px"
            >OR</span
          >
          <span
            style="
              border: 1px solid silver;
              width: 100px;
              display: inline-block;
              margin-left: 3px;
            "
          ></span>
        </div>

        <span style="display: block">
          <center>
            <a href="oauth2/google">
              <img
                src="data:image/png;base64,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"
              />
            </a>
          </center>
        </span>
        <!--	{{end}}-->

        <div>
          <span>
            <div class="poweredBy">
              <div class="poweredByText">Powered by</div>
              <div class="poweredByImage">
                <a href="http://robustest.com/" target="_blank">
                  <img
                    src="data:image/png;base64,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"
                    class="poweredByLogo"
                  />
                </a>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <ToastMessage ref="childRef"></ToastMessage>
  </div>
</template>
<script>
import eyeOutline from "~icons/mdi/eye-outline";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ToastMessage from "@/components/ToastMessage.vue";
export default {
  components: { eyeOutline, ToastMessage },
  setup() {
    const router = useRouter();
    const imageUrl = new URL(
      "../../../../../platform/nerve/resources/static/img/clientLogo.png",
      import.meta.url
    ).href;
    const isPasswordVisible = ref(false);
    const email = ref("");
    const password = ref("");
    const childRef = ref(null);
    function verifyLogin() {
      let payload = {
        email: email.value,
        password: password.value,
      };

      axios
        .post("/auth/login", payload)
        .then(function (response) {
          if (response && (response.status == 201 || response.status == 200)) {
            // handle success
            router.push("/projects");
            childRef.value.launch_toast(true, "Login successful", "success");
          } else childRef.value.launch_toast(true, "Unable to login", "error");
        })
        .catch(function (error) {
          childRef.value.launch_toast(
            true,
            "Sorry something went wrong",
            "error"
          );
          // handle error
          console.log(error);
        });
    }
    return {
      imageUrl,
      isPasswordVisible,
      email,
      password,
      verifyLogin,
      childRef,
    };
  },
};
</script>
<style scoped>
@import "../assets/auth.css";

#passwordVisibility {
  position: absolute;
  top: 20%;
  right: 1%;
  cursor: pointer;
}
.tooltip-toggle {
  /*  cursor: pointer;*/
  position: relative;
}
.tooltip-toggle::before {
  position: absolute;
  bottom: -40px;
  left: -80px;
  background-color: #2b222a;
  border-radius: 5px;
  color: #fff;
  content: attr(aria-label);
  padding: 2px;
  text-transform: none;
  transition: all 0.5s ease;
  width: 130px;
}
.tooltip-toggle::after {
  position: absolute;
  top: -12px;
  left: 19px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
  margin-left: -5px;
  width: 0;
  display: none;
}
.tooltip-toggle::before,
.tooltip-toggle::after {
  color: #efefef;

  font-size: 16px;
  opacity: 0;
  pointer-events: none;
  text-align: center;
}
.tooltip-toggle:hover::before {
  opacity: 1;
  transition: all 0.75s ease;
}
</style>
