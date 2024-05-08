<template>
  <div>{{ a }}</div>
  <co-button @click="updateA">updateA</co-button>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const a = ref(123);
    const updateA = () => a.value++;
    // 自动判断需要监听谁！！
    // watchEffect要响应式的数据 死的不会监听
    const stopWatch = watchEffect(() => {
      console.log(a.value);
    });
    return { a, updateA, stopWatch };
  },
};
</script>

<style></style>
