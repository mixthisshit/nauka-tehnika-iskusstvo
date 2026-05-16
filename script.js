const masters = [
  {artist:"Уильям Тёрнер", yr:"1844", ttl:"«Дождь, пар и скорость»",
    img:"img/turner-rain-steam-speed.jpg",
    desc:"Паровоз едва угадывается в вихре стихии — первый «абстрактный» образ техники. Предшественник импрессионизма."},
  {artist:"Клод Моне", yr:"1877", ttl:"«Вокзал Сен-Лазар»",
    img:"img/monet-gare-saint-lazare.jpg",
    desc:"Пар, сталь и свет растворяют архитектуру — живопись имитирует воздух индустриального города."},
  {artist:"Эдуард Мане", yr:"1873", ttl:"«Железная дорога»",
    img:"img/manet-le-chemin-de-fer.jpg",
    desc:"Паровоз остаётся за кадром, мы видим только решётку моста и клубы пара — техника становится фоном повседневности."},
  {artist:"Гюстав Кайботт", yr:"1876", ttl:"«Мост Европы»",
    img:"img/caillebotte-pont-de-europe.jpg",
    desc:"Жёсткая геометрия стальных ферм противопоставлена фигурам людей — эстетика индустриального конструктивизма."},
  {artist:"Камиль Писсарро", yr:"1871", ttl:"«Lordship Lane Station, Dulwich»",
    img:"img/pissarro-lordship-lane.jpg",
    desc:"Паровоз органично вписан в сельский пейзаж — техника становится частью природы."},
  {artist:"Эдгар Дега", yr:"1869", ttl:"«Скачки в провинции»",
    img:"img/degas-races-countryside.jpg",
    desc:"Лошади как доиндустриальный мир — живая мускульная сила, аристократический досуг — на фоне нового ритма города."},
];

document.getElementById('mastersGrid').innerHTML = masters.map(m => `
  <article class="mw">
    <div class="ph">
      <img src="${m.img}" alt="${m.artist}. ${m.ttl}">
    </div>
    <div class="meta">${m.artist}<span class="yr">· ${m.yr}</span></div>
    <div class="ttl">${m.ttl}</div>
    <p class="desc">${m.desc}</p>
  </article>
`).join('');


