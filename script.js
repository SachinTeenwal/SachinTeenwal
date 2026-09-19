```javascript
// ==========================================
// AiHireGenz Demo Dashboard
// ==========================================


// AI JOB SCAN
const scanButton = document.getElementById("scanBtn");

scanButton.addEventListener("click", function () {

  scanButton.innerText = "Scanning...";

  setTimeout(function () {

    scanButton.innerText = "✓ Scan Complete";

    alert(
      "AI Job Scan Complete!\n\n" +
      "12 new matching jobs found.\n" +
      "Average match score: 87%"
    );

    setTimeout(function () {
      scanButton.innerText = "✦ Run AI Job Scan";
    }, 2000);

  }, 1500);

});


// APPLY BUTTONS

const applyButtons =
  document.querySelectorAll(".apply");

applyButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const job =
      button.parentElement
        .querySelector("h4")
        .innerText;

    alert(
      "Application Started!\n\n" +
      "Position: " + job +
      "\n\n" +
      "This is a demo application."
    );

  });

});


// SIDEBAR NAVIGATION

const navigation =
  document.querySelectorAll(".nav");

navigation.forEach(function (item) {

  item.addEventListener("click", function () {

    navigation.forEach(function (nav) {
      nav.classList.remove("active");
    });

    item.classList.add("active");

    const section =
      item.querySelector("span").innerText;

    if (section !== "Dashboard") {

      alert(
        section +
        "\n\nDemo module selected."
      );

    }

  });

});


// JOB SEARCH

const search =
  document.getElementById("search");

const jobs =
  document.querySelectorAll(".job");

search.addEventListener("input", function () {

  const keyword =
    search.value.toLowerCase();

  jobs.forEach(function (job) {

    const text =
      job.innerText.toLowerCase();

    if (text.includes(keyword)) {

      job.style.display = "grid";

    } else {

      job.style.display = "none";

    }

  });

});


// VIEW ALL

const viewAll =
  document.querySelectorAll(".link");

viewAll.forEach(function (button) {

  button.addEventListener("click", function () {

    alert(
      "Opening all available jobs..."
    );

  });

});
```
