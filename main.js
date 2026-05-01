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
    var bg = profile.background;
    var items = bg.highlights.map(function (h) {
      return [
        '<li class="highlight-item">',
        '  <span class="highlight-bullet" aria-hidden="true"></span>',
        '  <span>' + esc(h) + '</span>',
        '</li>',
      ].join('');
    }).join('\n');
    return [
      '<section class="section" id="background">',
      '  <div class="container">',
      '    <div class="section-label">Experience</div>',
      '    <h2 class="section-title">' + esc(bg.title) + '</h2>',
      '    <p class="section-intro">' + esc(bg.intro) + '</p>',
      '    <ul class="highlights-list">' + items + '</ul>',
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
      var githubLink = proj.github
        ? '<a href="' + esc(proj.github) + '" class="project-link-secondary" target="_blank" rel="noopener">GitHub ↗</a>'
        : '';
      return [
        '<article class="project-card">',
        '  <div class="project-card-top">',
        '    <span class="project-icon" aria-hidden="true">' + esc(proj.icon) + '</span>',
        '    <h3 class="project-title">' + esc(proj.title) + '</h3>',
        '  </div>',
        '  <p class="project-description">' + esc(proj.description) + '</p>',
        '  <div class="project-tags">' + tags + '</div>',
        '  <div class="project-actions">',
        '    <a href="' + esc(proj.caseStudy) + '" class="project-link">View case study →</a>',
        '    ' + githubLink,
        '  </div>',
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
