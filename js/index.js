let currentLevel = 0;

function moveElevator(targetLevel) {
  const elevator = document.getElementById("elevator");
  const targetPosition = targetLevel * 300;
  const clampedPosition = Math.min(Math.max(targetPosition, -600), 900);

  elevator.style.transform = "translateY(" + clampedPosition + "px)";
  if (targetLevel < 0) {
    targetLevel = -1 * targetLevel;
  }
  currentLevel = targetLevel;

  // Add sound effect if bonus feature enabled
  playSoundEffect();

  // Disable/enable buttons based on current level
  //   updateButtonStatus();
}

function requestUp(level) {
  if (currentLevel === 0 && level === 0) {
    // Move to level 1
    moveElevator(-2);
  } else if (currentLevel === 0 && level === 1) {
    // Move to level 1
    moveElevator(-1);
  } else if (currentLevel === 2 && level === 1) {
    // Move to ground level
    moveElevator(-1);
  } else if (currentLevel === 1 && level === 0) {
    // Move to ground level
    moveElevator(-2);
  }
}

function requestDown(level) {
  if (currentLevel === 2 && level === 2) {
    // Move to level 1
    moveElevator(0);
  } else if (currentLevel === 0 && level === 1) {
    // Move to level 1
    moveElevator(-1);
  } else if (currentLevel === 1 && level === 2) {
    // Move to level 2
    moveElevator(0);
  } else if (currentLevel === 2 && level === 1) {
    // Move to ground level
    moveElevator(-1);
  }
}

function updateButtonStatus() {
  const upBtns = document.querySelectorAll(".level-btns button i.fa-arrow-up");
  const downBtns = document.querySelectorAll(
    ".level-btns button i.fa-arrow-down"
  );

  upBtns.forEach((icon, index) => {
    const btn = icon.parentNode;
    btn.disabled =
      currentLevel === index || (index === 2 && currentLevel !== 2);
  });

  downBtns.forEach((icon, index) => {
    const btn = icon.parentNode;
    btn.disabled =
      currentLevel === index || (index === 0 && currentLevel !== 0);
  });
}

function playSoundEffect() {
  // Add sound effect logic here (bonus feature)
}
