const app = Vue.createApp({
  //shorthand function
  data() {
    return {
      //always an object
      courseGoalA: "Finish the Vue course!",
      courseGoalB: "<h2 style='color:white'>Learn more Vue!</h2>",
      vueLink: "http://vueja.org",
    };
  },
  methods: {
    ouputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5)
      return this.courseGoalA;
      else return this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
