import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
                

// Hayvan verisi (resim URL'leri ile)
const animals = [
  { id: 1, name: 'Köpek', description: 'Sadık bir dost.', image: 'https://example.com/dog.jpg' },
  { id: 2, name: 'Kedi', description: 'Bağımsız bir arkadaş.', image: 'https://example.com/cat.jpg' },
  { id: 3, name: 'Kuş', description: 'Rengarenk kanatlarıyla özgür.', image: 'https://example.com/bird.jpg' },
  { id: 4, name: 'Tavşan', description: 'Sıcakkanlı ve sevimli.', image: 'https://example.com/rabbit.jpg' },
  { id: 5, name: 'İguana', description: 'Tropikal bir evcil hayvan.', image: 'https://example.com/iguana.jpg' },
  { id: 6, name: 'Hamster', description: 'Küçük ama sevimli.', image: 'https://example.com/hamster.jpg' },
  { id: 7, name: 'Filen', description: 'Büyük ve güçlü.', image: 'https://example.com/elephant.jpg' },
  { id: 8, name: 'Kaplan', description: 'Güçlü ve asil.', image: 'https://example.com/tiger.jpg' },
  { id: 9, name: 'Zebra', description: 'Beyaz ve siyah çizgili güzel bir hayvan.', image: 'https://example.com/zebra.jpg' }
];

// Hayvan kartı bileşeni
function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      <Link to={`/animal/${animal.id}`}>
        <img src={animal.image} alt={animal.name} className="animal-image" />
        <h2>{animal.name}</h2>
        <p>{animal.description}</p>
      </Link>
    </div>
  );
}

// Hayvan detay sayfası
function AnimalDetails({ match }) {
  const animalId = match.params.id;
  const animal = animals.find((a) => a.id === parseInt(animalId));

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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hayvan Sahiplendirme Uygulaması</h1>
          <div className="animal-list">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </header>
        <Routes>
          <Route path="/animal/:id" element={<AnimalDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
