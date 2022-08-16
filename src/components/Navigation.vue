<template>
  <v-app-bar app height="100">
    <v-row justify="start" class="">
      <v-col align-self="start">
        <v-img
          :src="
            !$vuetify.theme.dark
              ? require('@/assets/light_logo.svg')
              : require('@/assets/dark_logo.svg')
          "
          height="200"
          width="200"
        />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationView",
};
</script>