const artists = [
  {
    name:"Клод Моне",
    yrs:"1840 — 1926 · Франция",
    bio:"Один из основателей импрессионизма. Самый последовательный и плодовитый сторонник философии импрессионизма; апологет света, воздуха и пленэрной живописи. Термин «импрессионизм» происходит от названия его картины «Впечатление. Восходящее солнце» (1872).",
    works:[
      {t:"Впечатление. Восход солнца", img:"img/monet-impression-sunrise.jpg"},
      {t:"Кувшинки", img:"img/monet-water-lilies-reflections.jpg"},
      {t:"Стога сена", img:"img/monet-haystacks.jpg"},
      {t:"Руанский собор", img:"img/monet-rouen-cathedral-1894.jpg"},
      {t:"Пляж в Сент-Адрессе"},
      {t:"Дом Моне в Аржантее"},
    ]
  },
  {
    name:"Пьер Огюст Ренуар",
    yrs:"1841 — 1919 · Франция",
    bio:"Живописец, рисовальщик и скульптор. Известен прежде всего как мастер светского портрета и картин в жанре ню. Первым из импрессионистов снискал успех у состоятельных парижан, разработав лёгкий стиль и особую технику.",
    works:[
      {t:"Танцы в Буживале", img:"img/renoir-dance-at-bougival.jpg"},
      {t:"Бал в Мулен де ла Галетт", img:"img/renoir-moulin-de-la-galette.jpg"},
      {t:"Жанна Самари", img:"img/renoir-jeanne-samary.png"},
      {t:"Завтрак гребцов", img:"img/renoir-boating-party.jpg"},
      {t:"Девочка с лейкой", img:"img/renoir-girl-with-watering-can.jpg"},
    ]
  },
  {
    name:"Эдгар Дега",
    yrs:"1834 — 1917 · Франция",
    bio:"Один из виднейших представителей импрессионистского движения. Виртуоз передачи сложного движения. Балерины, скачки и сцены из театральной жизни показывают его интерес к жесту, позе и мгновенному движению.",
    works:[
      {t:"Голубые танцовщицы", img:"img/degas-blue-dancers.jpg"},
      {t:"Танцевальный класс", img:"img/degas-dance-class.jpg"},
      {t:"После ванны", img:"img/degas-after-the-bath.jpg"},
      {t:"Абсент", img:"img/degas-absinthe.jpg"},
      {t:"Звезда"},
      {t:"Гладильщицы"},
    ]
  },
  {
    name:"Камиль Писсарро",
    yrs:"1830 — 1903 · Франция · Дания",
    bio:"Один из первых и наиболее последовательных представителей импрессионизма и неоимпрессионизма. Единственный участник всех восьми групповых выставок импрессионистов с 1874 по 1886 год.",
    works:[
      {t:"Бульвар Монмартр", img:"img/pissarro-boulevard-montmartre.jpg"},
      {t:"Lordship Lane Station", img:"img/pissarro-lordship-lane.jpg"},
      {t:"Авеню Оперы. Солнечное зимнее утро", img:"img/pissarro-avenue-opera.jpg"},
      {t:"Ветряная мельница в Кноке"},
    ]
  },
  {
    name:"Альфред Сислей",
    yrs:"1839 — 1899 · Франция / Англия",
    bio:"Французский живописец-пейзажист английского происхождения; самый последовательный из импрессионистов в стремлении писать пейзажи на открытом воздухе. Известна серия картин Темзы и пейзажи Море-сюр-Луэн.",
    works:[
      {t:"Опушка леса в Фонтенбло"},
      {t:"Море-сюр-Луан"},
      {t:"Station at Sèvres"},
      {t:"Bridge at Villeneuve-la-Garenne"},
    ]
  },
  {
    name:"Эдуард Мане",
    yrs:"1832 — 1883 · Франция",
    bio:"Один из родоначальников импрессионизма; предтеча и идейный вдохновитель движения. Не был импрессионистом в строгом смысле, но его смелая манера письма и интерес к современной жизни сильно повлияли на молодых художников.",
    works:[
      {t:"Бар в «Фоли-Бержер»", img:"img/manet-folies-bergere.jpg"},
      {t:"Завтрак на траве", img:"img/manet-luncheon-on-the-grass.jpg"},
      {t:"Олимпия", img:"img/manet-olympia.jpg"},
      {t:"В лодке", img:"img/manet-boating.jpg"},
      {t:"На пляже"},
    ]
  },
  {
    name:"Берта Моризо",
    yrs:"1841 — 1895 · Франция",
    bio:"Одна из четырёх «великих дам» импрессионизма. В 1874 году примкнула к группе «отверженных» и приняла участие в первой выставке импрессионистов в студии фотографа Надара.",
    works:[
      {t:"Колыбель", img:"img/morisot-cradle.jpg"},
      {t:"Женщина за туалетом", img:"img/morisot-woman-at-toilette.jpg"},
      {t:"Развешивание стираного белья"},
      {t:"Маленькая девочка с куклой"},
    ]
  },
  {
    name:"Мэри Кассат",
    yrs:"1844 — 1926 · США / Франция",
    bio:"Американская художница и одна из четырёх «великих дам» импрессионизма. Прожила большую часть жизни во Франции, была дружна с Эдгаром Дега. Мотивы её полотен — социальная и личная жизнь женщин, связь матерей и детей.",
    works:[
      {t:"Купание ребёнка", img:"img/cassatt-childs-bath.jpg"},
      {t:"Сирень в окне", img:"img/cassatt-lilacs-window.jpg"},
      {t:"Материнские ласки"},
      {t:"Чаепитие"},
    ]
  },
];

document.getElementById('artistGrid').innerHTML = artists.map((a) => `
  <article class="artist">
    <div class="info">
      <h4>${a.name}</h4>
      <div class="yrs">${a.yrs}</div>
      <p>${a.bio}</p>
      <div class="works">
        <div class="lbl">Ключевые работы</div>
        <ul>${a.works.map(w => `<li>${w.t}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="imgs">
      ${a.works.slice(0,4).map((w) => `
        <div class="ph">
          ${w.img
            ? `<img src="${w.img}" alt="${a.name}. ${w.t}">`
            : `<div class="ph-inner"><div class="ttl">«${w.t}»</div></div>`}
        </div>
      `).join('')}
    </div>
  </article>
`).join('');


const links = document.querySelectorAll('.topnav ol li');
document.querySelectorAll('.topnav ol li a').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href.startsWith('#')) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      window.scrollTo({top: el.offsetTop - 70, behavior:'smooth'});
    }
  });
});

const sections = [...document.querySelectorAll('section[id]')];
window.addEventListener('scroll', () => {
  const y = window.scrollY + 140;
  let cur = sections[0].id;
  for (const s of sections) if (s.offsetTop <= y) cur = s.id;
  links.forEach(li => {
    const a = li.querySelector('a');
    li.classList.toggle('active', a.getAttribute('href') === '#'+cur);
  });
}, {passive:true});
