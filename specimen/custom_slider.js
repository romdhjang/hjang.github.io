document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("main-input");
  const leftPreview = document.getElementById("left-preview");
  const rightPreview = document.getElementById("right-preview");

  const slider = document.getElementById("main-slider");
  let isDragging = false;
  let currentValue = 120; // 초기 폰트 사이즈

  // 스크롤바 배경 설정
  slider.style.position = "relative";
  slider.style.background = "#000";

  // 핸들 생성
  const handle = document.createElement("div");
  handle.classList.add("handle");
  slider.appendChild(handle);

  // 초기 폰트 사이즈 설정
  leftPreview.style.fontSize = `${currentValue}px`;
  rightPreview.style.fontSize = `${currentValue}px`;

  // 입력된 텍스트 두 박스에 적용
  inputBox.addEventListener("input", function () {
    leftPreview.textContent = inputBox.value || "SQUARE";
    rightPreview.textContent = inputBox.value || "ROUND";
  });

  // 스크롤바 드래그 이벤트
  handle.addEventListener("mousedown", () => {
    isDragging = true;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const rect = slider.getBoundingClientRect();
      let x = e.clientX - rect.left;

      // 핸들 이동 범위 제한
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      // 핸들 위치 업데이트
      handle.style.left = `${x}px`;

      // 폰트 사이즈 계산 및 적용 (10 ~ 200px)
      currentValue = Math.round((x / rect.width) * 190 + 10);
      leftPreview.style.fontSize = `${currentValue}px`;
      rightPreview.style.fontSize = `${currentValue}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});
