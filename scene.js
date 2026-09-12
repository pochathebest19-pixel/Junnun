/* Shared drifting background: sports gear, instruments, art tools + coaching scenes. */
const ICONS = [
  // ── sports ──
  ['<circle cx="20" cy="20" r="16"/><path d="M20 8l6 4.5-2.3 7h-7.4l-2.3-7L20 8zM6.5 15.5l7.5 2M33.5 15.5l-7.5 2M12 31l4.3-6.5M28 31l-4.3-6.5"/>', 12, 56, 34, -2],
  ['<ellipse cx="14" cy="13" rx="9" ry="11"/><path d="M8 8l12 10M20 8L8 18M14 24l6 9"/><path d="M30 26l4-4 3 5-4 3z"/><path d="M30 26l-3 3"/>', 63, 62, 41, -9],
  ['<path d="M24 6l6 6-13 15-6-6z"/><path d="M11 21l-5 6 4 4 6-5"/><circle cx="31" cy="30" r="5"/><path d="M28 27.5c2 1.5 3.5 3.5 4 6"/>', 34, 52, 47, -22],
  ['<path d="M13 7h14v9a7 7 0 01-14 0z"/><path d="M13 10H8v3a5 5 0 005 5M27 10h5v3a5 5 0 01-5 5"/><path d="M20 23v6M14 33h12l-1.5-4h-9z"/>', 80, 46, 38, -30],
  ['<circle cx="20" cy="20" r="16"/><path d="M20 4v32M4 20h32M9 9c6 5 6 17 0 22M31 9c-6 5-6 17 0 22"/>', 17, 44, 37, -19],
  ['<path d="M14 5l6 11M26 5l-6 11"/><circle cx="20" cy="25" r="10"/><path d="M20 20l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z"/>', 3, 40, 45, -28],
  // ── music ──
  ['<path d="M17 20a7 7 0 108 8c1-3 4-3 5-6s-2-5-5-4-3 4-6 5a7 7 0 00-2-3z" transform="rotate(-12 20 22)"/><circle cx="17.5" cy="25.5" r="3"/><path d="M27 15l6-6M31 7l3 3"/>', 22, 50, 44, -14],
  ['<ellipse cx="20" cy="13" rx="11" ry="5"/><path d="M9 13v12c0 3 5 5 11 5s11-2 11-5V13"/><path d="M13 17.5v10M27 17.5v10M20 18.5v11"/>', 47, 46, 36, -26],
  ['<path d="M15 27V10l14-3v17"/><ellipse cx="11.5" cy="28" rx="4" ry="3.2"/><ellipse cx="25.5" cy="25" rx="4" ry="3.2"/><path d="M15 15l14-3"/>', 72, 40, 31, -5],
  ['<path d="M6 25L31 12a3 3 0 013 5L11 29a3 3 0 01-5-4z"/><circle cx="15" cy="23" r="1.2"/><circle cx="20" cy="20.5" r="1.2"/><circle cx="25" cy="18" r="1.2"/>', 6, 58, 49, -38],
  ['<rect x="5" y="13" width="30" height="15" rx="2"/><path d="M12 13v15M19 13v15M26 13v15"/><path d="M9.5 13v8h4v-8M16.5 13v8h4v-8M23.5 13v8h4v-8"/>', 58, 52, 50, -41],
  ['<path d="M16 22a6 6 0 106 6 5 5 0 014-4 5 5 0 10-6-6 5 5 0 01-4 4z" transform="rotate(-20 20 24)"/><path d="M25 16l7-7M30 7l4 4M17 25l6-6"/>', 44, 48, 40, -7],
  // ── art ──
  ['<path d="M20 5a15 15 0 000 30c3 0 3-3 2-5s1-4 4-4h4a5 5 0 005-5C35 12 28 5 20 5z"/><circle cx="14" cy="13" r="1.8"/><circle cx="24" cy="11" r="1.8"/><circle cx="11" cy="22" r="1.8"/><circle cx="29" cy="18" r="1.8"/>', 55, 48, 42, -17],
  ['<path d="M8 32c0-4 2-6 5-6s5 2 5 5-3 5-7 5H8z"/><path d="M13 26L29 9a3 3 0 014 4L16 30"/><path d="M26 12l4 4"/>', 88, 52, 39, -11],
  ['<rect x="11" y="7" width="18" height="14" rx="1.5"/><path d="M20 21v12M12 35l8-8 8 8M14 29h12"/>', 40, 50, 53, -44],
  ['<path d="M11 30V16l3-5 3 5v14zM20 30V14l3-5 3 5v16zM29 30V18l3-5 3 5v12z"/><path d="M11 21h6M20 19h6M29 23h6"/>', 85, 46, 35, -13],
  ['<path d="M13 12h11l6 16a3 3 0 01-3 4H14a3 3 0 01-3-4z"/><path d="M15 8h7v4h-7zM17 5h3v3h-3"/><path d="M14 22h12"/>', 76, 42, 54, -50],
];

// coach guiding a child, and children racing to the tape
const SCENES = [
  ['0 0 120 88', '<circle cx="34" cy="20" r="7"/><path d="M34 27v22M34 33l14 6M34 33l-9 8M34 49l-7 17M34 49l8 17"/><path d="M27 17h14M41 17l5 1"/><circle cx="79" cy="37" r="5.5"/><path d="M79 42.5v15M79 47l-10-6M79 47l8 5M79 57.5l-6 11M79 57.5l6 11"/><circle cx="60" cy="45" r="5"/><path d="M14 70h92" stroke-dasharray="3 7"/>', 28, 120, 88, 58, -6],
  ['0 0 140 82', '<circle cx="26" cy="20" r="5.5"/><path d="M26 25.5v14M26 30l-9 4M26 30l10-5M26 39.5l-9 13M26 39.5l9 9"/><circle cx="62" cy="24" r="5.5"/><path d="M62 29.5v13M62 33l-10 6M62 33l9-6M62 42.5l-8 12M62 42.5l10 10"/><circle cx="98" cy="19" r="5.5"/><path d="M98 24.5v14M98 29l-10 3M98 29l9-5M98 38.5l-7 14M98 38.5l10 8"/><path d="M128 12v52M128 14h10v7h-10"/><path d="M8 64h120" stroke-dasharray="3 7"/>', 66, 140, 82, 62, -34],
];

const scene = document.createElement('div');
scene.className = 'scene';
scene.setAttribute('aria-hidden', 'true');

const add = (cls, top, w, h, dur, delay, vb, body) => {
  const d = document.createElement('div');
  d.className = cls;
  d.style.cssText = `top:${top}%;width:${w}px;height:${h}px;animation-duration:${dur}s;animation-delay:${delay}s`;
  d.innerHTML = `<svg viewBox="${vb}">${body}</svg>`;
  scene.appendChild(d);
};

ICONS.forEach(([body, top, size, dur, delay]) => add('drift', top, size, size, dur, delay, '0 0 40 40', body));
SCENES.forEach(([vb, body, top, w, h, dur, delay]) => add('drift vignette', top, w, h, dur, delay, vb, body));

document.body.appendChild(scene);
