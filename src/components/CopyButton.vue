<template>
  <div class="button">
    <a
      ref="#"
      class="copy-button"
      @click="copyUrl"
    >
      URLをコピー
    </a>
  </div>
  <div
    v-if="!visible"
    class="copy-message"
  >
      Copied to clipboard.
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CopyButton.vue',
  setup () {
    const visible = ref(true);

    function copyUrl () {
      const protocol = location.protocol;
      const host = location.host;
      const list = location.pathname.split('/');
      let url = '';

      if (list[2] === 'dp') {
        url = `${protocol}//${host}/${list[2]}/${list[3]}`;
      } else if (list[1] === 'dp') {
        url = `${protocol}//${host}/${list[1]}/${list[2]}`;
      } else if (list[1] === 'gp') {
        url = `${protocol}//${host}/${list[1]}/${list[2]}/${list[3]}`;
      }
      navigator.clipboard.writeText(url);
      visible.value = false;

      // 2秒後にメッセージのテキストを消す
      setTimeout(() => {
        visible.value = true;
      }, 2000);
    }

    return {
      copyUrl,
      visible
    };
  }
});
</script>

<style scoped>
.button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #8CD460;
}
.button:hover {
  color:white;
  opacity: 0.8;
}
.copy-button {
  font-size: 1.05rem;
  font-weight: bold;
  color:white;
  text-decoration: none;
}
.copy-message {
  text-align: center;
  width: 100%;
  color: #8CD460;
  margin-bottom: 10px;
}
</style>
