  // Slider'daki resimlere tıklandığında kart bölümüne kayma işlemi
  const slaytResimleri = document.querySelectorAll('.carousel-item img');
  const kartBolumu = document.querySelectorAll('.card');

  slaytResimleri[0].addEventListener('click', () => {
      kartBolumu[3].scrollIntoView({ behavior: 'smooth' });
  });

  slaytResimleri[1].addEventListener('click', () => {
      kartBolumu[0].scrollIntoView({ behavior: 'smooth' });
  });

  slaytResimleri[2].addEventListener('click', () => {
      kartBolumu[1].scrollIntoView({ behavior: 'smooth' });
  });

  slaytResimleri[3].addEventListener('click', () => {
      kartBolumu[2].scrollIntoView({ behavior: 'smooth' });
  });