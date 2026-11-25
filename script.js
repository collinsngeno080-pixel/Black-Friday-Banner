/* FileLabelPro pricing page scripts:
   1. Black Friday countdown (removes the bar when time runs out)
   2. Monthly / Annual price toggle */
(function () {
  function pad(n) { return String(n).padStart(2, '0'); }

  function startCountdown(banner) {
    var end = Date.parse(banner.getAttribute('data-ends'));
    if (isNaN(end)) return;
    var timer;
    function tick() {
      var s = Math.floor((end - Date.now()) / 1000);
      if (s <= 0) { banner.remove(); clearInterval(timer); return; }
      var d = Math.floor(s / 86400); s %= 86400;
      var h = Math.floor(s / 3600); s %= 3600;
      var m = Math.floor(s / 60); s %= 60;
      var parts = { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
      banner.querySelectorAll('[data-unit]').forEach(function (el) {
        el.textContent = parts[el.getAttribute('data-unit')];
      });
      banner.querySelectorAll('[data-compact]').forEach(function (el) {
        el.textContent = parts.d + 'd ' + parts.h + 'h ' + parts.m + 'm ' + parts.s + 's';
      });
    }
    timer = setInterval(tick, 1000);
    tick();
  }

  function initBillingToggle() {
    var buttons = document.querySelectorAll('[data-billing]');
    var amount = document.querySelector('[data-plan-amount]');
    var period = document.querySelector('[data-plan-period]');
    if (!buttons.length || !amount || !period) return;
    var prices = {
      monthly: { amount: '$9.99', period: '/mo' },
      annual: { amount: '$95.90', period: '/yr' }
    };
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-billing');
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
        amount.textContent = prices[key].amount;
        period.textContent = prices[key].period;
      });
    });
  }

  function init() {
    document.querySelectorAll('.flp-bf[data-ends]').forEach(startCountdown);
    initBillingToggle();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
