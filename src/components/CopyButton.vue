<template>
  <div class="copy-content">
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
      const names = location.pathname.split('/');
      const typeIndex = names.findIndex(name => name === 'dp' || name === 'gp');
      const isVideo = names.findIndex(name => name === 'video');

      if (!typeIndex) return;

      switch (names[typeIndex]) {
        case 'dp':
          // 商品ページの場合
          navigator.clipboard.writeText(`${protocol}//${host}/${names.slice(typeIndex, typeIndex + 1).join('/')}`);
          break;

        case 'gp':
          if (isVideo) {
            // プライムビデオのページの場合
            navigator.clipboard.writeText(`${protocol}//${host}/${names.slice(typeIndex, typeIndex + 4).join('/')}`);
          } else {
            // 検索エンジンからの流入用ページの場合
            navigator.clipboard.writeText(`${protocol}//${host}/${names.slice(typeIndex, typeIndex + 2).join('/')}`);
          }
          break;
      }

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
.copy-content {
  width: 100%;
  height: 100%;
  margin-bottom: 10px !important;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #8CD460;
}
.copy-content:hover {
  color:white;
  opacity: 0.8;
}
.copy-button {
  font-size: 1.05rem;
  font-weight: bold;
  color:white;
  text-decoration: none;
  display: block;
  padding: 10px;
}
.copy-message {
  text-align: center;
  width: 100%;
  color: #8CD460;
  margin-bottom: 10px !important
}
</style>
