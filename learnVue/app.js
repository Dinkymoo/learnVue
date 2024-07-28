const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      userName: "",
      confimedUserNamme: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.userName = event.target.value + " " + lastName;
    },
    submitForm(event) {
      //alert();
    },
    confirmUserName() {
      this.confimedUserNamme = this.userName;
    },
    resetInput() {
      this.name = "";
       this.confimedUserNamme ="";
    }
  },
});

app.mount('#events');
