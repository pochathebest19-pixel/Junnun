/* Catalog data + renderer. Each page sets <body data-cat="sports|music|arts">.
   Item shape: [name, blurb, ages, format, icon] */
const DATA = {
  sports: {
    title: 'Sports',
    intro: 'Ground-level coaching in the games children actually play — from neighbourhood maidan favourites to competitive disciplines.',
    items: [
      ['Cricket', 'Batting, bowling and fielding fundamentals with match practice.', '6–17 yrs', 'Group',
        '<path d="M14 3.5l4.5 4.5-8.5 9.5-4.5-4.5z"/><path d="M8 15l-3.5 4 2 2 4-3.5"/><circle cx="18.5" cy="18" r="2.5"/>'],
      ['Football', 'Ball control, passing, positioning and small-sided games.', '6–17 yrs', 'Group',
        '<circle cx="12" cy="12" r="9"/><path d="M12 6.5l3.6 2.6-1.4 4.2H9.8L8.4 9.1z"/><path d="M3.4 10l5 .9M20.6 10l-5 .9M8 19.7l1.8-4.4M16 19.7l-1.8-4.4"/>'],
      ['Badminton', 'Footwork, strokes and singles/doubles match play.', '7–17 yrs', 'Group',
        '<ellipse cx="8.5" cy="8" rx="5" ry="6"/><path d="M5 4.5l7 6M12 4.5l-7 6M8.5 14l3.5 6"/><path d="M16.5 15.5l2.5-2.5 2.5 3-2.5 2.5z"/><path d="M16.5 15.5l-1.5 1.5"/>'],
      ['Basketball', 'Dribbling, shooting form and team movement.', '8–17 yrs', 'Group',
        '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6.2 5.4c3.4 3 3.4 10.2 0 13.2M17.8 5.4c-3.4 3-3.4 10.2 0 13.2"/>'],
      ['Volleyball', 'Serving, passing, setting and rotation basics.', '9–17 yrs', 'Group',
        '<circle cx="12" cy="12" r="9"/><path d="M11.5 3.1c-2.8 4-2.6 12 3.4 17M20.9 12.8c-5-1.2-11 1.6-13.2 7.6M4.2 6.6c4 2.2 11 2.4 15.2-1.6"/>'],
      ['Kabaddi', 'Raiding, defence technique and breath control.', '9–17 yrs', 'Group',
        '<circle cx="6.5" cy="5" r="2"/><path d="M6.5 7v5.5M6.5 9l4.5 1.5M6.5 12.5L4.5 19M6.5 12.5L9 19"/><circle cx="17.5" cy="6" r="2"/><path d="M17.5 8v5.5M17.5 10L13 11M17.5 13.5L19.5 19M17.5 13.5L15.5 19"/>'],
      ['Kho-Kho', 'Chasing, dodging and team strategy drills.', '8–16 yrs', 'Group',
        '<circle cx="8" cy="5" r="2"/><path d="M8 7v5M8 9l4 1.5M8 9L4.5 11M8 12l-2.5 7M8 12l4 5.5"/><path d="M15 5h6M16.5 9h5M18 13h4" stroke-dasharray="2.5 2.5"/>'],
      ['Athletics', 'Sprints, long-distance, jumps and throws.', '7–17 yrs', 'Group',
        '<circle cx="13" cy="4.5" r="2"/><path d="M13 6.5v5.5M13 8.5l4.5 2M13 8.5l-4 1M13 12l-3 7M13 12l4.5 5.5"/><path d="M3 20h5" stroke-dasharray="2.5 2.5"/>'],
      ['Table Tennis', 'Grip, spin, rallies and competitive play.', '7–17 yrs', 'Small group',
        '<ellipse cx="10" cy="9" rx="6" ry="6.8"/><path d="M10 15.8V21"/><circle cx="19" cy="16.5" r="2"/><path d="M3 21h14"/>'],
      ['Hockey', 'Stick work, dribbling, passing and field play.', '9–17 yrs', 'Group',
        '<path d="M7 3v10a5 5 0 005 5h2.5"/><path d="M14.5 18a2 2 0 002-2"/><circle cx="19" cy="19" r="2"/><path d="M3 21h18"/>'],
      ['Swimming', 'Water confidence through to all four strokes.', '5–17 yrs', 'Small group',
        '<circle cx="7.5" cy="6.5" r="2"/><path d="M9.5 8.5l4.5 2.5 5-2"/><path d="M2 15.5c2-1.6 3.3-1.6 5.3 0s3.3 1.6 5.3 0 3.3-1.6 5.4 0 2 1 3 .4"/><path d="M2 19.5c2-1.6 3.3-1.6 5.3 0s3.3 1.6 5.3 0 3.3-1.6 5.4 0 2 1 3 .4"/>'],
      ['Chess', 'Openings, tactics, endgames and tournament prep.', '6–17 yrs', 'Group / 1-on-1',
        '<circle cx="12" cy="5.5" r="3"/><path d="M9.5 8.5c0 2-1.5 3-2 6h9c-.5-3-2-4-2-6"/><path d="M6 17.5h12l1 3.5H5z"/>'],
      ['Carrom', 'Striking technique, angles and board control.', '7–17 yrs', 'Group',
        '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="2.6"/><circle cx="6.5" cy="6.5" r="1.1"/><circle cx="17.5" cy="6.5" r="1.1"/><circle cx="6.5" cy="17.5" r="1.1"/><circle cx="17.5" cy="17.5" r="1.1"/>'],
      ['Boxing', 'Stance, footwork and conditioning — non-contact for juniors.', '10–17 yrs', 'Group',
        '<path d="M5.5 9.5a4.5 4.5 0 019 0v3h-9z"/><path d="M14.5 10h1.8a2.2 2.2 0 010 4.4h-1.8"/><path d="M5.5 12.5v4a3 3 0 003 3h3a3 3 0 003-3v-4"/><path d="M7 19.5V21h8v-1.5"/>'],
      ['Wrestling', 'Grappling basics, balance and strength training.', '10–17 yrs', 'Group',
        '<circle cx="7" cy="7" r="2.2"/><path d="M7 9.2v4.3M7 11l5 2M7 13.5L5 20M7 13.5L9.5 20"/><circle cx="17.5" cy="9.5" r="2.2"/><path d="M17.5 11.7v3.8M17.5 13l-4-1M17.5 15.5L19.5 20M17.5 15.5L15.5 20"/>'],
    ],
  },
  music: {
    title: 'Music',
    intro: 'Classical, folk and contemporary training — instruments and voice, taught from the very first lesson onward.',
    items: [
      ['Tabla', 'Bols, taals and accompaniment from the ground up.', '7–17 yrs', 'Group / 1-on-1',
        '<ellipse cx="8" cy="8.5" rx="5" ry="2.5"/><path d="M3 8.5v6.5c0 1.5 2.2 2.6 5 2.6s5-1.1 5-2.6V8.5"/><ellipse cx="18" cy="12" rx="3.6" ry="1.9"/><path d="M14.4 12v4c0 1.1 1.6 2 3.6 2s3.6-.9 3.6-2v-4"/>'],
      ['Guitar', 'Chords, strumming, fingerstyle and song playing.', '8–17 yrs', 'Group / 1-on-1',
        '<path d="M8.5 12.5a4 4 0 104.5 4.5c.5-2 2.4-2 3-3.5s-1-3-3-2.5-2 2.5-4 3a4 4 0 00-.5-1.5z"/><circle cx="9" cy="15.5" r="1.6"/><path d="M15.5 9.5l4.5-4.5M18.5 3l2.5 2.5"/>'],
      ['Keyboard', 'Note reading, both hands and popular pieces.', '6–17 yrs', 'Group / 1-on-1',
        '<rect x="2" y="8" width="20" height="9" rx="1.5"/><path d="M7 8v9M12 8v9M17 8v9"/><path d="M5 8v5h2.6V8M10 8v5h2.6V8M15 8v5h2.6V8"/>'],
      ['Harmonium', 'Swaras, scales and devotional/film repertoire.', '7–17 yrs', 'Group',
        '<rect x="2" y="6.5" width="20" height="11.5" rx="1.5"/><path d="M2 13h13"/><path d="M5 13v5M8 13v5M11 13v5M14 13v5"/><path d="M17.5 9.5h3M17.5 11.5h3"/>'],
      ['Violin', 'Bowing, posture and Indian or Western styles.', '8–17 yrs', '1-on-1',
        '<path d="M8.5 13a3.5 3.5 0 103.5 3.5 3 3 0 013-3 3 3 0 10-3.5-3.5 3 3 0 01-3 3z"/><path d="M14.5 10l5-5M17.5 3l3.5 3.5"/><path d="M10 14.5l3-3"/>'],
      ['Flute', 'Breath control, fingering and raga basics.', '8–17 yrs', 'Group / 1-on-1',
        '<path d="M2.5 15.5L17.5 6a2 2 0 012.6 3L5 18.5a2 2 0 01-2.5-3z"/><circle cx="8.5" cy="13.8" r=".9"/><circle cx="12" cy="11.6" r=".9"/><circle cx="15.5" cy="9.4" r=".9"/>'],
      ['Sitar', 'Meend, technique and classical repertoire.', '10–17 yrs', '1-on-1',
        '<ellipse cx="6.5" cy="17" rx="4.5" ry="4"/><path d="M9.5 14.2L19.5 4.2M17.5 2.5L21.5 6.5"/><path d="M12 12l2 2"/>'],
      ['Dholak', 'Folk rhythms and live accompaniment.', '7–17 yrs', 'Group',
        '<ellipse cx="12" cy="7.5" rx="9" ry="3"/><path d="M3 7.5v8.5c0 1.7 4 3 9 3s9-1.3 9-3V7.5"/><path d="M7 10.8v7.4M17 10.8v7.4M12 11.2v8"/>'],
      ['Drums', 'Kit setup, beats, fills and playing along to tracks.', '9–17 yrs', '1-on-1',
        '<ellipse cx="12" cy="9" rx="7" ry="3"/><path d="M5 9v6c0 1.7 3.1 3 7 3s7-1.3 7-3V9"/><path d="M5 12.5L2 20M19 12.5L22 20"/>'],
      ['Hindustani Vocal', 'Raga, alankar and structured riyaz.', '6–17 yrs', 'Group',
        '<circle cx="10" cy="5.5" r="2.5"/><path d="M10 8v6M10 10L6.5 12M10 10l3.5 2M10 14l-2.5 6M10 14l2.5 6"/><path d="M16.5 6.5c1.6 1.5 1.6 4.5 0 6M19.5 4.5c2.8 2.8 2.8 8.2 0 11"/>'],
      ['Carnatic Vocal', 'Varnams, krithis and swara exercises.', '6–17 yrs', 'Group',
        '<circle cx="14" cy="5.5" r="2.5"/><path d="M14 8v6M14 10l3.5 2M14 10l-3.5 2M14 14l2.5 6M14 14l-2.5 6"/><path d="M7.5 6.5c-1.6 1.5-1.6 4.5 0 6M4.5 4.5c-2.8 2.8-2.8 8.2 0 11"/>'],
      ['Western Vocal', 'Pitch, breath, harmony and performance.', '8–17 yrs', 'Group',
        '<rect x="9" y="2.5" width="6" height="10.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0013 0M12 17.5V21M8.5 21h7"/>'],
      ['Folk Music', 'Regional traditions, songs and instruments.', '7–17 yrs', 'Group',
        '<path d="M9 17.5V5.5l10-2v12"/><ellipse cx="6.5" cy="18" rx="2.6" ry="2.1"/><ellipse cx="16.5" cy="16" rx="2.6" ry="2.1"/><path d="M9 9l10-2"/>'],
    ],
  },
  arts: {
    title: 'Arts',
    intro: 'Visual art, classical and contemporary dance, theatre and physical disciplines — creativity and movement together.',
    items: [
      ['Painting', 'Colour, composition and watercolour/acrylic work.', '5–17 yrs', 'Group',
        '<path d="M12 3a9 9 0 000 18c1.8 0 1.8-1.8 1.2-3s.6-2.4 2.4-2.4H18a3 3 0 003-3c0-5.4-4.2-9.6-9-9.6z"/><circle cx="8.5" cy="8.5" r="1.1"/><circle cx="14" cy="7" r="1.1"/><circle cx="7" cy="13.5" r="1.1"/>'],
      ['Sketching', 'Line, shading, proportion and observational drawing.', '6–17 yrs', 'Group',
        '<path d="M4 20l1.2-4.2L17 4a2.8 2.8 0 014 4L9.2 19.8 5 21z"/><path d="M15 6l4 4M5.2 15.8l4 4"/>'],
      ['Craft', 'Paper, textile and recycled-material making.', '5–14 yrs', 'Group',
        '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8.2 7.4L20 18M8.2 16.6L20 6"/>'],
      ['Clay Modelling', 'Hand-building, sculpting and pottery basics.', '6–15 yrs', 'Group',
        '<path d="M9 3h6"/><path d="M10 3c0 3-3 4.2-3 8.2a5 5 0 0010 0c0-4-3-5.2-3-8.2"/><path d="M4.5 21h15"/>'],
      ['Calligraphy', 'Devanagari and Roman lettering, brush and pen.', '9–17 yrs', 'Group',
        '<path d="M4.5 19.5l2-6 9.5-9.5a2.6 2.6 0 013.7 3.7L10.2 17l-5.7 2.5z"/><path d="M11.5 7.5l5 5"/>'],
      ['Bharatanatyam', 'Adavus, mudras and classical repertoire.', '6–17 yrs', 'Group',
        '<circle cx="12" cy="4" r="2.2"/><path d="M12 6.2v5.3M12 8l5.5-2M12 8L6.5 6M12 11.5L7.5 15.5 8.5 21M12 11.5l4.5 3.5-1 6"/>'],
      ['Kathak', 'Tatkar, chakkars, abhinaya and rhythm.', '6–17 yrs', 'Group',
        '<circle cx="12" cy="4" r="2.2"/><path d="M12 6.2v6M12 8.2l4.5-3M12 8.2L7.5 5.2M12 12.2L9 20M12 12.2L15 20"/><path d="M6 20.5c3.5 1.2 8.5 1.2 12 0" stroke-dasharray="2.5 2.5"/>'],
      ['Folk Dance', 'Regional forms — garba, bhangra, lavani and more.', '6–17 yrs', 'Group',
        '<circle cx="6.5" cy="5" r="2"/><path d="M6.5 7v5M6.5 9l5 1.5M6.5 12L4.5 20M6.5 12L9 20"/><circle cx="17.5" cy="5" r="2"/><path d="M17.5 7v5M17.5 9l-5 1.5M17.5 12l2 8M17.5 12L15 20"/>'],
      ['Western Dance', 'Hip-hop, contemporary and freestyle choreography.', '7–17 yrs', 'Group',
        '<circle cx="10" cy="4" r="2.2"/><path d="M10 6.2v6M10 8.2l6-2.2M10 8.2L4.5 9.5M10 12.2L6.5 20M10 12.2l5.5 6"/>'],
      ['Theatre', 'Voice, improvisation, stagecraft and performance.', '8–17 yrs', 'Group',
        '<path d="M2.5 5.5h8.5v6a4.2 4.2 0 01-8.5 0z"/><circle cx="5.2" cy="8.2" r=".7"/><circle cx="8.3" cy="8.2" r=".7"/><path d="M13 10.5h8.5v6a4.2 4.2 0 01-8.5 0z"/><circle cx="15.7" cy="13.2" r=".7"/><circle cx="18.8" cy="13.2" r=".7"/>'],
      ['Yoga', 'Asanas, breathing and flexibility for young bodies.', '6–17 yrs', 'Group',
        '<circle cx="12" cy="5" r="2.5"/><path d="M12 7.5v5M12 10L7.5 12.5M12 10l4.5 2.5"/><path d="M4.5 18.5c2.2-3 5-4.2 7.5-4.2s5.3 1.2 7.5 4.2c-2.2 1.6-4.8 2.2-7.5 2.2s-5.3-.6-7.5-2.2z"/>'],
      ['Gymnastics', 'Flexibility, balance, tumbling and floor work.', '6–15 yrs', 'Group',
        '<circle cx="12" cy="4" r="2.2"/><path d="M12 6.2v5.3M12 7.8l4.5-3.3M12 7.8L7.5 4.5M12 11.5L9.5 17M12 11.5l4.5 4.5"/><path d="M3 20.5h18"/>'],
      ['Martial Arts', 'Karate, taekwondo and self-defence fundamentals.', '6–17 yrs', 'Group',
        '<circle cx="8.5" cy="5" r="2.2"/><path d="M8.5 7.2v5M8.5 9.2l5.5 1.3M8.5 9.2L4.5 11.5M8.5 12.2L6 19.5M8.5 12.2l9-1.2"/>'],
    ],
  },
};

const cat = DATA[document.body.dataset.cat];
document.getElementById('cat-title').textContent = cat.title;
document.getElementById('cat-intro').textContent = cat.intro;
document.title = `${cat.title} — Junnun.in`;

document.getElementById('grid').innerHTML = cat.items.map(([n, d, age, fmt, icon], i) => `
  <article class="item" style="animation-delay:${i * 45}ms">
    <div class="thumb"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg></div>
    <h3>${n}</h3>
    <p>${d}</p>
    <div class="meta">
      <span class="pill">${age}</span>
      <span class="pill">${fmt}</span>
      <span class="pill fee">Minimal fee</span>
    </div>
  </article>`).join('');
