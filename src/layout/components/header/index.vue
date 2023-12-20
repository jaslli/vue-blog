<script setup>
</script>

<template>
  <div class="header">
    <div class="content">
      <router-link to="/" class="subtitle"> yww </router-link>
      <ul class="top-links">
        <li>
          <router-link to="/" class="link">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconfaxian-copy" />
            </svg>
            首页
          </router-link>
        </li>
        <li>
          <router-link to="/archives" class="link">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconbumenguidangtongji" />
            </svg>
            归档
          </router-link>
        </li>
        <li>
          <router-link to="/categories" class="link">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconfenlei" />
            </svg>
            分类
          </router-link>
        </li>
        <li>
          <router-link to="/link" class="link">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconlianjie" />
            </svg>
            友链
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="link">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconaixin" />
            </svg>
            关于
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    background: #7266ba;
    height: 100%;
    @apply flex-row opacity-[.75] shadow-2xl;
    .content {
      height: 100%;
      margin: 0 auto;
      padding: 0;
      justify-content: space-between;
      font-size: 1.3rem;
      color: #d0c7c7;
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

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>