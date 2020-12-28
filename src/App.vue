<template>
  <CopyButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CopyButton from '@/components/CopyButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    CopyButton
  }
});
</script>
