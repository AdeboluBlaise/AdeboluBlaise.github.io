/* Temitope Adebolu — site behaviour
   1. Galton board in the hero
   2. Project figures (real project data where available)
   3. Experience timeline reveal
   4. Dashboard lightbox
   5. Header state, active section, copy email, year
   No dependencies. */

(() => {
  'use strict';

  /* Project data used by the figures (food prices, hospitals, governance). */
  const DATA = {"food":{"series":[{"name":"Millet","v":[1.0,1.027,1.022,1.129,1.201,null,1.259,1.304,1.29,0.986,1.097,1.08,1.096,1.101,1.227,1.278,1.273,1.32,1.412,1.348,1.198,1.04,1.131,1.137,1.122,1.107,1.105,1.098,0.977,1.093,1.024,0.965,0.913,0.843,0.484,0.611,0.71,0.706,0.713,0.741,0.807,0.874,0.745,0.744,0.778,0.761,0.611,0.654,0.712,0.696,0.749,0.765,0.729,0.759,0.827,1.084,1.135,1.125,0.879,1.032,0.963,1.05,1.228,null,null,null,null,null,1.216,null,null,null,0.702,null,null,null,null,null,null,null,null,null,null,null,0.506,0.573,0.584,0.597,0.511,0.479,null,0.496,0.48,0.498,null,null,0.549,0.562,0.636,0.686,0.746,0.827,0.993,1.067,1.053,0.925,0.878,0.919,1.016,1.075,1.119,1.153,1.167,1.253,1.392,1.376,1.289,1.157,1.194,1.199,1.248,1.248,1.284,1.324,1.274,1.283,1.308,null,null,null,null,null]},{"name":"Imported rice","v":[null,null,null,null,1.0,0.996,0.99,1.018,1.049,1.047,1.005,1.048,1.024,1.069,1.137,1.178,1.141,1.149,1.192,1.198,1.192,1.244,1.149,1.088,1.031,1.012,1.048,1.062,null,null,1.144,1.118,1.121,1.127,1.092,1.077,1.051,1.037,1.023,1.036,1.049,1.066,1.104,1.11,1.123,1.188,1.181,1.172,1.202,1.298,1.369,1.452,1.6,1.747,1.772,1.957,2.065,2.097,2.089,2.075,2.133,2.071,2.191,1.981,2.017,2.142,2.089,2.043,1.99,1.888,1.808,1.82,1.771,1.841,1.87,1.852,1.86,1.812,1.855,1.85,1.863,1.857,1.863,1.883,1.95,1.825,1.819,1.82,null,null,1.853,1.842,2.027,2.227,2.288,2.314,2.321,2.255,2.541,2.573,2.651,2.705,2.814,2.95,3.11,3.227,3.198,3.17,3.16,3.226,3.371,3.301,3.316,3.332,3.316,3.308,3.317,3.323,3.364,3.438,3.53,3.53,3.535,3.611,3.614,3.669,3.625,null,null,null,null,null]},{"name":"Local rice","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.003,0.987,0.97,0.957,0.963,0.809,0.942,0.932,0.961,0.972,0.996,0.987,0.956,0.996,0.944,0.917,0.932,0.951,1.009,1.039,1.189,1.408,1.567,1.624,1.753,1.683,1.57,1.629,1.707,1.857,1.766,1.756,1.786,1.887,1.825,1.704,1.709,1.667,1.59,1.517,1.452,null,1.595,1.62,1.665,1.716,null,1.672,1.615,1.674,1.581,1.542,1.573,1.501,1.549,1.637,1.63,null,null,1.519,1.542,1.608,1.706,1.678,1.598,1.617,1.596,1.729,1.84,1.957,1.993,2.185,2.346,2.42,2.155,2.046,2.042,2.141,2.226,2.382,2.41,2.455,2.499,2.525,2.487,2.397,2.285,2.302,2.373,2.52,2.52,2.546,2.681,2.655,2.707,2.747,null,null,null,null,null]},{"name":"Red beans","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,0.95,1.05,1.113,1.208,1.131,1.133,1.135,1.159,1.301,1.367,1.298,1.417,1.511,2.951,1.577,1.446,1.496,1.451,1.528,1.467,1.702,1.747,1.741,1.626,1.382,1.506,1.262,1.36,1.467,1.663,1.266,1.105,1.076,1.076,1.027,0.962,0.844,0.795,0.765,0.758,0.755,0.744,0.73,0.608,0.675,0.729,0.789,0.865,0.848,0.886,0.916,0.758,1.004,1.054,1.103,1.162,1.956,2.158,2.201,2.395,2.787,2.96,3.065,2.811,2.582,2.367,2.595,2.589,2.543,2.598,2.601,null,null,null,null,null,null,null]},{"name":"White beans","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.085,1.113,1.141,1.444,1.115,1.188,1.26,1.086,1.395,1.327,1.301,1.254,1.396,2.38,1.368,1.16,1.105,1.103,1.268,1.64,1.61,1.367,1.502,1.368,1.153,1.258,1.192,1.225,1.312,1.366,1.225,1.103,1.153,1.153,1.029,0.971,0.854,0.797,0.755,0.744,0.731,0.711,0.694,0.613,0.692,0.743,0.773,0.795,0.813,0.853,0.89,0.744,0.963,1.017,1.07,1.134,1.977,2.06,2.063,2.261,2.639,2.736,2.749,2.636,2.405,2.226,2.477,2.418,2.491,2.547,2.585,null,null,null,null,null,null,null]},{"name":"Eggs","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,0.871,0.848,0.944,1.045,1.101,1.04,1.057,1.117,1.074,0.993,0.732,1.048,1.054,1.046,1.073,1.108,1.116,1.133,1.109,1.05,1.083,1.056,1.129,1.113,1.075,1.088,1.043,1.047,1.095,1.115,1.13,1.086,1.059,1.09,1.091,1.077,1.07,1.027,1.062,1.072,1.075,1.083,1.083,1.047,1.068,1.079,1.072,1.075,1.093,1.093,1.062,1.22,1.234,1.255,1.252,1.41,1.383,0.957,1.509,1.553,1.551,1.549,1.602,1.722,1.811,1.802,1.849,1.9,1.551,1.922,null,null,null,null,null,null,null]},{"name":"Garri","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.02,0.976,0.952,0.939,0.943,1.108,1.066,1.033,1.053,1.07,0.886,0.878,1.083,1.074,1.059,1.049,1.053,1.04,1.093,1.131,1.179,1.304,1.362,1.412,1.604,1.653,1.636,1.625,1.692,1.878,2.143,2.368,2.495,2.65,2.718,2.693,2.489,2.165,1.934,1.741,1.695,1.294,1.799,1.75,1.704,1.708,1.367,1.693,1.659,1.555,1.546,1.476,1.448,1.253,1.407,1.41,1.367,null,null,1.116,1.265,1.253,1.273,1.297,1.267,1.265,1.284,1.449,1.555,1.719,1.769,1.882,2.052,2.188,2.157,2.104,2.105,2.204,2.368,2.756,2.863,3.077,3.146,3.181,3.172,2.963,2.802,2.699,2.769,2.771,2.771,2.764,2.743,2.805,2.862,2.874,null,null,null,null,null]},{"name":"Vegetable oil","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,0.955,1.004,1.247,1.264,1.376,1.528,1.483,1.696,1.924,1.959,1.888,1.236,1.536,1.92,1.626,1.946,1.607,1.611,1.534,1.548,1.524,1.54,1.716,1.486,1.542,1.226,1.181,1.186,1.161,1.164,1.144,1.182,1.197,1.191,1.087,1.085,1.074,1.086,1.122,1.136,1.184,1.21,1.203,1.342,1.609,1.575,1.417,1.444,1.495,1.48,1.472,1.136,1.568,1.621,1.668,1.713,1.85,2.072,1.907,1.984,2.096,2.298,2.382,2.363,2.338,2.398,2.437,2.5,2.567,2.901,3.68,null,null,null,null,null,null,null]},{"name":"Beef","v":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.0,1.091,1.006,1.019,1.128,1.197,1.34,1.191,1.291,1.301,1.148,1.171,0.916,1.154,1.114,1.14,1.108,1.153,1.127,1.164,1.172,1.165,1.148,1.187,1.146,1.118,1.1,1.108,1.144,1.128,1.14,1.159,1.144,1.145,1.149,1.133,1.134,1.136,1.124,1.125,1.129,1.13,1.133,1.137,1.148,1.204,1.226,1.167,1.231,1.188,1.181,1.175,1.129,1.226,1.211,1.219,1.225,1.29,1.534,1.4,1.361,1.467,1.511,1.502,1.585,1.617,1.683,1.645,1.723,1.96,1.525,1.766,null,null,null,null,null,null,null]}]},"hosp":{"beds":[21,37,57,72,72,80,80,100,117,119,129,130,149,175,192,198,200,220,283,323,345,374,401,409,413,482,500,541,565,601,615,650,691,769,991],"staff":[30,77,101,458,810,168,183,265,234,255,444,657,321,341,231,259,862,301,563,531,531,695,455,521,854,1002,818,1254,1911,1296,859,964,1542,2630,2415],"rho":0.85},"gov":{"law":[0.311,0.52,0.499,0.512,0.428,0.426,0.465,0.605,0.407,0.878,0.807,0.663,0.781,0.477,0.485,0.494,0.553,0.462,0.413,0.592,0.607,0.683,0.489,0.447,0.571,0.523,0.489,0.387,0.899,0.417,0.55,0.786,0.525,0.659,0.62,0.554,0.84,0.619,0.636,0.518,0.476,0.808,0.681,0.428,0.529,0.591,0.544,0.5,0.651,0.531,0.792,0.348,0.785,0.516,0.387,0.443,0.461,0.695,0.812,0.558,0.793,0.492,0.492,0.393,0.641,0.627,0.7,0.377,0.5,0.486,0.584,0.608,0.496,0.346,0.47,0.64,0.664,0.455,0.534,0.862,0.579,0.425,0.491,0.899,0.728,0.443,0.478,0.466,0.441,0.412,0.831,0.721,0.488,0.379,0.444,0.45,0.487,0.735,0.714,0.393,0.729,0.541,0.394,0.618,0.401,0.352,0.52,0.476,0.392,0.503,0.8,0.318,0.51,0.418,0.489,0.683,0.677,0.419,0.828,0.575,0.609,0.438,0.365,0.524,0.752,0.441,0.833,0.714,0.608,0.397,0.504,0.353,0.443,0.491],"cpi":[19,43,40,36,29,29,39,55,39,88,74,52,85,34,36,38,43,29,25,53,49,57,39,36,44,38,36,28,85,25,49,73,37,56,53,43,80,56,59,36,30,74,54,31,44,55,35,38,65,39,73,33,78,35,30,25,33,67,74,38,73,35,33,23,56,45,62,20,39,42,44,47,35,19,45,69,67,30,41,85,55,20,39,88,54,34,30,27,31,24,88,71,37,20,30,24,39,62,59,23,61,42,27,49,26,27,33,41,28,37,74,23,32,21,39,53,58,38,81,48,54,26,28,35,61,29,82,73,64,26,42,16,33,28]}};

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const still = () => motion.matches;

  const C = {
    ink: '#ede6d3', ink2: '#b8c2b5', ink3: '#8a9c92',
    brass: '#c9a35b', brass2: '#ddbb74', jade: '#86b6a4', mauve: '#b98c9f',
    rule: 'rgba(237,230,211,0.13)', rule2: 'rgba(237,230,211,0.24)'
  };
  const CLASS = [C.brass, C.ink, C.jade, C.mauve];

  /* ---------- small helpers ---------- */

  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function normal(rand) {
    let u = 0, v = 0;
    while (u === 0) u = rand();
    while (v === 0) v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = t => Math.max(0, Math.min(1, t));

  /* run fn(t) from 0 to 1 over dur ms; returns a cancel function */
  function tween(dur, fn, done) {
    if (still() || dur <= 0) { fn(1); if (done) done(); return () => {}; }
    let id = 0;
    const t0 = performance.now();
    const step = now => {
      const t = clamp01((now - t0) / dur);
      fn(t);
      if (t < 1) id = requestAnimationFrame(step);
      else if (done) done();
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }
  function wait(ms, fn) {
    if (still()) { fn(); return () => {}; }
    const id = setTimeout(fn, ms);
    return () => clearTimeout(id);
  }
  /* a queue of cancellable steps so a figure can restart cleanly */
  function timeline() {
    let cancels = [];
    return {
      add(c) { cancels.push(c); return c; },
      stop() { cancels.forEach(c => c()); cancels = []; }
    };
  }

  /* ======================================================================
     1. Galton board
     ====================================================================== */

  function galton(root) {
    const stage = root.querySelector('.board-stage');
    const canvas = root.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const outN = root.querySelector('[data-n]');
    const outMean = root.querySelector('[data-mean]');
    const outVar = root.querySelector('[data-var]');
    const rerun = root.querySelector('[data-rerun]');

    const ROWS = 12, BINS = ROWS + 1, N = 640;
    const SPAWN = 24, ROW_T = 92, DROP_T = 460;
    const PATH_T = ROWS * ROW_T + DROP_T;
    const HEAP_G = 5.5;           // heap headroom, in peg gaps
    const READOUT = 78, AXIS = 26;

    const statics = document.createElement('canvas');
    const heap = document.createElement('canvas');
    const sctx = statics.getContext('2d');
    const hctx = heap.getContext('2d');

    let W = 0, H = 0, dpr = 1, g = 0, r = 0, pegR = 0, cx = 0, top = 0, base = 0, perRow = 5, layerH = 0;
    let curve = null;
    let beads = [], slots = [], landedList = [], landed = 0, sum = 0, sumSq = 0;
    let clock = 0, lastFrame = 0, raf = 0, running = false, visible = true, lastOut = 0;

    const pegX = (i, j) => cx + (j - i / 2) * g;
    const pegY = i => top + i * g * 0.866;
    const restY = i => pegY(i) - pegR - r - 0.5;
    const binX = k => cx + (k - ROWS / 2) * g;

    function slotPos(k, s) {
      const layer = Math.floor(s / perRow), col = s % perRow;
      const shift = layer % 2 ? r * 0.5 : -r * 0.5;
      const left = binX(k) - perRow * r + r;
      return [left + col * 2 * r + shift, base - r - 0.75 - layer * layerH];
    }

    function layout() {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      W = rect.width; H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      for (const c of [canvas, statics, heap]) {
        c.width = Math.round(W * dpr);
        c.height = Math.round(H * dpr);
      }
      for (const c of [ctx, sctx, hctx]) c.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rowsH = 0.9 + (ROWS - 1) * 0.866 + 1.25 + HEAP_G;
      g = Math.min((W - 6) / BINS, (H - READOUT - AXIS) / rowsH);
      g = Math.max(12, g);
      r = g * 0.09;
      pegR = Math.max(1.1, g * 0.052);
      perRow = Math.max(1, Math.floor((g - r) / (2 * r)));
      layerH = 2 * r * 0.9;
      cx = W / 2;
      base = H - AXIS;
      // let the readout and caption line up with the edges of the bins
      root.style.setProperty('--bx', Math.max(0, cx - (BINS / 2) * g).toFixed(1) + 'px');
      top = base - HEAP_G * g - 1.25 * g - (ROWS - 1) * g * 0.866;

      // theoretical curve: expected stack height under Normal(6, 3)
      curve = new Path2D();
      const sd = Math.sqrt(ROWS * 0.25), mu = ROWS / 2;
      for (let u = -0.5; u <= ROWS + 0.5 + 1e-9; u += 0.05) {
        const dens = Math.exp(-((u - mu) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI));
        const y = base - (N * dens / perRow) * layerH;
        const x = cx + (u - ROWS / 2) * g;
        if (u === -0.5) curve.moveTo(x, y); else curve.lineTo(x, y);
      }

      drawStatics();
      redrawHeap();
      if (!running) frame(performance.now(), true);
    }

    function drawStatics() {
      sctx.clearRect(0, 0, W, H);
      // bin walls
      sctx.strokeStyle = C.rule;
      sctx.lineWidth = 1;
      sctx.beginPath();
      for (let k = 0; k <= BINS; k++) {
        const x = Math.round(cx + (k - BINS / 2) * g) + 0.5;
        sctx.moveTo(x, base);
        sctx.lineTo(x, base - HEAP_G * g * 0.98);
      }
      sctx.stroke();
      // baseline
      sctx.strokeStyle = C.rule2;
      sctx.beginPath();
      sctx.moveTo(cx - (BINS / 2) * g, Math.round(base) + 0.5);
      sctx.lineTo(cx + (BINS / 2) * g, Math.round(base) + 0.5);
      sctx.stroke();
      // bin labels
      sctx.fillStyle = C.ink3;
      sctx.font = `${Math.max(9, Math.min(11, g * 0.36))}px Archivo, sans-serif`;
      sctx.textAlign = 'center';
      sctx.textBaseline = 'top';
      const every = g < 22 ? 2 : 1;
      for (let k = 0; k <= ROWS; k += every) sctx.fillText(String(k), binX(k), base + 8);
      // pegs
      sctx.fillStyle = C.brass;
      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j <= i; j++) {
          sctx.beginPath();
          sctx.arc(pegX(i, j), pegY(i), pegR, 0, Math.PI * 2);
          sctx.fill();
        }
      }
    }

    function drawBead(c, x, y) {
      c.beginPath();
      c.arc(x, y, r, 0, Math.PI * 2);
      c.fill();
    }

    function redrawHeap() {
      hctx.clearRect(0, 0, W, H);
      hctx.fillStyle = C.ink;
      hctx.globalAlpha = 0.82;
      for (const [k, s] of landedList) {
        const [x, y] = slotPos(k, s);
        drawBead(hctx, x, y);
      }
      hctx.globalAlpha = 1;
    }

    function newBead(rand) {
      const j = [0];
      let k = 0;
      for (let i = 0; i < ROWS; i++) {
        const d = rand() < 0.5 ? 0 : 1;
        if (i < ROWS - 1) j.push(j[i] + d);
        k = (i < ROWS - 1 ? j[i] : j[ROWS - 1]) + d;
      }
      const s = slots[k]++;
      return { j, k, s };
    }

    function beadPos(b, tau) {
      if (tau < ROW_T) {
        const t = tau / ROW_T;
        const y0 = top - 0.9 * g;
        return [cx, lerp(y0, restY(0), t * t)];
      }
      const tt = tau - ROW_T;
      const hop = Math.floor(tt / ROW_T);
      if (hop < ROWS - 1) {
        const t = (tt - hop * ROW_T) / ROW_T;
        const x0 = pegX(hop, b.j[hop]), x1 = pegX(hop + 1, b.j[hop + 1]);
        const y0 = restY(hop), y1 = restY(hop + 1);
        return [lerp(x0, x1, t), y0 + (y1 - y0) * t * t - 0.12 * g * 4 * t * (1 - t)];
      }
      const t = clamp01((tt - (ROWS - 1) * ROW_T) / DROP_T);
      const x0 = pegX(ROWS - 1, b.j[ROWS - 1]), y0 = restY(ROWS - 1);
      const [x1, y1] = slotPos(b.k, b.s);
      return [lerp(x0, x1, easeOut(clamp01(t * 1.7))), y0 + (y1 - y0) * t * t];
    }

    function land(b) {
      landedList.push([b.k, b.s]);
      landed++; sum += b.k; sumSq += b.k * b.k;
      hctx.fillStyle = C.ink;
      hctx.globalAlpha = 0.82;
      const [x, y] = slotPos(b.k, b.s);
      drawBead(hctx, x, y);
      hctx.globalAlpha = 1;
    }

    function writeStats(force) {
      const now = performance.now();
      if (!force && now - lastOut < 90) return;
      lastOut = now;
      outN.textContent = String(landed);
      if (landed > 1) {
        const mean = sum / landed;
        const v = (sumSq - landed * mean * mean) / (landed - 1);
        outMean.textContent = mean.toFixed(2);
        outVar.textContent = v.toFixed(2);
      } else {
        outMean.textContent = '–';
        outVar.textContent = '–';
      }
    }

    let rand = rng(Date.now() % 2147483647);

    function reset() {
      cancelAnimationFrame(raf); raf = 0;
      beads = []; landedList = []; slots = new Array(BINS).fill(0);
      landed = 0; sum = 0; sumSq = 0; clock = 0; lastFrame = 0;
      rand = rng((Date.now() ^ (Math.random() * 1e9)) >>> 0);
      hctx.clearRect(0, 0, W, H);
      writeStats(true);
    }

    function instant() {
      reset();
      for (let n = 0; n < N; n++) land(newBead(rand));
      running = false;
      writeStats(true);
      frame(performance.now(), true);
    }

    function frame(now, once) {
      if (!once) {
        const dt = lastFrame ? Math.min(48, now - lastFrame) : 16;
        lastFrame = now;
        clock += dt;
        // spawn
        const due = Math.min(N, Math.floor(clock / SPAWN) + 1);
        while (beads.length + landed < due) {
          const b = newBead(rand);
          b.t0 = (beads.length + landed) * SPAWN;
          beads.push(b);
        }
        // land
        let w = 0;
        for (let i = 0; i < beads.length; i++) {
          const b = beads[i];
          if (clock - b.t0 >= PATH_T) land(b); else beads[w++] = b;
        }
        beads.length = w;
        writeStats(false);
      }

      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(statics, 0, 0, W, H);
      ctx.drawImage(heap, 0, 0, W, H);
      if (curve) {
        ctx.strokeStyle = C.brass;
        ctx.globalAlpha = 0.95;
        ctx.lineWidth = 1.35;
        ctx.stroke(curve);
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = C.ink;
      for (const b of beads) {
        const [x, y] = beadPos(b, clock - b.t0);
        drawBead(ctx, x, y);
      }

      if (once) return;
      if (landed >= N) { running = false; raf = 0; writeStats(true); return; }
      raf = visible && !document.hidden ? requestAnimationFrame(frame) : 0;
    }

    function start() {
      if (still()) { instant(); return; }
      reset();
      running = true;
      if (visible && !document.hidden) raf = requestAnimationFrame(frame);
    }

    function resume() {
      if (running && !raf && visible && !document.hidden) {
        lastFrame = 0;
        raf = requestAnimationFrame(frame);
      }
    }

    new ResizeObserver(() => layout()).observe(stage);
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) resume();
    }).observe(root);
    document.addEventListener('visibilitychange', resume);
    rerun.addEventListener('click', start);
    canvas.addEventListener('click', start);
    motion.addEventListener('change', () => { if (still()) instant(); });

    layout();
    const go = () => start();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { layout(); go(); });
    else go();
  }

  /* ======================================================================
     2. Project figures
     ====================================================================== */

  const NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const P = { x0: 30, x1: 306, y0: 16, y1: 172 };   // plot area inside a 320 x 200 viewBox
  const sx = u => P.x0 + 6 + u * (P.x1 - P.x0 - 12);
  const sy = v => P.y1 - 6 - v * (P.y1 - P.y0 - 12);

  function frameAxes(svg, xLabel, yLabel) {
    el('path', { class: 'g-axis', d: `M${P.x0} ${P.y0} V${P.y1} H${P.x1}` }, svg);
    const xl = el('text', { class: 'g-label', x: P.x1, y: P.y1 + 16, 'text-anchor': 'end' }, svg);
    xl.textContent = xLabel;
    const yl = el('text', { class: 'g-label', x: P.x0 - 8, y: P.y0 + 2, 'text-anchor': 'end', transform: `rotate(-90 ${P.x0 - 8} ${P.y0 + 2})` }, svg);
    yl.textContent = yLabel;
    return { xl, yl };
  }
  function dot(svg, x, y, rr, fill, op) {
    return el('circle', { cx: x.toFixed(2), cy: y.toFixed(2), r: rr, fill, 'fill-opacity': op == null ? 0.85 : op }, svg);
  }

  /* --- Food prices: nine real series, indexed --- */
  function figFood(svg) {
    const { series } = DATA.food;
    let vmax = 0;
    series.forEach(s => s.v.forEach(v => { if (v != null && v > vmax) vmax = v; }));
    const vmin = 0.5;
    const n = series[0].v.length;
    frameAxes(svg, '2012 to 2022', 'price index');
    // reference line at 1x
    const y1 = sy((1 - vmin) / (vmax - vmin));
    el('line', { class: 'g-grid', x1: P.x0, x2: P.x1, y1: y1.toFixed(1), y2: y1.toFixed(1), 'stroke-dasharray': '2 3' }, svg);
    const paths = [];
    const order = series.map((s, i) => i).sort((a, b) => (series[a].name === 'Imported rice') - (series[b].name === 'Imported rice'));
    order.forEach(i => {
      const s = series[i];
      let d = '', pen = false;
      s.v.forEach((v, m) => {
        if (v == null) { pen = false; return; }
        const x = sx(m / (n - 1)), y = sy((v - vmin) / (vmax - vmin));
        d += (pen ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
        pen = true;
      });
      const hi = s.name === 'Imported rice';
      const p = el('path', {
        d,
        class: hi ? 'g-hi' : 'g-line',
        'stroke-width': hi ? 2.2 : 1.1,
        'stroke-opacity': hi ? 1 : 0.32
      }, svg);
      paths.push(p);
    });
    const lens = paths.map(p => p.getTotalLength());
    const tl = timeline();
    return {
      enter() {
        tl.stop();
        paths.forEach((p, i) => {
          p.style.strokeDasharray = lens[i];
          p.style.strokeDashoffset = lens[i];
        });
        paths.forEach((p, i) => {
          tl.add(wait(i * 70, () => tl.add(tween(1300, t => { p.style.strokeDashoffset = lens[i] * (1 - easeInOut(t)); }))));
        });
      },
      leave() {}
    };
  }

  /* --- Hospitals: raw values glide to ranks --- */
  function figHospital(svg) {
    const { beds, staff, rho } = DATA.hosp;
    const n = beds.length;
    const rank = arr => {
      const idx = arr.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
      const rk = new Array(arr.length);
      for (let i = 0; i < idx.length;) {
        let j = i;
        while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++;
        const avg = (i + j) / 2 + 1;
        for (let k = i; k <= j; k++) rk[idx[k][1]] = avg;
        i = j + 1;
      }
      return rk;
    };
    const rb = rank(beds), rs = rank(staff);
    const mb = Math.max(...beds), ms = Math.max(...staff);
    const raw = beds.map((b, i) => [sx(b / mb), sy(staff[i] / ms)]);
    const rnk = beds.map((b, i) => [sx((rb[i] - 0.5) / n), sy((rs[i] - 0.5) / n)]);
    const { xl, yl } = frameAxes(svg, 'beds', 'staff');
    // rank-space fit: slope rho through the centre
    const c = [sx(0.5), sy(0.5)];
    const half = 0.5;
    const fit = el('line', {
      class: 'g-hi', 'stroke-width': 1.6,
      x1: sx(0.5 - half).toFixed(1), y1: sy(0.5 - half * rho).toFixed(1),
      x2: sx(0.5 + half).toFixed(1), y2: sy(0.5 + half * rho).toFixed(1),
      opacity: 0
    }, svg);
    const lab = el('text', { class: 'g-label-m', x: P.x0 + 12, y: P.y0 + 14, opacity: 0 }, svg);
    lab.innerHTML = '<tspan font-style="italic">ρ</tspan><tspan font-style="normal"> = ' + rho.toFixed(2) + '</tspan>';
    const dots = raw.map(([x, y]) => dot(svg, x, y, 2.6, C.ink));
    void c;
    const tl = timeline();
    let at = 0; // 0 raw, 1 ranks
    function go(target) {
      tl.stop();
      const from = at;
      if (target === 0) { fit.setAttribute('opacity', 0); lab.setAttribute('opacity', 0); }
      tl.add(tween(950, t => {
        const k = easeInOut(t);
        at = lerp(from, target, k);
        dots.forEach((d, i) => {
          d.setAttribute('cx', lerp(raw[i][0], rnk[i][0], at).toFixed(2));
          d.setAttribute('cy', lerp(raw[i][1], rnk[i][1], at).toFixed(2));
        });
      }, () => {
        xl.textContent = target ? 'rank of beds' : 'beds';
        yl.textContent = target ? 'rank of staff' : 'staff';
        if (target) {
          tl.add(tween(500, t => { fit.setAttribute('opacity', (0.95 * t).toFixed(2)); lab.setAttribute('opacity', t.toFixed(2)); }));
        }
      }));
    }
    return { enter() { go(1); }, leave() { go(0); }, toggle() { go(at > 0.5 ? 0 : 1); } };
  }

  /* --- Governance: real scatter, swept in, then the fitted line --- */
  function figGovernance(svg) {
    const { law, cpi } = DATA.gov;
    const lx = [0.25, 0.95], cy = [10, 95];
    const pts = law.map((l, i) => [(l - lx[0]) / (lx[1] - lx[0]), (cpi[i] - cy[0]) / (cy[1] - cy[0])]);
    frameAxes(svg, 'rule of law', 'corruption perception');
    // OLS of cpi on law, in unit space
    const n = pts.length;
    const mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n;
    let sxy = 0, sxx = 0;
    pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
    const b = sxy / sxx, a = my - b * mx;
    const xs = [Math.min(...pts.map(p => p[0])), Math.max(...pts.map(p => p[0]))];
    const line = el('line', {
      class: 'g-hi', 'stroke-width': 1.6,
      x1: sx(xs[0]).toFixed(1), y1: sy(a + b * xs[0]).toFixed(1),
      x2: sx(xs[1]).toFixed(1), y2: sy(a + b * xs[1]).toFixed(1)
    }, svg);
    const len = Math.hypot(sx(xs[1]) - sx(xs[0]), sy(a + b * xs[1]) - sy(a + b * xs[0]));
    const order = pts.map((p, i) => i).sort((i, j) => pts[i][0] - pts[j][0]);
    const dots = pts.map(([x, y]) => dot(svg, sx(x), sy(y), 2.2, C.ink, 0.7));
    const tl = timeline();
    return {
      enter() {
        tl.stop();
        dots.forEach(d => d.setAttribute('fill-opacity', 0));
        line.style.strokeDasharray = len;
        line.style.strokeDashoffset = len;
        order.forEach((i, rankIdx) => {
          tl.add(wait(rankIdx * 6, () => {
            tl.add(tween(260, t => dots[i].setAttribute('fill-opacity', (0.7 * t).toFixed(2))));
          }));
        });
        tl.add(wait(n * 6 + 120, () => tl.add(tween(800, t => { line.style.strokeDashoffset = len * (1 - easeInOut(t)); }))));
      },
      leave() {}
    };
  }

  /* --- Classification: decision regions sweep in --- */
  function figClassify(svg) {
    const rand = rng(11);
    const centers = [0.16, 0.39, 0.62, 0.85];
    const pts = [];
    for (let c = 0; c < 4; c++) {
      for (let i = 0; i < 26; i++) {
        pts.push({ x: clamp01(centers[c] + normal(rand) * 0.055), y: 0.06 + rand() * 0.88, c });
      }
    }
    const bounds = [0.275, 0.505, 0.735];
    frameAxes(svg, 'RAM', 'battery power');
    const edges = [0, ...bounds, 1];
    const regions = [];
    for (let c = 0; c < 4; c++) {
      const x0 = c === 0 ? P.x0 + 0.5 : sx(edges[c]);
      const x1 = c === 3 ? P.x1 : sx(edges[c + 1]);
      regions.push(el('rect', { x: x0.toFixed(1), y: P.y0, width: (x1 - x0).toFixed(1), height: P.y1 - P.y0 - 0.5, fill: CLASS[c], 'fill-opacity': 0.075 }, svg));
    }
    const lines = bounds.map(bx => el('line', {
      x1: sx(bx).toFixed(1), x2: sx(bx).toFixed(1), y1: P.y0, y2: P.y1,
      stroke: C.ink2, 'stroke-opacity': 0.55, 'stroke-dasharray': '3 3'
    }, svg));
    const dots = pts.map(p => dot(svg, sx(p.x), sy(p.y), 2.5, CLASS[p.c], 0.9));
    const predict = x => (x < bounds[0] ? 0 : x < bounds[1] ? 1 : x < bounds[2] ? 2 : 3);
    const tl = timeline();
    return {
      enter() {
        tl.stop();
        regions.forEach(r => r.setAttribute('fill-opacity', 0));
        lines.forEach(l => { l.setAttribute('y2', P.y0); });
        dots.forEach(d => { d.setAttribute('fill', C.ink3); });
        const sweep = 1500;
        tl.add(tween(sweep, t => {
          const xNow = lerp(0, 1.02, easeInOut(t));
          lines.forEach((l, i) => {
            const local = clamp01((xNow - bounds[i] + 0.12) / 0.12);
            l.setAttribute('y2', lerp(P.y0, P.y1, local).toFixed(1));
          });
          regions.forEach((r, c) => {
            const local = clamp01((xNow - edges[c]) / (edges[c + 1] - edges[c]));
            r.setAttribute('fill-opacity', (0.075 * local).toFixed(3));
          });
          pts.forEach((p, i) => {
            if (p.x <= xNow) dots[i].setAttribute('fill', CLASS[predict(p.x)]);
          });
        }));
      },
      leave() {}
    };
  }

  /* --- Regression: the line turns about the means to the least-squares fit --- */
  function figRegression(svg) {
    const rand = rng(7);
    const pts = [];
    for (let i = 0; i < 46; i++) {
      const x = 0.04 + rand() * 0.92;
      pts.push([x, clamp01(0.1 + 0.74 * x + normal(rand) * 0.045)]);
    }
    const n = pts.length;
    const mx = pts.reduce((a, p) => a + p[0], 0) / n, my = pts.reduce((a, p) => a + p[1], 0) / n;
    let sxy = 0, sxx = 0;
    pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
    const bFit = sxy / sxx;
    frameAxes(svg, 'predictors', 'satisfaction');
    const resid = el('g', { stroke: C.brass, 'stroke-opacity': 0.5, 'stroke-width': 1 }, svg);
    const sticks = pts.map(() => el('line', {}, resid));
    const line = el('line', { class: 'g-hi', 'stroke-width': 1.8 }, svg);
    pts.forEach(([x, y]) => dot(svg, sx(x), sy(y), 2.5, C.ink, 0.88));
    el('circle', { cx: sx(mx).toFixed(1), cy: sy(my).toFixed(1), r: 3.2, fill: 'none', stroke: C.brass, 'stroke-width': 1.2 }, svg);
    function setSlope(b, stickOp) {
      const a = my - b * mx;
      line.setAttribute('x1', sx(0).toFixed(1)); line.setAttribute('y1', sy(a).toFixed(1));
      line.setAttribute('x2', sx(1).toFixed(1)); line.setAttribute('y2', sy(a + b).toFixed(1));
      pts.forEach(([x, y], i) => {
        const s = sticks[i];
        s.setAttribute('x1', sx(x).toFixed(1)); s.setAttribute('x2', sx(x).toFixed(1));
        s.setAttribute('y1', sy(y).toFixed(1)); s.setAttribute('y2', sy(a + b * x).toFixed(1));
      });
      resid.setAttribute('stroke-opacity', stickOp.toFixed(2));
    }
    setSlope(bFit, 0);
    const tl = timeline();
    return {
      enter() {
        tl.stop();
        setSlope(-0.15, 0.5);
        tl.add(wait(250, () => tl.add(tween(1500, t => setSlope(lerp(-0.15, bFit, easeInOut(t)), 0.5), () => {
          tl.add(wait(500, () => tl.add(tween(600, t => setSlope(bFit, 0.5 * (1 - t))))));
        }))));
      },
      leave() {}
    };
  }

  /* --- Regression tree: splits partition the plane --- */
  function figTree(svg) {
    const rand = rng(23);
    const leaves = [
      { x0: 0, x1: 0.46, y0: 0, y1: 0.56, m: 0.18 },
      { x0: 0, x1: 0.46, y0: 0.56, y1: 1, m: 0.42 },
      { x0: 0.46, x1: 1, y0: 0, y1: 0.38, m: 0.52 },
      { x0: 0.46, x1: 0.74, y0: 0.38, y1: 1, m: 0.74 },
      { x0: 0.74, x1: 1, y0: 0.38, y1: 1, m: 1 }
    ];
    frameAxes(svg, 'counter sales', 'drive-through sales');
    const fills = leaves.map(l => el('rect', {
      x: sx(l.x0).toFixed(1), y: sy(l.y1).toFixed(1),
      width: (sx(l.x1) - sx(l.x0)).toFixed(1), height: (sy(l.y0) - sy(l.y1)).toFixed(1),
      fill: C.brass, 'fill-opacity': (0.05 + 0.27 * l.m).toFixed(3)
    }, svg));
    // each split divides a region into groups of leaves; a region is shaded by its mean
    const splits = [
      { x1: 0.46, y1: 0, x2: 0.46, y2: 1, groups: [[0, 1], [2, 3, 4]] },
      { x1: 0, y1: 0.56, x2: 0.46, y2: 0.56, groups: [[0], [1]] },
      { x1: 0.46, y1: 0.38, x2: 1, y2: 0.38, groups: [[2], [3, 4]] },
      { x1: 0.74, y1: 0.38, x2: 0.74, y2: 1, groups: [[3], [4]] }
    ].map(s => ({ ...s, node: el('line', { x1: sx(s.x1).toFixed(1), y1: sy(s.y1).toFixed(1), x2: sx(s.x2).toFixed(1), y2: sy(s.y2).toFixed(1), stroke: C.ink, 'stroke-opacity': 0.75, 'stroke-width': 1.2 }, svg) }));
    for (let i = 0; i < 70; i++) {
      const x = 0.03 + rand() * 0.94, y = 0.03 + rand() * 0.94;
      dot(svg, sx(x), sy(y), 2, C.ink, 0.75);
    }
    const shade = m => 0.05 + 0.27 * m;
    const meanM = grp => grp.reduce((a, k) => a + leaves[k].m, 0) / grp.length;
    const allMean = meanM([0, 1, 2, 3, 4]);
    const tl = timeline();
    return {
      enter() {
        tl.stop();
        fills.forEach(f => f.setAttribute('fill-opacity', shade(allMean).toFixed(3)));
        splits.forEach(s => { s.node.setAttribute('x2', s.node.getAttribute('x1')); s.node.setAttribute('y2', s.node.getAttribute('y1')); });
        splits.forEach((s, i) => {
          tl.add(wait(200 + i * 520, () => {
            const ex = sx(s.x2), ey = sy(s.y2), bx = sx(s.x1), by = sy(s.y1);
            tl.add(tween(420, t => {
              const k = easeInOut(t);
              s.node.setAttribute('x2', lerp(bx, ex, k).toFixed(1));
              s.node.setAttribute('y2', lerp(by, ey, k).toFixed(1));
            }, () => {
              s.groups.forEach(grp => {
                const target = shade(meanM(grp));
                grp.forEach(k => {
                  const from = Number(fills[k].getAttribute('fill-opacity'));
                  tl.add(tween(380, t => fills[k].setAttribute('fill-opacity', lerp(from, target, t).toFixed(3))));
                });
              });
            }));
          }));
        });
      },
      leave() {}
    };
  }

  /* --- K-means: Lloyd's algorithm, step by step --- */
  function figKmeans(svg) {
    const rand = rng(5);
    const blobs = [[0.2, 0.74], [0.24, 0.22], [0.76, 0.8], [0.74, 0.24]];
    const pts = [];
    blobs.forEach(([bx, by]) => {
      for (let i = 0; i < 28; i++) pts.push([clamp01(bx + normal(rand) * 0.075), clamp01(by + normal(rand) * 0.085)]);
    });
    // a deliberately poor start so the centroids have somewhere to travel
    const init = [[0.45, 0.62], [0.5, 0.48], [0.56, 0.36], [0.3, 0.5]];
    const steps = [];
    let cents = init.map(c => c.slice());
    for (let it = 0; it < 9; it++) {
      const assign = pts.map(p => {
        let best = 0, bd = Infinity;
        cents.forEach((c, k) => { const d = (p[0] - c[0]) ** 2 + (p[1] - c[1]) ** 2; if (d < bd) { bd = d; best = k; } });
        return best;
      });
      steps.push({ cents: cents.map(c => c.slice()), assign });
      const next = cents.map((c, k) => {
        const mine = pts.filter((p, i) => assign[i] === k);
        if (!mine.length) return c;
        return [mine.reduce((a, p) => a + p[0], 0) / mine.length, mine.reduce((a, p) => a + p[1], 0) / mine.length];
      });
      const moved = next.some((c, k) => Math.hypot(c[0] - cents[k][0], c[1] - cents[k][1]) > 1e-4);
      cents = next;
      if (!moved) break;
    }
    const last = steps[steps.length - 1];
    frameAxes(svg, 'annual income', 'spending score');
    const dots = pts.map(([x, y], i) => dot(svg, sx(x), sy(y), 2.4, CLASS[last.assign[i]], 0.9));
    const marks = last.cents.map(([x, y], k) => {
      const g = el('g', { transform: `translate(${sx(x).toFixed(1)} ${sy(y).toFixed(1)})` }, svg);
      el('circle', { r: 6.5, fill: '#12291f', stroke: CLASS[k], 'stroke-width': 1.6 }, g);
      el('path', { d: 'M-3 0H3M0 -3V3', stroke: CLASS[k], 'stroke-width': 1.4 }, g);
      return g;
    });
    const tl = timeline();
    function place(cs) {
      marks.forEach((m, k) => m.setAttribute('transform', `translate(${sx(cs[k][0]).toFixed(1)} ${sy(cs[k][1]).toFixed(1)})`));
    }
    return {
      enter() {
        tl.stop();
        dots.forEach(d => d.setAttribute('fill', C.ink3));
        place(steps[0].cents);
        let t0 = 350;
        steps.forEach((s, i) => {
          tl.add(wait(t0, () => dots.forEach((d, j) => d.setAttribute('fill', CLASS[s.assign[j]]))));
          t0 += 380;
          const nxt = steps[i + 1];
          if (nxt) {
            const from = s.cents, to = nxt.cents;
            tl.add(wait(t0, () => tl.add(tween(420, t => {
              const k = easeInOut(t);
              place(from.map((c, j) => [lerp(c[0], to[j][0], k), lerp(c[1], to[j][1], k)]));
            }))));
            t0 += 480;
          }
        });
      },
      leave() {}
    };
  }

  const FIGS = {
    food: figFood, hospital: figHospital, governance: figGovernance,
    classify: figClassify, regression: figRegression, tree: figTree, kmeans: figKmeans
  };

  function figures() {
    document.querySelectorAll('.proj').forEach(art => {
      const svg = art.querySelector('svg[data-glyph]');
      const make = svg && FIGS[svg.dataset.glyph];
      if (!make) return;
      let fig;
      try { fig = make(svg); } catch (err) { return; }
      let on = false;
      const enter = () => { if (!on) { on = true; fig.enter(); } };
      const leave = () => { if (on) { on = false; fig.leave(); } };
      art.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') enter(); });
      art.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') leave(); });
      art.addEventListener('focusin', enter);
      art.addEventListener('focusout', e => { if (!art.contains(e.relatedTarget)) leave(); });
      art.querySelector('.proj-fig').addEventListener('click', () => {
        if (fig.toggle) { fig.toggle(); return; }
        on = true;
        fig.enter();
      });
    });
  }

  /* ======================================================================
     3. Timeline reveal
     ====================================================================== */

  function timelineReveal() {
    const tl = document.querySelector('.tl');
    if (!tl) return;
    if (still() || !('IntersectionObserver' in window)) { tl.classList.add('is-visible'); return; }
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { tl.classList.add('is-visible'); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(tl);
  }

  /* ======================================================================
     4. Dashboard lightbox
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
    let at = 0;

    function show(i) {
      at = (i + items.length) % items.length;
      const a = items[at];
      const thumb = a.querySelector('img');
      img.src = a.getAttribute('href');
      img.width = Number(a.dataset.w);
      img.height = Number(a.dataset.h);
      img.alt = thumb ? thumb.alt : '';
      title.textContent = a.querySelector('h3').textContent;
      desc.textContent = a.querySelector('p').textContent;
      src.href = a.dataset.src;
      src.textContent = 'Open the original on Google Drive';
      if (a.dataset.extra) {
        extra.hidden = false;
        extra.href = a.dataset.extra;
        extra.textContent = a.dataset.extraLabel || 'More';
      } else {
        extra.hidden = true;
      }
      media.scrollTop = 0;
    }

    items.forEach((a, i) => a.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      show(i);
      document.documentElement.style.overflow = 'hidden';
      dlg.showModal();
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
      items[at].focus({ preventScroll: true });
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
        const text = btn.dataset.copy;
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = 'Copied';
        } catch (err) {
          const range = document.createRange();
          const target = document.querySelector('.email');
          range.selectNodeContents(target);
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

  /* ---------- boot ---------- */

  function boot() {
    chrome();
    const board = document.querySelector('[data-galton]');
    if (board) galton(board);
    figures();
    timelineReveal();
    lightbox();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
