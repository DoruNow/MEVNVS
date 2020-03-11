<template>
  <div>
    <v-btn color="success" @click="getRealTimeData">Connect</v-btn
    >{{ allFetchedData }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      fetchedData: "",
      allFetchedData: [""]
    };
  },
  methods: {
    getRealTimeData() {
      socket.on("newdata", (fetchedData: string) => {
        this.allFetchedData.push(fetchedData);
      });
    }
  }
});
</script>
