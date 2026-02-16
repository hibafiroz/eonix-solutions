function boilWater(callback) {
  setTimeout(() => {
    console.log("Boiling water...");
    callback();
  }, 1000);
}

function addTeaLeaves(callback) {
  setTimeout(() => {
    console.log("Adding tea leaves...");
    callback();
  }, 1000);
}

function addSugar(callback) {
  setTimeout(() => {
    console.log("Adding sugar...");
    callback();
  }, 1000);
}

function pourIntoCup(callback) {
  setTimeout(() => {
    console.log("Pouring into cup...");
    callback();
  }, 1000);
}

// Callback Hell (Nested structure)
boilWater(function () {
  addTeaLeaves(function () {
    addSugar(function () {
      pourIntoCup(function () {
        console.log("☕ Tea is ready!");
      });
    });
  });
});



