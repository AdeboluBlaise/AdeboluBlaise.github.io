/* Temitope Adebolu — site behaviour
   1. Light and dark theme
   2. Work tabs
   3. Project figures: simple charts, three drawn from the project data
   4. Dashboard viewer
   5. Header state, active section, copy email, year
   No dependencies. */

(() => {
  'use strict';

  /* Data from the projects: monthly food prices, hospital beds and staff,
     and rule of law against corruption perception. */
  const DATA = {"food":{"series":[{"name":"Millet","v":[1.0,1.027,1.022,1.129,1.201,null,1.259,1.304,1.29,0.986,1.097,1.08,1.096,1.101,1.227,1.278,1.273,1.32,1.412,1.348,1.198,1.04,1.131,1.137,1.122,1.107,1.105,1.098,0.977,1.093,1.024,0.965,0.913,0.843,0.484,0.611,0.71,0.706,0.713,0.741,0.807,0.874,0.745,0.744,0.778,0.761,0.611,0.654,0.712,0.696,0.749,0.765,0.729,0.759,0.827,1.084,1.135,1.125,0.879,1.032,0.963,1.05,1.228,null,null,null,null,null,1.216,null,null,null,0.702,null,null,null,null,null,null,null,null,null,null,null,0.506,0.573,0.584,0.597,0.511,0.479,null,0.496,0.48,0.498,null,null,0.549,0.562,0.636,0.686,0.746,0.827,0.993,1.067,1.053,0.925,0.878,0.919,1.016,1.075,1.119,1.153,1.167,1.253,1.392,1.376,1.289,1.157,1.194,1.199,1.248,1.248,1.284,1.324,1.274,1.283,1.308,null,null,null,null,null]},{"name":"Imported rice","v":[null,null,null,null,1.0,0.996,0.99,1.018,1.049,1.047,1.005,1.048,1.024,1.069,1.137,1.178,1.141,1.149,1.192,1.198,1.192,1.244,1.149,1.088,1.031,1.012,1.048,1.062,null,null,1.144,1.118,1.121,1.127,1.092,1.077,1.051,1.037,1.023,1.036,1.049,1.066,1.104,1.11,1.123,1.188,1.181,1.172,1.202,1.298,1.369,1.452,1.6,1.747,1.772,1.957,2.065,2.097,2.089,2.075,2.133,2.071,2.191,1.981,2.017,2.142,2.089,2.043,1.99,1.888,1.808,1.82,1.771,1.841,1.87,1.852,1.86,1.812,1.855,1.85,1.863,1.857,1.863,1.883,1.95,1.825,1.819,1.82,null,null,1.853,1.842,2.027,2.227,2.288,2.314,2.321,2.255,2.541,2.573,2.651,2.705,2.814,2.95,3.11,3.227,3.198,3.17,3.16,3.226,3.371,3.301,3.316,3.332,3.316,3.308,3.317,3.323,3.364,3.438,3.53,3.53,3.535,3.611,3.614,3.669,3.625,null,null,null,null,null]},{"name":"Local rice","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.003,0.987,0.97,0.957,0.963,0.809,0.942,0.932,0.961,0.972,0.996,0.987,0.956,0.996,0.944,0.917,0.932,0.951,1.009,1.039,1.189,1.408,1.567,1.624,1.753,1.683,1.57,1.629,1.707,1.857,1.766,1.756,1.786,1.887,1.825,1.704,1.709,1.667,1.59,1.517,1.452,null,1.595,1.62,1.665,1.716,null,1.672,1.615,1.674,1.581,1.542,1.573,1.501,1.549,1.637,1.63,null,null,1.519,1.542,1.608,1.706,1.678,1.598,1.617,1.596,1.729,1.84,1.957,1.993,2.185,2.346,2.42,2.155,2.046,2.042,2.141,2.226,2.382,2.41,2.455,2.499,2.525,2.487,2.397,2.285,2.302,2.373,2.52,2.52,2.546,2.681,2.655,2.707,2.747,null,null,null,null,null]},{"name":"Red beans","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,0.95,1.05,1.113,1.208,1.131,1.133,1.135,1.159,1.301,1.367,1.298,1.417,1.511,2.951,1.577,1.446,1.496,1.451,1.528,1.467,1.702,1.747,1.741,1.626,1.382,1.506,1.262,1.36,1.467,1.663,1.266,1.105,1.076,1.076,1.027,0.962,0.844,0.795,0.765,0.758,0.755,0.744,0.73,0.608,0.675,0.729,0.789,0.865,0.848,0.886,0.916,0.758,1.004,1.054,1.103,1.162,1.956,2.158,2.201,2.395,2.787,2.96,3.065,2.811,2.582,2.367,2.595,2.589,2.543,2.598,2.601,null,null,null,null,null,null,null]},{"name":"White beans","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.085,1.113,1.141,1.444,1.115,1.188,1.26,1.086,1.395,1.327,1.301,1.254,1.396,2.38,1.368,1.16,1.105,1.103,1.268,1.64,1.61,1.367,1.502,1.368,1.153,1.258,1.192,1.225,1.312,1.366,1.225,1.103,1.153,1.153,1.029,0.971,0.854,0.797,0.755,0.744,0.731,0.711,0.694,0.613,0.692,0.743,0.773,0.795,0.813,0.853,0.89,0.744,0.963,1.017,1.07,1.134,1.977,2.06,2.063,2.261,2.639,2.736,2.749,2.636,2.405,2.226,2.477,2.418,2.491,2.547,2.585,null,null,null,null,null,null,null]},{"name":"Eggs","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,0.871,0.848,0.944,1.045,1.101,1.04,1.057,1.117,1.074,0.993,0.732,1.048,1.054,1.046,1.073,1.108,1.116,1.133,1.109,1.05,1.083,1.056,1.129,1.113,1.075,1.088,1.043,1.047,1.095,1.115,1.13,1.086,1.059,1.09,1.091,1.077,1.07,1.027,1.062,1.072,1.075,1.083,1.083,1.047,1.068,1.079,1.072,1.075,1.093,1.093,1.062,1.22,1.234,1.255,1.252,1.41,1.383,0.957,1.509,1.553,1.551,1.549,1.602,1.722,1.811,1.802,1.849,1.9,1.551,1.922,null,null,null,null,null,null,null]},{"name":"Garri","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.02,0.976,0.952,0.939,0.943,1.108,1.066,1.033,1.053,1.07,0.886,0.878,1.083,1.074,1.059,1.049,1.053,1.04,1.093,1.131,1.179,1.304,1.362,1.412,1.604,1.653,1.636,1.625,1.692,1.878,2.143,2.368,2.495,2.65,2.718,2.693,2.489,2.165,1.934,1.741,1.695,1.294,1.799,1.75,1.704,1.708,1.367,1.693,1.659,1.555,1.546,1.476,1.448,1.253,1.407,1.41,1.367,null,null,1.116,1.265,1.253,1.273,1.297,1.267,1.265,1.284,1.449,1.555,1.719,1.769,1.882,2.052,2.188,2.157,2.104,2.105,2.204,2.368,2.756,2.863,3.077,3.146,3.181,3.172,2.963,2.802,2.699,2.769,2.771,2.771,2.764,2.743,2.805,2.862,2.874,null,null,null,null,null]},{"name":"Vegetable oil","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,0.955,1.004,1.247,1.264,1.376,1.528,1.483,1.696,1.924,1.959,1.888,1.236,1.536,1.92,1.626,1.946,1.607,1.611,1.534,1.548,1.524,1.54,1.716,1.486,1.542,1.226,1.181,1.186,1.161,1.164,1.144,1.182,1.197,1.191,1.087,1.085,1.074,1.086,1.122,1.136,1.184,1.21,1.203,1.342,1.609,1.575,1.417,1.444,1.495,1.48,1.472,1.136,1.568,1.621,1.668,1.713,1.85,2.072,1.907,1.984,2.096,2.298,2.382,2.363,2.338,2.398,2.437,2.5,2.567,2.901,3.68,null,null,null,null,null,null,null]},{"name":"Beef","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.091,1.006,1.019,1.128,1.197,1.34,1.191,1.291,1.301,1.148,1.171,0.916,1.154,1.114,1.14,1.108,1.153,1.127,1.164,1.172,1.165,1.148,1.187,1.146,1.118,1.1,1.108,1.144,1.128,1.14,1.159,1.144,1.145,1.149,1.133,1.134,1.136,1.124,1.125,1.129,1.13,1.133,1.137,1.148,1.204,1.226,1.167,1.231,1.188,1.181,1.175,1.129,1.226,1.211,1.219,1.225,1.29,1.534,1.4,1.361,1.467,1.511,1.502,1.585,1.617,1.683,1.645,1.723,1.96,1.525,1.766,null,null,null,null,null,null,null]}]},"hosp":{"beds":[21,37,57,72,72,80,80,100,117,119,129,130,149,175,192,198,200,220,283,323,345,374,401,409,413,482,500,541,565,601,615,650,691,769,991],"staff":[30,77,101,458,810,168,183,265,234,255,444,657,321,341,231,259,862,301,563,531,531,695,455,521,854,1002,818,1254,1911,1296,859,964,1542,2630,2415],"rho":0.85},"gov":{"law":[0.311,0.52,0.499,0.512,0.428,0.426,0.465,0.605,0.407,0.878,0.807,0.663,0.781,0.477,0.485,0.494,0.553,0.462,0.413,0.592,0.607,0.683,0.489,0.447,0.571,0.523,0.489,0.387,0.899,0.417,0.55,0.786,0.525,0.659,0.62,0.554,0.84,0.619,0.636,0.518,0.476,0.808,0.681,0.428,0.529,0.591,0.544,0.5,0.651,0.531,0.792,0.348,0.785,0.516,0.387,0.443,0.461,0.695,0.812,0.558,0.793,0.492,0.492,0.393,0.641,0.627,0.7,0.377,0.5,0.486,0.584,0.608,0.496,0.346,0.47,0.64,0.664,0.455,0.534,0.862,0.579,0.425,0.491,0.899,0.728,0.443,0.478,0.466,0.441,0.412,0.831,0.721,0.488,0.379,0.444,0.45,0.487,0.735,0.714,0.393,0.729,0.541,0.394,0.618,0.401,0.352,0.52,0.476,0.392,0.503,0.8,0.318,0.51,0.418,0.489,0.683,0.677,0.419,0.828,0.575,0.609,0.438,0.365,0.524,0.752,0.441,0.833,0.714,0.608,0.397,0.504,0.353,0.443,0.491],"cpi":[19,43,40,36,29,29,39,55,39,88,74,52,85,34,36,38,43,29,25,53,49,57,39,36,44,38,36,28,85,25,49,73,37,56,53,43,80,56,59,36,30,74,54,31,44,55,35,38,65,39,73,33,78,35,30,25,33,67,74,38,73,35,33,23,56,45,62,20,39,42,44,47,35,19,45,69,67,30,41,85,55,20,39,88,54,34,30,27,31,24,88,71,37,20,30,24,39,62,59,23,61,42,27,49,26,27,33,41,28,37,74,23,32,21,39,53,58,38,81,48,54,26,28,35,61,29,82,73,64,26,42,16,33,28]}};

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const still = () => motion.matches;
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const clamp01 = t => Math.max(0, Math.min(1, t));

  function tween(dur, fn, done) {
    if (still() || dur <= 0) { fn(1); if (done) done(); return () => {}; }
    let id = 0;
    const t0 = performance.now();
    const step = now => {
      const t = clamp01((now - t0) / dur);
      fn(t);
      if (t < 1) id = requestAnimationFrame(step); else if (done) done();
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }
  function wait(ms, fn) {
    if (still()) { fn(); return () => {}; }
    const id = setTimeout(fn, ms);
    return () => clearTimeout(id);
  }
  function queue() {
    let list = [];
    return { add(c) { list.push(c); return c; }, stop() { list.forEach(c => c()); list = []; } };
  }

  /* ======================================================================
     1. Theme
     ====================================================================== */

  function theme() {
    const root = document.documentElement;
    const btn = document.querySelector('[data-theme-toggle]');
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    const current = () => root.getAttribute('data-theme') || (system.matches ? 'dark' : 'light');
    const label = () => {
      if (btn) btn.setAttribute('aria-label', `Switch to ${current() === 'dark' ? 'light' : 'dark'} theme`);
    };
    label();
    system.addEventListener('change', label);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
      label();
    });
  }

  /* ======================================================================
     2. Tabs
     ====================================================================== */

  function tabs() {
    const list = document.querySelector('[role="tablist"]');
    if (!list) return;
    const all = [...list.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      all.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        const was = panel.classList.contains('is-active');
        panel.classList.toggle('is-active', on);
        if (on && !was) {
          panel.classList.remove('is-entering');
          void panel.offsetWidth;
          panel.classList.add('is-entering');
          const swipe = panel.querySelector('.swipe');
          if (swipe) swipe.scrollLeft = 0;
        }
      });
      if (focus) tab.focus();
    };
    all.forEach((t, i) => {
      t.addEventListener('click', () => select(t, false));
      t.addEventListener('keydown', e => {
        let j = null;
        if (e.key === 'ArrowRight') j = (i + 1) % all.length;
        if (e.key === 'ArrowLeft') j = (i - 1 + all.length) % all.length;
        if (e.key === 'Home') j = 0;
        if (e.key === 'End') j = all.length - 1;
        if (j !== null) { e.preventDefault(); select(all[j], true); }
      });
    });
  }

  /* ======================================================================
     3. Project figures
     Each figure is drawn in its finished state, can be reset to its first
     frame, and plays when it scrolls into view or the card is hovered.
     ====================================================================== */

  const NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const P = { x0: 28, x1: 304, y0: 18, y1: 170 };
  const sx = u => P.x0 + 8 + u * (P.x1 - P.x0 - 16);
  const sy = v => P.y1 - 8 - v * (P.y1 - P.y0 - 16);
  function axes(svg, xLabel, yLabel) {
    el('path', { class: 'f-axis', d: `M${P.x0} ${P.y0} V${P.y1} H${P.x1}` }, svg);
    const x = el('text', { class: 'f-text', x: P.x1, y: P.y1 + 18, 'text-anchor': 'end' }, svg);
    x.textContent = xLabel;
    const y = el('text', { class: 'f-text', x: P.x0 - 10, y: P.y0, 'text-anchor': 'end', transform: `rotate(-90 ${P.x0 - 10} ${P.y0})` }, svg);
    y.textContent = yLabel;
  }
  function fitLine(pts) {
    const n = pts.length;
    const mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n;
    let sxy = 0, sxx = 0;
    pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
    const b = sxy / sxx;
    return { a: my - b * mx, b };
  }

  /* Food prices: nine real series, each indexed to its first month */
  function figFood(svg) {
    const { series } = DATA.food;
    let vmax = 0;
    series.forEach(s => s.v.forEach(v => { if (v != null && v > vmax) vmax = v; }));
    const vmin = 0.5, n = series[0].v.length;
    axes(svg, '2012 to 2022', 'price');
    const ordered = [...series].sort((a, b) => (a.name === 'Imported rice') - (b.name === 'Imported rice'));
    let label = null;
    const paths = ordered.map(s => {
      let d = '', pen = false, lastX = 0, lastY = 0;
      s.v.forEach((v, m) => {
        if (v == null) { pen = false; return; }
        const x = sx(m / (n - 1)), y = sy((v - vmin) / (vmax - vmin));
        d += (pen ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
        pen = true; lastX = x; lastY = y;
      });
      const hi = s.name === 'Imported rice';
      const p = el('path', { d, class: hi ? 'f-hi' : 'f-lo' }, svg);
      if (hi) {
        label = el('text', { class: 'f-strong', x: (lastX - 2).toFixed(1), y: (lastY - 10).toFixed(1), 'text-anchor': 'end' }, svg);
        label.textContent = 'Imported rice';
      }
      return p;
    });
    const lens = paths.map(p => p.getTotalLength());
    const q = queue();
    const reset = () => {
      q.stop();
      paths.forEach((p, i) => { p.style.strokeDasharray = lens[i]; p.style.strokeDashoffset = lens[i]; });
      if (label) label.style.opacity = 0;
    };
    return {
      reset,
      play() {
        reset();
        paths.forEach((p, i) => q.add(wait(i * 60, () => q.add(tween(1300, t => {
          p.style.strokeDashoffset = lens[i] * (1 - easeInOut(t));
          if (label && i === paths.length - 1) label.style.opacity = clamp01((t - 0.75) / 0.25);
        })))));
      }
    };
  }

  /* Fraud: about 6 in every 100 claims */
  function figFraud(svg) {
    const cols = 10, rows = 10, size = 12.5, gap = 3.2;
    const w = cols * size + (cols - 1) * gap;
    const x0 = 34, y0 = (200 - (rows * size + (rows - 1) * gap)) / 2;
    const fraud = [13, 37, 42, 58, 71, 86];
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        cells.push(el('rect', { class: 'f-cell' + (fraud.includes(i) ? ' on' : ''), x: (x0 + c * (size + gap)).toFixed(1), y: (y0 + r * (size + gap)).toFixed(1), width: size, height: size }, svg));
      }
    }
    const tx = x0 + w + 24;
    const big = el('text', { class: 'f-strong', x: tx, y: 96, 'font-size': 30 }, svg);
    big.textContent = '6 in 100';
    const small = el('text', { class: 'f-text', x: tx, y: 118 }, svg);
    small.textContent = 'claims were fraudulent';
    const q = queue();
    const reset = () => {
      q.stop();
      cells.forEach(c => { c.style.opacity = 0; c.classList.remove('on'); });
      big.style.opacity = 0; small.style.opacity = 0;
    };
    return {
      reset,
      play() {
        reset();
        cells.forEach((c, i) => q.add(wait(i * 6, () => { c.style.opacity = 1; })));
        q.add(wait(100 * 6 + 150, () => {
          fraud.forEach((i, k) => q.add(wait(k * 90, () => cells[i].classList.add('on'))));
          q.add(tween(500, t => { big.style.opacity = t; small.style.opacity = t; }));
        }));
      }
    };
  }

  /* Scatter with a trend line, used for hospitals and governance */
  function figScatter(svg, pts, xLabel, yLabel, r) {
    axes(svg, xLabel, yLabel);
    const fit = fitLine(pts);
    const xs = [Math.min(...pts.map(p => p[0])), Math.max(...pts.map(p => p[0]))];
    const line = el('line', {
      class: 'f-hi', 'stroke-width': 1.5,
      x1: sx(xs[0]).toFixed(1), y1: sy(fit.a + fit.b * xs[0]).toFixed(1),
      x2: sx(xs[1]).toFixed(1), y2: sy(fit.a + fit.b * xs[1]).toFixed(1)
    }, svg);
    const len = Math.hypot(sx(xs[1]) - sx(xs[0]), sy(fit.a + fit.b * xs[1]) - sy(fit.a + fit.b * xs[0]));
    const order = pts.map((p, i) => i).sort((i, j) => pts[i][0] - pts[j][0]);
    const dots = pts.map(([x, y]) => el('circle', { class: 'f-dot', cx: sx(x).toFixed(1), cy: sy(y).toFixed(1), r, 'fill-opacity': 0.8 }, svg));
    const step = Math.max(4, Math.round(700 / pts.length));
    const q = queue();
    const reset = () => {
      q.stop();
      dots.forEach(d => { d.style.opacity = 0; });
      line.style.strokeDasharray = len; line.style.strokeDashoffset = len;
    };
    return {
      reset,
      play() {
        reset();
        order.forEach((i, k) => q.add(wait(k * step, () => { dots[i].style.opacity = 1; })));
        q.add(wait(order.length * step + 100, () => q.add(tween(800, t => { line.style.strokeDashoffset = len * (1 - easeInOut(t)); }))));
      }
    };
  }
  function figHospital(svg) {
    const { beds, staff } = DATA.hosp;
    const mb = Math.max(...beds), ms = Math.max(...staff);
    return figScatter(svg, beds.map((b, i) => [b / mb, staff[i] / ms]), 'beds', 'staff', 3);
  }
  function figGovernance(svg) {
    const { law, cpi } = DATA.gov;
    return figScatter(svg, law.map((l, i) => [(l - 0.25) / 0.7, (cpi[i] - 10) / 85]), 'rule of law', 'corruption perception', 2.2);
  }

  /* Model accuracy: three bars */
  function figModels(svg) {
    const rows = [['Neural network', 96.5], ['Decision tree', 83.3], ['k-nearest neighbours', 62.3]];
    const x0 = 128, x1 = 262, y0 = 50, h = 24, gap = 22;
    const bars = rows.map(([name, acc], i) => {
      const y = y0 + i * (h + gap);
      const lab = el('text', { class: 'f-text', x: x0 - 10, y: y + h / 2 + 4, 'text-anchor': 'end' }, svg);
      lab.textContent = name;
      const w = (x1 - x0) * acc / 100;
      const bar = el('rect', { class: 'f-bar' + (i === 0 ? ' best' : ''), x: x0, y, height: h, width: w.toFixed(1) }, svg);
      const val = el('text', { class: i === 0 ? 'f-strong' : 'f-text', x: (x0 + w + 6).toFixed(1), y: y + h / 2 + 4 }, svg);
      val.textContent = acc.toFixed(1).replace('.0', '') + '%';
      return { bar, val, w };
    });
    el('line', { class: 'f-axis', x1: x0, x2: x0, y1: y0 - 10, y2: y0 + 3 * h + 2 * gap + 10 }, svg);
    const q = queue();
    const reset = () => {
      q.stop();
      bars.forEach(b => { b.bar.setAttribute('width', 0); b.val.style.opacity = 0; });
    };
    return {
      reset,
      play() {
        reset();
        bars.forEach((b, i) => q.add(wait(i * 140, () => q.add(tween(900, t => {
          b.bar.setAttribute('width', (b.w * easeOut(t)).toFixed(1));
          b.val.style.opacity = clamp01((t - 0.6) / 0.4);
        })))));
      }
    };
  }

  const FIGS = { food: figFood, fraud: figFraud, hospital: figHospital, governance: figGovernance, models: figModels };

  function figures() {
    const watch = !still() && 'IntersectionObserver' in window;
    const io = watch ? new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && en.target._fig) { en.target._fig.play(); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 }) : null;

    document.querySelectorAll('svg[data-fig]').forEach(svg => {
      const make = FIGS[svg.dataset.fig];
      if (!make) return;
      let fig;
      try { fig = make(svg); } catch (err) { return; }
      svg._fig = fig;
      if (io) { fig.reset(); io.observe(svg); }
      const card = svg.closest('.card');
      if (!card) return;
      card.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') fig.play(); });
      svg.closest('.card-fig').addEventListener('click', () => fig.play());
    });
  }

  /* ======================================================================
     4. Dashboard viewer
     ====================================================================== */

  function lightbox() {
    const dlg = document.getElementById('lightbox');
    const items = [...document.querySelectorAll('a[data-lightbox]')];
    if (!dlg || !items.length || typeof dlg.showModal !== 'function') return;
    const img = dlg.querySelector('.lb-media img');
    const media = dlg.querySelector('.lb-media');
    const title = dlg.querySelector('#lb-title');
    const desc = dlg.querySelector('[data-lb-desc]');
    const src = dlg.querySelector('[data-lb-src]');
    const extra = dlg.querySelector('[data-lb-extra]');
    let at = 0, opener = null;

    function show(i) {
      at = (i + items.length) % items.length;
      const a = items[at];
      const thumb = a.querySelector('img');
      img.src = a.getAttribute('href');
      img.width = Number(a.dataset.w);
      img.height = Number(a.dataset.h);
      img.alt = thumb ? thumb.alt : '';
      title.textContent = a.querySelector('h3').textContent;
      desc.textContent = a.dataset.desc || '';
      src.href = a.dataset.src;
      src.textContent = 'Open the original on Google Drive';
      if (a.dataset.extra) {
        extra.hidden = false; extra.href = a.dataset.extra; extra.textContent = a.dataset.extraLabel || 'More';
      } else {
        extra.hidden = true;
      }
      media.scrollTop = 0;
    }
    function open(i, from) {
      opener = from;
      show(i);
      document.documentElement.style.overflow = 'hidden';
      dlg.showModal();
    }
    const plain = e => e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;

    items.forEach((a, i) => a.addEventListener('click', e => { if (plain(e)) return; e.preventDefault(); open(i, a); }));
    document.querySelectorAll('[data-open-dash]').forEach(a => a.addEventListener('click', e => {
      if (plain(e)) return;
      e.preventDefault();
      open(Number(a.dataset.openDash) || 0, a);
    }));
    dlg.querySelector('[data-lb-prev]').addEventListener('click', () => show(at - 1));
    dlg.querySelector('[data-lb-next]').addEventListener('click', () => show(at + 1));
    dlg.querySelector('[data-lb-close]').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { e.preventDefault(); show(at + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(at - 1); }
    });
    dlg.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
      if (opener) opener.focus({ preventScroll: true });
    });
  }

  /* ======================================================================
     5. Header state, active section, copy email, year
     ====================================================================== */

  function chrome() {
    const head = document.querySelector('.site-head');
    const onScroll = () => head.classList.toggle('is-scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const links = new Map([...document.querySelectorAll('.nav a')].map(a => [a.getAttribute('href').slice(1), a]));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          links.forEach(l => l.removeAttribute('aria-current'));
          const a = links.get(en.target.id);
          if (a) a.setAttribute('aria-current', 'true');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach((a, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
      const hero = document.getElementById('top');
      if (hero) io.observe(hero);
    }

    document.querySelectorAll('[data-copy]').forEach(btn => {
      const label = btn.textContent;
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
          btn.textContent = 'Copied';
        } catch (err) {
          const range = document.createRange();
          range.selectNodeContents(document.querySelector('.email'));
          const sel = window.getSelection();
          sel.removeAllRanges(); sel.addRange(range);
          btn.textContent = 'Selected, press Ctrl+C';
        }
        setTimeout(() => { btn.textContent = label; }, 2200);
      });
    });

    const y = document.querySelector('[data-year]');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function boot() {
    theme();
    tabs();
    chrome();
    figures();
    lightbox();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
