const app = Vue.createApp({
  //shorthand function
  data() {
    return {
      //always an object
      courseGoal: "Finish the Vue course",
      vueLink: "http://vueja.org",
    };
  },
  methods: {
    ouputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5)
      return "Learn Vue!";
      else return "Master Vue!";
    },
  },
});

app.mount("#user-goal");
