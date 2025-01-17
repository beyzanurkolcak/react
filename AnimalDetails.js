import React from 'react';
import { useParams } from 'react-router-dom';

function AnimalDetails() {
  const { id } = useParams(); // useParams hook'u ile id'yi alıyoruz
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return <div>Hayvan bulunamadı!</div>;
  }

  return (
    <div className="animal-details">
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
      <h3>Sahiplenmek İçin Numara: {Math.floor(Math.random() * 10000)}</h3>
      <p>Hayvanın detaylarını buradan inceleyebilirsiniz.</p>
    </div>
  );
}

export default AnimalDetails;
