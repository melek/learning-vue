<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
              v-for="(server, index) in servers"
              :serverIndex="index"
              :serverInfo="server"
              :key="index">
            </app-server>
        </ul>
    </div>
</template>

<script>

import ServerListItem from './ServerListItem.vue';
import { eventBus } from '../../main';

export default {
  components: {
    appServer: ServerListItem
  },
  data: function() {
    return {
      servers: [
        { name: "Google", status: "normal" },
        { name: "Boing Boing", status: "critical" },
        { name: "Lionel Tarot", status: "unknown" },
        { name: "Ask Jeeves", status: "unknown" },
        { name: "Pentagon", status: "normal"}
      ]
    }
  },
  created() {
    eventBus.$on("serverStatusUpdate", (serverIndex, newStatus) => {
      this.servers[serverIndex].status = newStatus;
    });
  }
};
</script>

<style>

</style>
