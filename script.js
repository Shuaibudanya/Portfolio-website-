(function () {
  // Mobile nav toggle
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  // One-time scroll reveal + skill bar fill
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      var bar = en.target.querySelector('.bar i');
      if (bar) bar.style.width = bar.dataset.w + '%';
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Active nav link on scroll
  var links = document.querySelectorAll('#menu a[href^="#"]:not(.btn)');
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  function setActive() {
    var y = window.scrollY + 120, cur = 0;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('active', i === cur); });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  // Contact form validation (no backend)
  var form = document.getElementById('form');
  var status = document.getElementById('status');
  function fail(field, text) {
    field.classList.add('err');
    var m = document.createElement('small');
    m.className = 'msg';
    m.textContent = text;
    field.parentNode.appendChild(m);
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelectorAll('.msg').forEach(function (n) { n.remove(); });
    form.querySelectorAll('.err').forEach(function (n) { n.classList.remove('err'); });
    status.textContent = '';
    var f = form.elements, ok = true;
    if (f.name.value.trim().length < 2) { fail(f.name, 'Enter your name.'); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim())) { fail(f.email, 'Enter a valid email address.'); ok = false; }
    if (!/^[+\d][\d\s-]{7,}$/.test(f.phone.value.trim())) { fail(f.phone, 'Enter a valid phone or WhatsApp number.'); ok = false; }
    if (!f.type.value) { fail(f.type, 'Choose a project type.'); ok = false; }
    if (f.msg.value.trim().length < 10) { fail(f.msg, 'Tell me a little about your project (10+ characters).'); ok = false; }
    if (!ok) { status.textContent = 'Fix the highlighted fields and try again.'; return; }
    status.textContent = 'Thanks, ' + f.name.value.trim() + '. This form has no backend yet, so please also message me on WhatsApp (08084557354) or email shaibudanya1234@gmail.com so I see your request.';
    form.reset();
  });

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
