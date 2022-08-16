import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: { primary: "#4caf50" },
      dark: { primary: "#ffaa00" },
    },
    dark: true,
  },
});
