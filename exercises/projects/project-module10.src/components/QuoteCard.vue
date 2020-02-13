<template>
  <div class="col-6 col-md-4 col-lg-3 p-1">
      <div class="card">
        <div class="card-body" style="cursor: pointer;">
          <slot>Sample Quote {{ randomNum }}</slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      randomNum: 0
    }
  },
  created() {
    this.randomNum = Math.floor(Math.random() * 100);
  }
}
</script>

<style>
.card-body {
  font-size: 1.5rem;
  font-family: 'Arizonia', 'Cedarville Cursive', cursive;
  transition: background-color .25s;
}

.card-body:hover {
  background-color: #ffefef;
}
</style>
