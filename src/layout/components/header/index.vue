<script setup>
</script>

<template>
  <div class="header">
    <div class="content">
      <router-link to="/" class="subtitle"> yww </router-link>
      <ul class="top-links">
        <li>
          <router-link to="/" class="link">
            首页
          </router-link>
        </li>
        <li>
          <router-link to="/archives" class="link">
            归档
          </router-link>
        </li>
        <li>
          <router-link to="/categories" class="link">
            分类
          </router-link>
        </li>
        <li>
          <router-link to="/link" class="link">
            友链
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="link">
            关于
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background: rgb(230, 230, 250) ;
    height: 50px;
    width: 100%;
    @apply flex-row fixed;
    .content {
      height: 100%;
      margin: 0 auto;
      padding: 0;
      justify-content: space-between;
      font-size: 1.3rem;
      color: #8b8b8b;
      @apply max-w-5xl flex;
    }
  }

  .subtitle {
    display: flex;
    width: 124px;
    height: 100%;
    align-items: center;
    justify-content: center;

  }

  .top-links {
    height: 100%;
    display: flex;
    li {
      margin-left: 14px;
      display: flex;
    }
  }

  .link {
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #960cab;
    }
  }
</style>