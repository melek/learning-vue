<template>
  <div>
    <p>
      Server status: {{ status ? "Critical" : "Normal" }}
      <button @click="changeStatus">Toggle</button>
    </p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      status: false
    }
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    }
  }
};
</script>
