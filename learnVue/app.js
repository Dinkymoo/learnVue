const app = Vue.createApp({
  //shorthand function
  data() {
    return {
      //always an object
      courseGoalA: "Finish the Vue course!",
      courseGoalB: "Learn more Vue!",
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
