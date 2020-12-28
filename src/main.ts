import { createApp } from 'vue';
import App from './App.vue';

// ページ右の購入等の要素を取得
const target = document.getElementById('rightCol');

if (target) {
  // ボタンを埋め込むための空要素を追加
  target.insertAdjacentHTML('afterbegin', '<div id="copy-button-content"></div>');
}

createApp(App).mount('#copy-button-content');
