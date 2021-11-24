<template>
  <div v-if="messages.length" class="messages">
    <div v-for="m in messages" :key="m.id" :class="m.type">
      {{ m.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      messages: []
    }
  },
  methods: {
    // 添加一个消息
    add(options) {
      const id = this.id++
      const layer = { ...options, id }
      this.messages.push(layer)
      // layer.timer = setTimeout(() => {
      //   this.remove(layer)
      // }, options.duration)
    },
    // 移除一个消息
    remove(layer) {
      clearTimeout(layer.timer)
      this.messages = this.messages.filter(message => message.id !== layer.id)
    }
  }
}
</script>

<style scoped>

.messages {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.messages > div {
  margin: 8px;
  width: 400px;
  height: px;
  line-height: 50px;
  text-align: center;
  border: 1px solid;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
}
.success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #67c23a;
}
.warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}
.error {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c
}

</style>