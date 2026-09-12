/* Catalog data + renderer. Each page sets <body data-cat="sports|music|arts">. */
const DATA = {
  sports: {
    title: 'Sports',
    intro: 'Ground-level coaching in the games children actually play — from neighbourhood maidan favourites to competitive disciplines.',
    items: [
      ['Cricket', 'Batting, bowling and fielding fundamentals with match practice.', '6–17 yrs', 'Group'],
      ['Football', 'Ball control, passing, positioning and small-sided games.', '6–17 yrs', 'Group'],
      ['Badminton', 'Footwork, strokes and singles/doubles match play.', '7–17 yrs', 'Group'],
      ['Basketball', 'Dribbling, shooting form and team movement.', '8–17 yrs', 'Group'],
      ['Volleyball', 'Serving, passing, setting and rotation basics.', '9–17 yrs', 'Group'],
      ['Kabaddi', 'Raiding, defence technique and breath control.', '9–17 yrs', 'Group'],
      ['Kho-Kho', 'Chasing, dodging and team strategy drills.', '8–16 yrs', 'Group'],
      ['Athletics', 'Sprints, long-distance, jumps and throws.', '7–17 yrs', 'Group'],
      ['Table Tennis', 'Grip, spin, rallies and competitive play.', '7–17 yrs', 'Small group'],
      ['Hockey', 'Stick work, dribbling, passing and field play.', '9–17 yrs', 'Group'],
      ['Swimming', 'Water confidence through to all four strokes.', '5–17 yrs', 'Small group'],
      ['Chess', 'Openings, tactics, endgames and tournament prep.', '6–17 yrs', 'Group / 1-on-1'],
      ['Carrom', 'Striking technique, angles and board control.', '7–17 yrs', 'Group'],
      ['Boxing', 'Stance, footwork and conditioning — non-contact for juniors.', '10–17 yrs', 'Group'],
      ['Wrestling', 'Grappling basics, balance and strength training.', '10–17 yrs', 'Group'],
    ],
  },
  music: {
    title: 'Music',
    intro: 'Classical, folk and contemporary training — instruments and voice, taught from the very first lesson onward.',
    items: [
      ['Tabla', 'Bols, taals and accompaniment from the ground up.', '7–17 yrs', 'Group / 1-on-1'],
      ['Guitar', 'Chords, strumming, fingerstyle and song playing.', '8–17 yrs', 'Group / 1-on-1'],
      ['Keyboard', 'Note reading, both hands and popular pieces.', '6–17 yrs', 'Group / 1-on-1'],
      ['Harmonium', 'Swaras, scales and devotional/film repertoire.', '7–17 yrs', 'Group'],
      ['Violin', 'Bowing, posture and Indian or Western styles.', '8–17 yrs', '1-on-1'],
      ['Flute', 'Breath control, fingering and raga basics.', '8–17 yrs', 'Group / 1-on-1'],
      ['Sitar', 'Meend, technique and classical repertoire.', '10–17 yrs', '1-on-1'],
      ['Dholak', 'Folk rhythms and live accompaniment.', '7–17 yrs', 'Group'],
      ['Drums', 'Kit setup, beats, fills and playing along to tracks.', '9–17 yrs', '1-on-1'],
      ['Hindustani Vocal', 'Raga, alankar and structured riyaz.', '6–17 yrs', 'Group'],
      ['Carnatic Vocal', 'Varnams, krithis and swara exercises.', '6–17 yrs', 'Group'],
      ['Western Vocal', 'Pitch, breath, harmony and performance.', '8–17 yrs', 'Group'],
      ['Folk Music', 'Regional traditions, songs and instruments.', '7–17 yrs', 'Group'],
    ],
  },
  arts: {
    title: 'Arts',
    intro: 'Visual art, classical and contemporary dance, theatre and physical disciplines — creativity and movement together.',
    items: [
      ['Painting', 'Colour, composition and watercolour/acrylic work.', '5–17 yrs', 'Group'],
      ['Sketching', 'Line, shading, proportion and observational drawing.', '6–17 yrs', 'Group'],
      ['Craft', 'Paper, textile and recycled-material making.', '5–14 yrs', 'Group'],
      ['Clay Modelling', 'Hand-building, sculpting and pottery basics.', '6–15 yrs', 'Group'],
      ['Calligraphy', 'Devanagari and Roman lettering, brush and pen.', '9–17 yrs', 'Group'],
      ['Bharatanatyam', 'Adavus, mudras and classical repertoire.', '6–17 yrs', 'Group'],
      ['Kathak', 'Tatkar, chakkars, abhinaya and rhythm.', '6–17 yrs', 'Group'],
      ['Folk Dance', 'Regional forms — garba, bhangra, lavani and more.', '6–17 yrs', 'Group'],
      ['Western Dance', 'Hip-hop, contemporary and freestyle choreography.', '7–17 yrs', 'Group'],
      ['Theatre', 'Voice, improvisation, stagecraft and performance.', '8–17 yrs', 'Group'],
      ['Yoga', 'Asanas, breathing and flexibility for young bodies.', '6–17 yrs', 'Group'],
      ['Gymnastics', 'Flexibility, balance, tumbling and floor work.', '6–15 yrs', 'Group'],
      ['Martial Arts', 'Karate, taekwondo and self-defence fundamentals.', '6–17 yrs', 'Group'],
    ],
  },
};

const cat = DATA[document.body.dataset.cat];
document.getElementById('cat-title').textContent = cat.title;
document.getElementById('cat-intro').textContent = cat.intro;
document.title = `${cat.title} — Junnun.in`;

document.getElementById('grid').innerHTML = cat.items.map(([n, d, age, fmt], i) => `
  <article class="item" style="animation-delay:${(i * 45)}ms">
    <h3>${n}</h3>
    <p>${d}</p>
    <div class="meta">
      <span class="pill">${age}</span>
      <span class="pill">${fmt}</span>
      <span class="pill fee">Minimal fee</span>
    </div>
  </article>`).join('');
