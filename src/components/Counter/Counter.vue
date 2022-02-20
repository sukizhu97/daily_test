<template>
  <div
    class="number-container d-flex justify-content-center align-items-center"
  >
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="minus">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="plus">+</button>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";

export default {
  data() {
    return {
      count: 0,
    };
  },
  props: {
    num: {
      defalut: 1,
      type: Number,
    },
    // 接收id值，将来使用eventBus方案 更新哪个商品
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    plus() {
      const obj = { id: this.id, value: this.num + 1 };
      // 没有修改num值 +1 发给app
      bus.$emit("share", obj);
    },
    minus() {
      if (this.num == 0) {
        return;
      }
      const obj1 = { id: this.id, value: this.num - 1 };
      // 没有修改num值 +1 发给app
      bus.$emit("share1", obj1);
    },
  },
};
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
