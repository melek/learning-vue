<template>
  <li
    class="list-group-item"
    :style="backgroundStyle"
    @click="viewServer">
      {{ serverInfo.name }}
  </li>
</template>

<script>
export default {
  props: {
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
      eventBus.viewServer(this.serverInfo.name);
    }
  }
}
</script>

<style>

</style>
