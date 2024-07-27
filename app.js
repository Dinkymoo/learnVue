//vue App

Vue.createApp({
  data: function () {
    //must return a function
    return {
      //data your function must be aware of
      goals: [],
      enteredValue: "",
    };
  },
  //methods callable from in the HTML code
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

//imperitive JavaScript
// const btn = document.querySelector("button");
// const inp = document.querySelector("input");
// const lst = document.querySelector("ul");

// function addGoal() {
//   const enteredVal = inp.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredVal;
//   inp.value = "";
//   lst.appendChild(listItemEl);
// }

// btn.addEventListener("click", addGoal);
