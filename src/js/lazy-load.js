const images = document.querySelectorAll('.card__image');

const lazyLoad = targets => {
  const options = {
    rootMargin: '100px',
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.lazy;

        img.src = `${src}`;
        console.log(entry.target);
        console.log('Завантажую зображення');
        observer.unobserve(img);
      }
    });
  };

  const io = new IntersectionObserver(onEntry, options);
  targets.forEach(target => io.observe(target));
};

lazyLoad(images);
