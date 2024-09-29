const boxes1 = document.getElementById("boxes1");
const flexDirection = document.getElementById("flexdirID");

flexDirection.addEventListener("change", flexDirChange);

function flexDirChange(event) {
  const flexDirSelect = event.target.id;
  console.log(flexDirSelect);
  boxes1.classList.remove("flex-direction_column", "flex-direction_row");
  boxes1.classList.add("flex-direction_" + flexDirSelect);
  console.log(boxes1.classList);
}

const justifyContent = document.getElementById("jusContID");
justifyContent.addEventListener("change", jusContChange);

function jusContChange(event) {
  const justContSelect = event.target.id;

  boxes1.classList.remove(
    "justify_content_baseline",
    "justify_content_center",
    "justify_content_end",
    "justify_content_flexend",
    "justify_content_spacearound",
    "justify_content_spacebetween"
  );

  boxes1.classList.add("justify_content_" + event.target.id);
  console.log(boxes1.classList);
}
