(function () {
  // Project filter
  var pills = document.querySelectorAll('.pill');
  var cards = document.querySelectorAll('.proj');
  pills.forEach(function (p) {
    p.addEventListener('click', function () {
      pills.forEach(function (x) { x.classList.remove('active'); });
      p.classList.add('active');
      var f = p.dataset.filter;
      cards.forEach(function (c) { c.hidden = f !== 'all' && c.dataset.cat.split(' ').indexOf(f) < 0; });
    });
  });

  // Books block (data from assets/books-data.js)
  var host = document.getElementById('home-books');
  if (host && window.BOOKS) {
    host.innerHTML = window.BOOKS.map(function (b, i) {
      return '<a class="card reveal" style="--d:' + (i * .08) + 's" href="books/book.html?b=' + b.id + '">' +
        '<span class="hb-tag">Book ' + b.id + '</span><h3>' + b.title + '</h3>' +
        '<p>' + b.subtitle + '</p><span class="hb-meta">' + b.chapters.length + ' chapters</span></a>';
    }).join('');
    host.querySelectorAll('.reveal').forEach(function (el) { setTimeout(function () { el.classList.add('in'); }, 50); });
  }

  // Blog (data from posts.json via assets/posts-data.js, newest first)
  var ph = document.getElementById('home-posts');
  if (ph && window.POSTS) {
    var fmt = function (d) { return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); };
    ph.innerHTML = window.POSTS.map(function (p, i) {
      var inner = '<span class="date">' + fmt(p.date) + '</span><h3>' + p.title + '</h3><p>' + p.summary + '</p>' +
        (p.url ? '<span class="more">Read article <i class="fas fa-arrow-right"></i></span>' : '<span class="soon">Coming soon</span>');
      return p.url ? '<a class="card post" style="--d:' + (i * .08) + 's" href="' + p.url + '">' + inner + '</a>'
                   : '<div class="card post" style="--d:' + (i * .08) + 's">' + inner + '</div>';
    }).join('');
  }

  // Contact form: opens the visitor's mail client addressed to you (no backend needed)
  var form = document.getElementById('contact-form');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var body = d.get('message') + '\n\nFrom: ' + d.get('name') + ' <' + d.get('email') + '>';
    location.href = 'mailto:info.abhinav.here@gmail.com?subject=' + encodeURIComponent(d.get('subject')) + '&body=' + encodeURIComponent(body);
  });
})();
