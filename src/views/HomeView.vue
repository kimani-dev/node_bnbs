<template>
  <div>
    <v-container fluid>
      <v-btn
        fab
        fixed
        color="primary"
        right
        class="mt-13"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        ><v-icon>
          {{ $vuetify.theme.dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
        </v-icon></v-btn
      >
      <v-row v-if="searching">
        <lottie-animation
          path="animations/search.json"
          :loop="true"
          :autoPlay="true"
        />
      </v-row>
      <v-row>
        <v-col v-for="item in appartments" :key="item.id" cols="4">
          <Card :appartment="item" />
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :color="this.snackBarData.success ? 'green' : 'error'"
    >
      <div class="d-flex justify-center">
        <v-icon v-if="!snackBarData.success">mdi-cancel</v-icon>
        <v-icon v-if="snackBarData.success">mdi-check</v-icon>
        <p class="my-auto ml-3">{{ snackBarData.text }}</p>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import { mapState, mapActions } from "pinia";
import { appartmentStore } from "../stores/appartments";
import Card from "../components/BnbCard.vue";
export default {
  name: "HomeView",
  data: () => ({
    //
  }),
  components: {
    Card,
    LottieAnimation,
  },
  computed: {
    ...mapState(appartmentStore, [
      "appartments",
      "searching",
      "snackbar",
      "snackBarData",
    ]),
  },
  methods: {
    ...mapActions(appartmentStore, ["getAppartments"]),
  },
  mounted() {
    this.getAppartments();
  },
};
</script>
