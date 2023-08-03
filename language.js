// 言語切り替え用の関数を定義
function toggleLanguage() {
    const htmlElement = document.querySelector('html');
    const portfolioTitle = document.getElementById('portfolio-title');
    const links = document.querySelectorAll('nav a');
    const aboutSection = document.getElementById('about');
    // 他のセクションも同様に変更してください

    // 現在の言語を取得
    const currentLanguage = htmlElement.lang;
    // 言語を切り替える
    if (currentLanguage === 'en') {
        htmlElement.lang = 'ja';
        portfolioTitle.textContent = '私のポートフォリオ';
        links.forEach(link => link.textContent = link.dataset.jp);
        aboutSection.querySelector('h2').textContent = aboutSection.querySelector('h2').dataset.jp;
        aboutSection.querySelector('p').textContent = aboutSection.querySelector('p').dataset.jp;
        // 他のセクションも同様に変更してください
    } else {
        htmlElement.lang = 'en';
        portfolioTitle.textContent = 'My Portfolio';
        links.forEach(link => link.textContent = link.dataset.en);
        aboutSection.querySelector('h2').textContent = aboutSection.querySelector('h2').dataset.en;
        aboutSection.querySelector('p').textContent = aboutSection.querySelector('p').dataset.en;
        // 他のセクションも同様に変更してください
    }
}

// ページロード時に言語切り替え用の関数を実行（デフォルトは英語バージョン）
toggleLanguage();
