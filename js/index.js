function navTop() {
  document.querySelectorAll(".gnb > li").forEach((li) => {
    li.onmouseenter = () => {
      const sub = li.querySelector(".sub");
      if (sub) sub.style.display = "block";
    };

    li.onmouseleave = () => {
      const sub = li.querySelector(".sub");
      if (sub) sub.style.display = "none";
    };
  });
}

function initAll() {
  navTop();
}

initAll();


/* ===== s2 animation ===== */

const s2 = document.querySelector('#s2');

if (s2) {
  const targets = [
    'imgbanner1_1.png',
    'imgbanner1_2.png',
    'imgbanner1_3.png',
    'imgbanner1_4.png'
  ];

  const items = [
    ...targets.map(name =>
      [...s2.querySelectorAll('.scroll-item')].find(item =>
        item.querySelector('img')?.src.includes(name)
      )
    ),
    s2.querySelector('.content1'),
    s2.querySelector('.content2')
  ].filter(Boolean);

  items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.35}s`;
  });

  const s2Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        items.forEach(item => item.classList.add('show'));
      } else {
        items.forEach(item => item.classList.remove('show'));
      }
    });
  }, {
    threshold: 0.4
  });

  s2Observer.observe(s2);
}


/* ===== s3 animation ===== */

const s3 = document.querySelector('#s3');

if (s3) {
  const s3Items = [
    s3.querySelector('.left-in img'),
    s3.querySelector('.right-in img'),
    s3.querySelector('.content h2'),
    s3.querySelector('.content h3'),
    s3.querySelector('.content h4'),
    s3.querySelector('.content p')
  ].filter(Boolean);

  s3Items.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.35}s`;
  });

  const s3Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        s3Items.forEach(item => item.classList.add('show'));
      } else {
        s3Items.forEach(item => item.classList.remove('show'));
      }
    });
  }, {
    threshold: 0.4
  });

  s3Observer.observe(s3);
}

/* ===== s4 wave text ===== */

const waveText = document.querySelector('.wave-text');

if (waveText) {
  const waveObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        waveText.classList.add('active');
      }else {
        waveText.classList.remove('active');
      }
    });
  }, {
    threshold: 0.4
  });

  waveObserver.observe(waveText);
}