<template>
  <!-- {{ msg }} setup其他任何地方都要.value -->
  <!-- <div @click="fn">msg:{{ msg }}</div> -->
  <router-view />
  <!-- <div>
    <h1>
      {{ count.value }}
    </h1>
    <h1>{{ user.name }}</h1>
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
  </div> -->
</template>

<script>
// // api就是局部响应式
// import { ref, onMounted, reactive } from "vue";

// const ref1 = (initValue) => reactive({ value: initValue });
// export default {
//   //setup 配置项 vue3独有
//   //setup一方面是一个生命周期(beforeCreate+created = setup)
//   //setup是vue3 api的入口
//   setup() {
//     // console.log("setup!!!");
//     // const msg = ref("abc");
//     // const fn = () => console.log(msg.value);
//     // fn();
//     // const count = ref(123);
//     // onMounted(() => console.log(count.value));
//     // return {
//     //   // 在setup模板中需要使用的变量就返回
//     //   msg,
//     //   fn,
//     // };

//     const user = reactive({ name: "张少", age: 18 });
//     // reactive用基本数据类型的数据初始化 ×
//     // reactive用数组的初始化
//     // 对reactive响应数据直接结构赋值，会失去响应式
//     // 对reactive响应数据结构赋值，用toRefs不直接赋值

//     const count = ref1(18);
//     const increase = () => count.value++;
//     const decrease = () => count.value--;
//     return {
//       count,
//       increase,
//       decrease,
//       user,
//     };
//   },
// };
</script>

<style></style>
