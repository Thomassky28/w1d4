function actionWhenFound(name, index) {
  if (name === "Waldo"){
  console.log("Found Waldo at Index " + index);
  }
}

//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

var arrayList = ["Alice", "Bob", "Waldo", "Winston"];

arrayList.forEach(actionWhenFound);