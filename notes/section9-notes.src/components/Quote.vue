<template>
<div class="quoteWrap">
  <div class="title">
    <slot name="title"></slot>
    <slot name="subtitle">Anonymous</slot>
  </div>
  <hr>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: ['quote']
}
</script>

<style scoped>
.quoteWrap {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
  width: 100%;
}

.title {
  font-style: italic;
}
</style>
