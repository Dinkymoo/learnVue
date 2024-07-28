const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: "",
    };
  },
  computed: {
    fullName() {
      console.log(
        "run again...."
      )
      if (this.userName === "") return "";
      return this.userName + " van Graan";
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },

    submitForm(event) {
      //alert();
    },

    resetInput() {
      this.userName = "";
    },
  },
});

app.mount('#events');
