// Brand-story
const story = document.querySelectorAll('.story');

if (story.length > 0) {
  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2
  });

  story.forEach((item) => {
    storyObserver.observe(item);
  });
}


// Brand-store
const image = document.querySelectorAll('.store');
const mapUrl = document.querySelector('#map-frame');

if (image.length > 0 && mapUrl) {
  image.forEach(img => {
    img.addEventListener('click', () => {
      mapUrl.src = img.dataset.map;
    });
  });
}


// Menu
const menu = document.querySelector('.tab');
const tabli = document.querySelectorAll('.tab li');
const tabContents = document.querySelectorAll('.tabContents > div');

if (menu && tabli.length > 0 && tabContents.length > 0) {
  menu.addEventListener('click', (e) => {
    const li = e.target.closest('li');

    if (!li) return;

    const id = li.dataset.alt;

    tabli.forEach(el => {
      el.classList.toggle('active', el === li);
    });

    tabContents.forEach(p => {
      p.classList.toggle('active', p.id === id);
    });
  });
}


// Partnership dropdown
const dropdownBox = document.querySelector('.dropdown-box');

if (dropdownBox) {
  const dropdownBtn = dropdownBox.querySelector('.dropdown-btn');
  const selectedText = dropdownBox.querySelector('.selected-text');
  const dropdownItems = dropdownBox.querySelectorAll('.dropdown-list li');
  const regionInput = document.querySelector('#region');

  if (dropdownBtn && selectedText && dropdownItems.length > 0 && regionInput) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownBox.classList.toggle('active');
    });

    dropdownItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();

        selectedText.textContent = item.dataset.value;
        regionInput.value = item.dataset.value;

        dropdownBox.classList.add('selected');
        dropdownBox.classList.remove('active');
      });
    });

    document.addEventListener('click', () => {
      dropdownBox.classList.remove('active');
    });
  }
}