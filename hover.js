// 모든 링크 요소 가져오기
const links = document.querySelectorAll('a');

// 마우스를 올렸을 때 검정색으로 변경
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'black';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'rgb(228, 226, 227)'; // 원래 색상으로 복구
    });
});
