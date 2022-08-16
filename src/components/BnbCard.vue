<template>
  <v-card>
    <v-hover v-slot="{ hover }">
      <v-img
        :src="appartment.images.picture_url"
        class="align-center"
        height="250"
        :gradient="hover ? 'to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)' : ''"
      >
        <div class="d-flex justify-center">
          <v-btn
            v-if="hover"
            dark
            outlined
            color="primary"
            rounded
            @click="dialog = true"
            >see more</v-btn
          >
        </div>
      </v-img>
    </v-hover>
    <v-card-title class="text-truncate"> {{ appartment.name }}</v-card-title>
    <v-card-text>
      <div class="d-flex align-center">
        <strong class="text-h5 font-weight-bold green--text"
          >$ {{ appartment.price.$numberDecimal }}</strong
        >
        <v-icon>mdi-circle-small</v-icon>
        <v-icon class="mr-2 primary--text">mdi-bed</v-icon>
        {{ appartment.bedrooms }}
        <v-icon class="ml-2 mr-2 primary--text">mdi-shower</v-icon>
        {{ appartment.bathrooms.$numberDecimal }}
        <v-spacer></v-spacer>
        <v-icon class="mr-2 primary--text">mdi-map-marker</v-icon>
        {{ appartment.address.country }}
      </div>
      <div class="text-truncate">
        {{ appartment.description }}
      </div>
      <v-btn
        color="primary"
        class="mt-2"
        :href="appartment.listing_url"
        target="_blank"
        >book</v-btn
      >
    </v-card-text>
    <v-dialog v-model="dialog" width="700">
      <v-card width="700" class="mx-auto">
        <v-img :src="appartment.images.picture_url" height="400" />
        <v-card-title>
          {{ appartment.name }}
        </v-card-title>
        <v-card-text>
          {{ appartment.description }}
          <div>
            <v-row>
              <div class="text-h5 mt-3">Ammenities</div>
            </v-row>
            <v-row>
              <v-chip
                outlined
                color="primary"
                class="ma-1"
                v-for="n in appartment.amenities"
                :key="n"
              >
                {{ n }}
              </v-chip>
            </v-row>
            <v-row>
              <div class="text-h5 mt-3">House Rules</div>
            </v-row>
            <v-row>
              {{
                appartment.house_rules == ""
                  ? "This listing has no rules! Enjoy your stay"
                  : appartment.house_rules
              }}
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    appartment: {
      type: Object,
    },
  },
};
</script>

<style></style>
