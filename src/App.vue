<template>
  <div class="app-container">
    <!-- 循环渲染goods v-for -->
    <Header></Header>
    <!-- header头部区 -->
    <!-- 循环渲染goods v-for -->
    <Goods
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      :counter="item.goods_count"
      @stateChange="getNewState"
      ><Counter></Counter>
    </Goods>
    <p>aaa</p>
    <Footer
      :fullState="fullState"
      @full-change="full_change"
      :total="amount"
      :all="totalnum"
    ></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Goods from "@/components/Goods/Goods.vue";
import Footer from "@/components/Footer/Footer.vue";
import bus from "@/components/eventBus.js";
import Counter from "@/components/Counter/Counter.vue";
// 1. 导入 axios 请求库
import axios from "axios";

export default {
  data() {
    return {
      // 存储购物车的列表顺序
      list: [],
    };
  },
  // 2. 调用方法
  methods: {
    // 封装请求列表数据方法
    async initCartList() {
      // 调用get方法，请求列表数据
      // 调用get返回的是promise 前面加await 返回包括六个属性
      // 关心的属性中是data属性
      // 方法加了await 方法名加async
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      console.log(res);
      // 只要页面渲染 必须转存在到data中
      if (res.status === 200) {
        this.list = res.list;
      }
    },
    getNewState(e) {
      // 接收子组件传递过来的数据
      // 使用查找id
      this.list.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true; // 终止最后循环
        }
      });
    },
    full_change(val) {
      //接收子组件全选状态按钮
      this.list.forEach((item) => {
        item.goods_state = val;
      });
    },
  },
  // 3. 在生命周期中才会发ajax请求
  created() {
    // 调用请求数据
    this.initCartList().list;
    bus.$on("share", (val) => {
      this.list.some((item) => {
        if (item.id == val.id) {
          item.goods_count = val.value;
          return true;
        }
      });
    });
    bus.$on("share1", (val) => {
      this.list.some((item) => {
        if (item.id == val.id) {
          item.goods_count = val.value;
          return true;
        }
      });
    });
  },
  components: {
    Header,
    Goods,
    Footer,
    Counter,
  },
  computed: {
    // 动态计算布尔值然后给全选框使用
    fullState() {
      return this.list.every((item) => item.goods_state);
    },
    amount() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce(
          (total, item) => (total += item.goods_price * item.goods_count),
          0
        );
    },
    totalnum() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((sum, item) => (sum += item.goods_count), 0);
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
