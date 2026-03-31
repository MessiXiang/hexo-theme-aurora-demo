/* ============================================================
   Aurora Theme - JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ---- Dark Mode ----
  var themeToggle = document.getElementById('themeToggle');
  var html = document.documentElement;

  function getPreferredTheme() {
    var stored = localStorage.getItem('aurora-theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('aurora-theme', theme);
  }

  // Initialize theme
  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('aurora-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ---- Header Scroll behavior (hide on scroll down, show on scroll up) ----
  var header = document.getElementById('auroraHeader');
  var lastScrollY = 0;
  var ticking = false;

  function updateHeader() {
    var currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // ---- Mobile Menu ----
  var mobileToggle = document.getElementById('mobileMenuToggle');
  var headerNav = document.getElementById('headerNav');

  if (mobileToggle && headerNav) {
    mobileToggle.addEventListener('click', function () {
      mobileToggle.classList.toggle('active');
      headerNav.classList.toggle('open');
    });

    // Close on link click
    headerNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileToggle.classList.remove('active');
        headerNav.classList.remove('open');
      });
    });
  }

  // ---- Back to Top ----
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Reading Progress Bar ----
  var progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // ---- Reveal on Scroll ----
  function setupReveal() {
    var elements = document.querySelectorAll('.aurora-reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 0.06 + 's';
      observer.observe(el);
    });
  }

  setupReveal();

  // ---- Hero Particles ----
  var particleContainer = document.getElementById('heroParticles');
  if (particleContainer) {
    for (var i = 0; i < 20; i++) {
      var particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = (Math.random() * 4 + 2) + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = (Math.random() * 15) + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particleContainer.appendChild(particle);
    }
  }

  // ---- Search ----
  var searchToggle = document.getElementById('searchToggle');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var searchData = null;

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('active');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    if (searchResults) {
      searchResults.innerHTML = '<div class="search-empty">Type to search...</div>';
    }
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (searchToggle) {
    searchToggle.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        closeSearch();
      }
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    // Cmd/Ctrl + K to open search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchOverlay && searchOverlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    // Escape to close
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // Search logic
  function loadSearchData() {
    if (searchData) return Promise.resolve(searchData);
    return fetch('/search.json')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        searchData = data;
        return data;
      })
      .catch(function () {
        return [];
      });
  }

  function performSearch(query) {
    if (!query || !searchResults) return;
    var q = query.toLowerCase().trim();
    if (q.length < 2) {
      searchResults.innerHTML = '<div class="search-empty">Type at least 2 characters...</div>';
      return;
    }

    loadSearchData().then(function (data) {
      var results = data.filter(function (item) {
        var title = (item.title || '').toLowerCase();
        var content = (item.content || '').toLowerCase();
        return title.indexOf(q) !== -1 || content.indexOf(q) !== -1;
      });

      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
        return;
      }

      var html = results.slice(0, 10).map(function (item) {
        var excerpt = getExcerpt(item.content || '', q);
        return '<a href="' + item.url + '" class="search-result-item">' +
          '<div class="result-title">' + highlightText(item.title, q) + '</div>' +
          '<div class="result-excerpt">' + highlightText(excerpt, q) + '</div>' +
          '</a>';
      }).join('');

      searchResults.innerHTML = html;
    });
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function getExcerpt(content, query) {
    var text = content.replace(/<[^>]*>/g, '');
    var idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return text.substring(0, 150) + '...';
    var start = Math.max(0, idx - 60);
    var end = Math.min(text.length, idx + query.length + 90);
    return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
  }

  function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    var escaped = escapeHtml(text);
    var regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
  }

  if (searchInput) {
    var searchTimeout;
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        performSearch(searchInput.value);
      }, 200);
    });
  }

  // ---- TOC Active Tracking ----
  var tocSidebar = document.getElementById('tocSidebar');
  if (tocSidebar) {
    var postContent = document.getElementById('postContent');
    if (postContent) {
      var headings = postContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
      var tocLinks = tocSidebar.querySelectorAll('a');

      if (headings.length && tocLinks.length) {
        var headingObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var id = entry.target.id;
              tocLinks.forEach(function (link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                  link.classList.add('active');
                }
              });
            }
          });
        }, {
          rootMargin: '-80px 0px -60% 0px',
          threshold: 0
        });

        headings.forEach(function (h) {
          if (h.id) headingObserver.observe(h);
        });
      }
    }
  }

  // ---- Card Glow Effect (mouse tracking) ----
  document.querySelectorAll('.bento-card:not(.bento-title-card)').forEach(function (card) {
    var glow = card.querySelector('.card-glow');
    if (!glow) return;

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      glow.style.background = 'radial-gradient(circle 250px at ' + x + 'px ' + y + 'px, rgba(37,99,235,0.08), transparent)';
    });

    card.addEventListener('mouseleave', function () {
      glow.style.background = '';
    });
  });

  // ---- Code Copy Button ----
  document.querySelectorAll('figure.highlight, .post-content pre').forEach(function (block) {
    var btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copy';
    btn.style.cssText = 'position:absolute;top:8px;right:8px;padding:3px 10px;border-radius:6px;border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-tertiary);font-size:0.72rem;font-weight:600;cursor:pointer;opacity:0;transition:opacity 0.2s ease;z-index:5;font-family:var(--font-sans);';

    block.style.position = 'relative';
    block.appendChild(btn);

    block.addEventListener('mouseenter', function () { btn.style.opacity = '1'; });
    block.addEventListener('mouseleave', function () { btn.style.opacity = '0'; });

    btn.addEventListener('click', function () {
      var code = block.querySelector('code');
      if (code) {
        navigator.clipboard.writeText(code.textContent).then(function () {
          btn.textContent = 'Copied!';
          setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
        });
      }
    });
  });

  // ---- Smooth anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 64;
        window.scrollTo({
          top: target.offsetTop - offset - 16,
          behavior: 'smooth'
        });
      }
    });
  });

})();
