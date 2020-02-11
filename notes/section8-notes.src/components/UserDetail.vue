<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }} {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name (Parent)</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    myName: {
      type: String,
      default: "No Name Specified!"
    },
    resetFn: {
      type: Function
    },
    userAge: {
      type: Number
    }
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = "Lionel";
      this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    });
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
