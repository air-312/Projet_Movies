import { useState, useEffect } from 'react';
import '../sections/Section-one.css';
import cardOne from '../../assets/images/1.jpg';
import cardTwo from '../../assets/images/2.jpg';
import cardThree from '../../assets/images/3.jpeg';

const SectionOne = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [cardOne, cardTwo, cardThree];

  // Fonction pour aller à l'image suivante
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fonction pour aller à l'image précédente
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Fonction pour définir l'image active en cliquant sur un dot
  const setActiveDot = (index) => {
    setCurrentIndex(index);
  };

  // Utilisation de useEffect pour changer l'image toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change l'image toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage du composant
  }, []); // Le tableau vide [] garantit que l'intervalle est défini une seule fois au montage

  return (
    <section className="hero">
      <div className="carousel">
        <div className="carousel-content">
          <img src={images[currentIndex]} alt="Films en illimité" className="carousel-image" />
        </div>
        <div className="carousel-overlay">
          <h1>Films et séries en illimité, et bien plus</h1>
          <p>À partir de 5,99 €. Annulable à tout moment.</p>

          <div className="carousel-controls">
            <button className="control-button" onClick={goToPrevious}>❮</button>

            <div className="dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setActiveDot(index)}
                ></span>
              ))}
            </div>

            <button className="control-button" onClick={goToNext}>❯</button>
          </div>
        </div>
      </div>
      <div className="cta">
        <p>Prêt à regarder Movies ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
        <form>
          <input type="email" placeholder="Adresse e-mail" required />
          <button type="submit">Commencer</button>
        </form>
      </div>
    </section>
  );
};

export default SectionOne;
