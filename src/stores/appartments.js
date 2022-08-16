import { defineStore } from "pinia";
import Api from "../services/Api";

export const appartmentStore = defineStore("appartment", {
  state: () => ({
    appartments: [],
    snackbar: false,
    snackBarData: {
      success: false,
      text: "",
    },
    searching: false,
  }),
  actions: {
    getAppartments() {
      this.searching = true;
      return Api.getAppartments()
        .then((result) => {
          this.appartments = result.data;
          this.showSnackBar(true, `Showing ${this.appartments.length} BnB's`);
        })
        .catch((err) => {
          this.showSnackBar(false, err);
        })
        .finally(() => {
          this.searching = false;
        });
    },
    showSnackBar(success, text) {
      this.snackbar = true;
      this.snackBarData.text = text;
      this.snackBarData.success = success;
    },
  },
});
