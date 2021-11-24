<template>
<!-- 还在开发 -->
  <ul class="Pagination">
    <li></li>
    <li class="page-number">1</li>
    <li class="page-number">2</li>
    <li class="page-number">3</li>
    <li class="page-number">4</li>
    <li class="page-number">5</li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.Pagination {
  display: flex;
  list-style: none;
  margin: 100px 0 0 200px;
}

.page-number {
  margin: 0 6px;
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
  overflow-wrap: break-word;
  color: #99a9bf;
}

.page-number:hover {
  cursor: pointer;
  background: #ff7242;
  color: #fff;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.09);
}
</style>