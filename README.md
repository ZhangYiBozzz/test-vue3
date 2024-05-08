// vue3 api 模块化
// vue2 中对 vue 库是全量引入 不能做到按需引入
// vue3 几乎兼容所有 vue2 的语法 平滑的过度

1.使用 createApp(跟组件) 创建跟组件
2.setup == beforCreate + created
3.setup 是 vue3 api(和 vue2 选项配置等价的 api) 的入口
4.setup 函数返回的对象中的属性才能被模板使用 5.使用 ref 定义响应是数据 6.使用 reactive 定义响应式数据 定义响应式数据 ！！！ 不能用于基本数据类型的响应式数据的定义！！！禁止对其结构赋值
7.ref 是 reactive 的语法糖！！！ (ref 就是基于 reactive 实现的)
8.ref 用于任意数据类型 reactive 仅用于对象
9.toRef：将 reactive 定义的响应式数据转化为某个 ref 响应式数据
10.toRes：批量转换 结构保持响应式 11.在 vue3 组件中 只有通过 emits 选项配置的事件名才被认定为自定义事件
11.context.expose 组件的方法私有化

12.v-model 的变化 可以传递参数了
13.v-model 更新绑定的值自定义事件发生了变化 updata：key
.v-model:value

14.计算属性
const sum = computend(()=>a.value+b.value)//这个是 get 写法，可以省略

15.watch 是一个组合式 api 需要时按需引入
16.nextTick 是一个组合式 api 需要时按需引入

17.immediate:true 初始化执行一次 deep：true 深度监听
18.watchEffect 除了(第一次不执行用 watch 和监听数据改变前的值用 watch)

sync 作用就是给该组件添加一个自定义事件用来修改绑定给 abc 属性的值
:abc.sync="val"
:abc="val" @update:abc="(e)=>(value.e)"

Tranition 过度效果
.名-enter-from{} 从无到有
.名-enter-active{}
.名-enter-to{}

Teleport 传送到玻璃下面
