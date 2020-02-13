<template>
  <div class="form-group">
    <label>
      First Name
      <input
        type="text"
        name="first-name"
        class="form-control"
        @input="firstName = $event.target.value; updateFullName();"
        :value="firstName">
    </label>
    <label>
      Last Name
      <input
        type="text"
        name="last-name"
        class="form-control"
        @input="lastName = $event.target.value; updateFullName();"
        :value="lastName">
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: ""
    };
  },
  computed: {
    fullName() {
      console.log("fullName computed - " + this.firstName + " " + this.lastName);
      return this.firstName + " " + this.lastName;
    }
  },
  methods: {
    updateFullName() {
      console.log("updateFullName called - " + this.fullName);
      this.$emit('input', this.fullName);
    }
  }
}
</script>

<style>

</style>
