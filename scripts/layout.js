(function () {
  const navItems = [
    { key: 'home', label: '首页', href: 'index.html' },
    { key: 'about', label: '学院概况', href: 'about.html' },
    { key: 'news', label: '新闻公告', href: 'news.html' },
    { key: 'programs', label: '专业建设', href: 'programs.html' },
    { key: 'faculty', label: '师资队伍', href: 'faculty.html' },
    { key: 'admission', label: '招生就业', href: 'admission.html' }
  ];

  function renderLayout(activeKey) {
    const headerHost = document.getElementById('site-header');
    const footerHost = document.getElementById('site-footer');

    if (headerHost) {
      const navHtml = navItems
        .map((item) => {
          const activeClass = item.key === activeKey ? 'is-active' : '';
          return `<a class="${activeClass}" href="${item.href}">${item.label}</a>`;
        })
        .join('');

      headerHost.innerHTML = `
        <header class="topbar">
          <div class="container topbar-inner">
            <a class="brand brand-link" href="index.html" aria-label="返回首页">
              <div class="logo">FU</div>
              <div>
                <p class="brand-cn">福州大学计算机与大数据学院</p>
                <p class="brand-en">College of Computer and Data Science</p>
              </div>
            </a>
            <div class="nav-wrap">
              <nav class="nav" aria-label="主导航">
                ${navHtml}
              </nav>
              <a class="nav-cta" href="admission.html">报考入口</a>
            </div>
          </div>
        </header>
      `;
    }

    if (footerHost) {
      const currentYear = new Date().getFullYear();
      footerHost.innerHTML = `
        <footer class="footer">
          <div class="container footer-inner">
            <p>地址：福建省福州市福州大学旗山校区</p>
            <p>电话：0591-XXXXXXX · 邮箱：cs@fzu.edu.cn</p>
            <p>© ${currentYear} 福州大学计算机与大数据学院</p>
          </div>
        </footer>
      `;
    }
  }

  window.renderLayout = renderLayout;
})();
