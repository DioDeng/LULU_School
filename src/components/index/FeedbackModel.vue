<template>
  <section class="card bg-white p-5 border-0 rounded-0 grid_line">
    <h2 class="d-flex text-dark">
      <span
        style="animation-delay: calc(1s * 0.1)"
        class="animate__animated animate__rotateInDownLeft"
        ><i class="fas fa-exclamation me-3"></i
      ></span>
      <span
        style="animation-delay: calc(1s * 0.2)"
        class="animate__animated animate__rotateInDownLeft"
        >學</span
      >
      <span
        style="animation-delay: calc(1s * 0.3)"
        class="animate__animated animate__rotateInDownLeft"
        >生</span
      >
      <span
        style="animation-delay: calc(1s * 0.4)"
        class="animate__animated animate__rotateInDownLeft"
        >回</span
      >
      <span
        style="animation-delay: calc(1s * 0.5)"
        class="animate__animated animate__rotateInDownLeft"
        >饋</span
      >
    </h2>
    <div class="container py-5">
      <!-- 留言展示區 -->
      <div class="message-board">
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="message text-white p-3 rounded shadow"
          :class="msg.color"
          :style="{ top: msg.y + 'px', left: msg.x + 'px' }"
        >
          {{ msg.text }}
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* 設置留言區 */
.message-board {
  position: relative;
  width: 100%;
  height: 50vh;
}

/* 留言樣式 */
.message {
  position: absolute;
  word-wrap: break-word;
  font-size: 16px;
  transform: rotate(calc(-5deg + 10deg * random())); /* 隨機旋轉 */
}
.grid_line {
  width: 100%;
  height: 100%;
  text-align: center;
  color: blue;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: -webkit-linear-gradient(top, transparent 15px, #ccc 0),
    -webkit-linear-gradient(left, transparent 15px, #ccc 0);
  background-size: 16px 16px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'

// 留言列表
const messages = ref([
  {
    id: 1,
    text: 'LULU:老師講的比課本還生動，感覺像在聽故事一樣！',
    x: 0,
    y: 0,
    color: 'bg-primary',
  },
  {
    id: 2,
    text: '老師，這堂課的知識量超標了，我的腦袋快要升級了！',
    x: 0,
    y: 0,
    color: 'bg-success',
  },
  { id: 3, text: '這個留言板有點亂 XD', x: 0, y: 0, color: 'bg-warning' },
  { id: 4, text: '這堂課讓我腦袋開竅了！感覺像打開了新世界的大門！', x: 0, y: 0, color: 'bg-info' },
  { id: 5, text: '教室的貓助教會盯人上課 ：）', x: 0, y: 0, color: 'bg-dark' },
  {
    id: 6,
    text: '今天的課程就像一場精彩的電影，高潮迭起、知識點滿滿！',
    x: 0,
    y: 0,
    color: 'bg-secondary',
  },
  {
    id: 7,
    text: '我考上第一志願拉～～～',
    x: 0,
    y: 0,
    color: 'bg-primary',
  },
  {
    id: 8,
    text: '教室有滿滿的點心吃到飽～',
    x: 0,
    y: 0,
    color: 'bg-success',
  },
  { id: 9, text: '我發現這個概念超有趣，沒想到還能這樣應用！', x: 0, y: 0, color: 'bg-warning' },
  { id: 4, text: '很喜歡補習班的學習環境，大家一起衝刺！', x: 0, y: 0, color: 'bg-info' },
  {
    id: 5,
    text: '以前覺得這些知識很枯燥，但老師的講解讓我產生了興趣！',
    x: 0,
    y: 0,
    color: 'bg-dark',
  },
  {
    id: 10,
    text: '這堂課讓我對這個主題更有信心了！以前覺得難，現在覺得可以挑戰！',
    x: 0,
    y: 0,
    color: 'bg-danger',
  },
])

// 產生隨機位置
const randomPosition = () => ({
  x: Math.random() * window.innerWidth * 0.5, // 限制在 70% 的範圍內
  y: Math.random() * window.innerHeight * 0.5,
})

// 初始化留言位置
onMounted(() => {
  messages.value.forEach((msg) => {
    const pos = randomPosition()
    msg.x = pos.x
    msg.y = pos.y
  })
})
</script>