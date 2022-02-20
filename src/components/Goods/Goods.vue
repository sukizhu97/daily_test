<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'cb' + id"
          :checked="state"
          @change="stateChange"
        />
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter.vue";

export default {
  components: {
    Counter,
  },
  props: {
    id: {
      defalut: true,
      type: Number,
    },
    // 渲染商品标题
    title: {
      default: "",
      type: String,
    },
    // 渲染商品图片
    pic: {
      default: "",
      type: String,
    },
    price: {
      default: 0,
      type: Number,
    },
    state: {
      defalut: true,
      type: Boolean,
    },
    // 商品数量
    counter: {
      defalut: 1,
      type: Number,
    },
  },
  methods: {
    stateChange(e) {
      // 形参中的e就是子组件通过$emit传入到父组件的数据，格式为对象，包括id和value
      const newState = e.target.checked;
      // 只要复选框发生了变化，就会调用这个函数
      //传参要用对象的形式传
      this.$emit("stateChange", { id: this.id, value: newState });
    },
  },
};
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
