<template>
  <div id="toast">
    <div id="img" :class="status + 'Icon'">
      <check v-show="status == 'success'" />
      <closeThick v-show="status == 'error'" />
      <alert v-show="status == 'warning'" />
    </div>
    <div :class="status + 'Msg'" id="desc">{{ message }}</div>
  </div>
</template>
<script>
import check from "~icons/mdi/check";
import closeThick from "~icons/mdi/close-thick";
import alert from "~icons/mdi/alert";
import { ref } from "vue";
export default {
  components: { check, closeThick, alert },
  setup(props, ctx) {
    const message = ref("imp");
    const status = ref("");
    function launch_toast(showToastMessage, toastMessage, toastStatus) {
      if (showToastMessage) {
        message.value = toastMessage;
        status.value = toastStatus;
        var x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 5000);
      }
    }
    ctx.expose({ launch_toast });
    return {
      message,
      status,
    };
  },
};
</script>
<style scoped>
#toast {
  visibility: hidden;
  max-width: 50px;
  height: 50px;
  /*margin-left: -125px;*/
  margin: auto;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 50px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
}
.successIcon {
  background-color: rgb(62, 179, 103);
  color: rgb(255, 249, 249);
}
.successMsg {
  background-color: rgb(9, 246, 92);
  color: rgb(255, 249, 249);
}
.errorIcon {
  background-color: rgb(224, 79, 6);
  color: rgb(255, 249, 249);
}
.errorMsg {
  background-color: rgb(239, 82, 10);
  color: rgb(255, 249, 249);
}
#toast #img {
  width: 50px;
  height: 50px;
  text-align: center;
  float: left;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
}
#toast #desc {
  color: rgb(8, 7, 7);

  padding: 16px;

  overflow: hidden;
  white-space: nowrap;
}

#toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.75s 4.5s;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.75s 4.5s;
}

@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
    overflow: hidden;
    max-width: 50px;
  }
  to {
    top: 30px;
    opacity: 1;
    overflow: hidden;
    max-width: 50px;
  }
}

@keyframes fadein {
  from {
    top: 0px;
    opacity: 0;
    overflow: hidden;
    max-width: 50px;
  }
  to {
    top: 30px;
    opacity: 1;
    overflow: hidden;
    max-width: 50px;
  }
}

@-webkit-keyframes expand {
  from {
    min-width: 50px;
    overflow: hidden;
  }
  to {
    min-width: 350px;
    overflow: hidden;
  }
}

@keyframes expand {
  from {
    min-width: 50px;
    overflow: hidden;
  }
  to {
    min-width: 350px;
    overflow: hidden;
  }
}
@-webkit-keyframes stay {
  from {
    min-width: 350px;
    overflow: hidden;
  }
  to {
    min-width: 350px;
    overflow: hidden;
  }
}

@keyframes stay {
  from {
    min-width: 350px;
    overflow: hidden;
  }
  to {
    min-width: 350px;
    overflow: hidden;
  }
}
@-webkit-keyframes shrink {
  from {
    min-width: 350px;
    overflow: hidden;
  }
  to {
    min-width: 50px;
    overflow: hidden;
  }
}

@keyframes shrink {
  from {
    min-width: 350px;
    overflow: hidden;
  }
  to {
    overflow: hidden;
    min-width: 50px;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
    overflow: hidden;
  }
  to {
    top: 0px;
    opacity: 0;
    overflow: hidden;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    overflow: hidden;
    opacity: 1;
  }
  to {
    top: 0px;
    overflow: hidden;
    opacity: 0;
  }
}
</style>
