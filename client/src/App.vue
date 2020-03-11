<template>
  <v-app>
    <v-content>
      <TestSocketComponent />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TestSocketComponent from "./components/TestSocketComponent.vue";

export default Vue.extend({
  name: "App",

  components: {
    TestSocketComponent
  },

  data: () => ({
    //
  })
});
</script>
