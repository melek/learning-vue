<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    :style="backgroundStyle"
    @click="viewServer">
      {{ serverIndex }} : {{ serverInfo.name }}
  </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  props: {
    serverIndex: Number,
    serverInfo: {
      type: Object,
      default: {
        name: "No Server Specified",
        status: "unknown"
      }
    }
  },
  computed: {
    backgroundStyle: function() {
      var statusColor;

      if (this.serverInfo.status == "normal") {
        statusColor = "palegreen";
      } else if (this.serverInfo.status == "critical") {
        statusColor = "pink";
      } else {
        statusColor = "lightgray";
      }

      return { backgroundColor: statusColor };
    }
  },
  methods: {
    viewServer() {
      eventBus.serverViewUpdate(this.serverIndex, this.serverInfo);
    }
  }
}
</script>

<style>

</style>
