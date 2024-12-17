// "Toggle" 버튼 생성
const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle"; // 버튼 텍스트
toggleButton.style.position = "fixed";
toggleButton.style.top = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 20px";
toggleButton.style.fontSize = "1rem";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

// 이벤트 리스너: 버튼 클릭 시 클래스 토글
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('inverted-mode');
});
