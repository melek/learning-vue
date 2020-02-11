<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me! {{ age }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: ['userAge'],
  data: function() {
    return {
      age: this.userAge
    };
  },
  methods: {
    editAge() {
      this.age = 100;
      //eventBus.$emit('ageWasEdited', this.userAge);
      eventBus.changeAge(this.age);
    }
  }
};
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
