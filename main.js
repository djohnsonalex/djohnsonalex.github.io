// ============================================================
//  Site renderer — reads from `profile` (defined in config.js)
//  DO NOT edit content here. Edit config.js instead.
// ============================================================

(function () {
  'use strict';

  // Safety check
  if (typeof profile === 'undefined') {
    document.getElementById('app').innerHTML =
      '<p style="padding:2rem;color:red;">Error: config.js failed to load.</p>';
    return;
  }

  // ---- HTML escape helper ----------------------------------------
  function esc(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ================================================================
  //  Section builders
  // ================================================================

  function buildNav() {
    var p = profile;
    return [
      '<nav class="nav" id="nav">',
      '  <div class="nav-inner">',
      '    <a href="#" class="nav-logo">' + esc(p.name) + '</a>',
      '    <div class="nav-links">',
      '      <a href="#background">Background</a>',
      '      <a href="#projects">Projects</a>',
      '      <a href="' + esc(p.links.linkedin) + '" class="nav-cta" target="_blank" rel="noopener">LinkedIn</a>',
      '      <a href="' + esc(p.links.github)   + '" target="_blank" rel="noopener">GitHub</a>',
      '    </div>',
      '    <button class="nav-hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">',
      '      <span></span><span></span><span></span>',
      '    </button>',
      '  </div>',
      '</nav>',
      '<div class="nav-mobile-menu" id="mobile-menu">',
      '  <a href="#background">Background</a>',
      '  <a href="#projects">Projects</a>',
      '  <a href="' + esc(p.links.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>',
      '  <a href="' + esc(p.links.github)   + '" target="_blank" rel="noopener">GitHub</a>',
      '</div>',
    ].join('\n');
  }

  function buildHero() {
    var p = profile;
    var statusHtml = p.status
      ? '<div class="hero-status"><span class="status-dot"></span>' + esc(p.status) + '</div>'
      : '';
    return [
      '<section class="hero" id="home">',
      '  <div class="container">',
      '    ' + statusHtml,
      '    <h1 class="hero-name">' + esc(p.name) + '</h1>',
      '    <p class="hero-headline">' + esc(p.headline) + '</p>',
      '    <p class="hero-tagline">' + esc(p.tagline) + '</p>',
      '    <div class="hero-actions">',
      '      <a href="' + esc(p.links.linkedin) + '" class="btn btn-primary" target="_blank" rel="noopener">LinkedIn ↗</a>',
      '      <a href="' + esc(p.links.github)   + '" class="btn btn-outline" target="_blank" rel="noopener">GitHub</a>',
      '    </div>',
      '  </div>',
      '</section>',
    ].join('\n');
  }

  function buildBackground() {
    var exp = profile.experience;
    var cards = exp.companies.map(function (co) {
      var tags = co.tags.map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('');
      var subtitle = co.subtitle
        ? '<span class="company-subtitle">' + esc(co.subtitle) + '</span>'
        : '';
      var link = co.url
        ? '<div class="project-actions"><a href="' + esc(co.url) + '" class="project-link-secondary" target="_blank" rel="noopener">' + esc(co.urlLabel) + ' ↗</a></div>'
        : '';
      return [
        '<article class="project-card">',
        '  <div>',
        '    <h3 class="project-title">' + esc(co.name) + '</h3>',
        '    ' + subtitle,
        '  </div>',
        '  <p class="project-description">' + esc(co.description) + '</p>',
        '  <div class="project-tags">' + tags + '</div>',
        '  ' + link,
        '</article>',
      ].join('\n');
    }).join('\n');
    return [
      '<section class="section" id="background">',
      '  <div class="container">',
      '    <div class="section-label">' + esc(exp.label) + '</div>',
      '    <h2 class="section-title">' + esc(exp.title) + '</h2>',
      '    <p class="section-intro">' + esc(exp.intro) + '</p>',
      '    <div class="projects-grid">' + cards + '</div>',
      '  </div>',
      '</section>',
    ].join('\n');
  }

  function buildProjects() {
    var ai = profile.aiSection;
    var cards = profile.projects.map(function (proj) {
      var tags = proj.tags.map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('');
      var urlLink    = proj.url    ? '<a href="' + esc(proj.url)    + '" class="project-link-secondary" target="_blank" rel="noopener">Visit site ↗</a>' : '';
      var githubLink = proj.github ? '<a href="' + esc(proj.github) + '" class="project-link-secondary" target="_blank" rel="noopener">GitHub ↗</a>'    : '';
      var hasActions = proj.url || proj.github;
      var actionsHtml = hasActions
        ? '  <div class="project-actions">\n    ' + [urlLink, githubLink].filter(Boolean).join('\n    ') + '\n  </div>'
        : '';
      return [
        '<article class="project-card">',
        '  <h3 class="project-title">' + esc(proj.title) + '</h3>',
        '  <p class="project-description">' + esc(proj.description) + '</p>',
        '  <div class="project-tags">' + tags + '</div>',
        actionsHtml,
        '</article>',
      ].join('\n');
    }).join('\n');
    return [
      '<section class="section" id="projects">',
      '  <div class="container">',
      '    <div class="section-label">' + esc(ai.label) + '</div>',
      '    <h2 class="section-title">' + esc(ai.title) + '</h2>',
      '    <p class="section-intro">' + esc(ai.intro) + '</p>',
      '    <div class="projects-grid">' + cards + '</div>',
      '  </div>',
      '</section>',
    ].join('\n');
  }

  function buildLookingFor() {
    var lf = profile.lookingFor;
    var roles = lf.roles.map(function (r) {
      return [
        '<div class="role-card">',
        '  <div class="role-title">' + esc(r.title) + '</div>',
        '  <p class="role-description">' + esc(r.description) + '</p>',
        '</div>',
      ].join('\n');
    }).join('\n');
    return [
      '<section class="section" id="looking-for">',
      '  <div class="container">',
      '    <div class="section-label">' + esc(lf.label) + '</div>',
      '    <h2 class="section-title">' + esc(lf.title) + '</h2>',
      '    <p class="section-intro">' + esc(lf.intro) + '</p>',
      '    <div class="roles-grid">' + roles + '</div>',
      '  </div>',
      '</section>',
    ].join('\n');
  }

  function buildFooter() {
    var p = profile;
    var year = new Date().getFullYear();
    return [
      '<footer class="footer">',
      '  <div class="footer-inner">',
      '    <div class="footer-links">',
      '      <a href="' + esc(p.links.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>',
      '      <span class="footer-dot" aria-hidden="true">·</span>',
      '      <a href="' + esc(p.links.github)   + '" target="_blank" rel="noopener">GitHub</a>',
      '    </div>',
      '    <p class="footer-copy">&copy; ' + year + ' ' + esc(p.name) + '</p>',
      '  </div>',
      '</footer>',
    ].join('\n');
  }

  // ================================================================
  //  Interactivity
  // ================================================================

  function initInteractivity() {
    // Mobile nav toggle
    var hamburger  = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        var isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
      });
      // Close menu when a link is tapped
      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Nav becomes more opaque after scrolling past the hero
    var nav = document.getElementById('nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 24);
      }, { passive: true });
    }
  }

  // ================================================================
  //  Render
  // ================================================================

  var app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = [
    buildNav(),
    '<main>',
      buildHero(),
      buildBackground(),
      buildProjects(),
    '</main>',
    buildFooter(),
  ].join('\n');

  initInteractivity();

})();
