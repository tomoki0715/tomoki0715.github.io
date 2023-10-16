// scrollAnimation.js

// スクロールイベントの監視
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.animate-on-scroll');

    // 画面の上部からのスクロール量を取得
    const scrollPosition = window.scrollY;

    // 各セクションに対して処理を実行
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // もしセクションが画面内に表示されている場合にアニメーションを実行
        if (scrollPosition >= sectionTop - sectionHeight / 3) {
            // ここでアニメーションの実装を行う
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});




