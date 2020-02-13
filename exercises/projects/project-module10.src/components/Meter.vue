<template>
  <div>
    <slot name="title"><h2>Meter</h2></slot>
    <div class="bar-limit">
      <div class="bar-value" :style="barValueWidth">
        <p class="mx-2 my-0">
          {{ barValue }} / {{ barLimit }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['barValue', 'barLimit'],
  computed: {
    barValueWidth() {
      return {
        width: (this.barValue / this.barLimit * 100) + "%"
      };
    }
  }
}
</script>

<style>
.bar-limit {
  width: 100%;
  background-color: gray;
  min-height: .8rem;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.33rem;
}

.bar-value {
  background-color: #308fd0;
  color: white;
  text-align: center;
  transition: width .5s;
  font-size: .8rem;
}
</style>
