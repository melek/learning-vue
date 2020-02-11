<template>
    <div class="col-xs-12 col-sm-6">
        <h1>{{ selectedServer.name }}</h1>
        <p>Server index: {{ selectedServerIndex }}</p>
        <p>Server status: {{ selectedServer.status }}</p>
        <button
          v-if="selectedServerIndex !== undefined"
          @click="cycleStatus">Cycle Status</button>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  props: {
    selectedServerIndex: Number,
    selectedServer: {
      type: Object,
      default: {
        name: "No Server Specified",
        status: "unknown"
      }
    }
  },

  methods: {
    cycleStatus() {
      var newStatus;

      if(this.selectedServer.status == "normal") {
        newStatus = "critical";
      } else if(this.selectedServer.status == "critical") {
        newStatus = "unknown";
      } else {
        newStatus = "normal";
      }

      // Approach leveraging JS objects as passed by reference
      this.selectedServer.status = newStatus;

      // Approach using eventBus
      // This isn't needed, since objects are passed by reference
      // console.log("ServerDetails -> cycleStatus() -> this.selectedServerIndex: " + this.selectedServerIndex);
      // eventBus.serverStatusUpdate(this.selectedServerIndex, newStatus);
    }
  }

}
</script>

<style>

</style>
