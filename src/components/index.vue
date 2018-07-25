<template>
  <div class="index">
    <h1>todoList</h1>
    <div class="middle">
      <input type="text">
      <button>去做</button>
    </div>
    <ul>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
  .index{
    width: 800px;
    margin: 0 auto;
    .middle{
      margin: 20px 0;
      input{
        font-size: 28px;
        width: 300px;
        height: 40px;
      }
      button  {
        font-size: 18px;
        width: 70px;
        height: 40px;
      }
    }
  }
  h1{
    margin: 50px 0;
    font-size: 36px;
  }
  ul{
    font-size: 22px;
    li{
      margin: 10px 0;
    }
  }
</style>
