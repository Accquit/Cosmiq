import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';

interface Planet {
  name: string;
  stats: {
    orbitSpeed: string;
    distanceFromSun: string;
    temperature: string;
    moons: number;
  };
  mythology: {
    god: string;
    description: string;
    origin: string;
  };
  astrology: {
    element: string;
    rulership: string;
    personality: string;
    influence: string;
  };
  affirmation: string;
  spotifyPlaylistId: string;
}

const planets: Planet[] = [
  {
    name: 'Mercury',
    stats: {
      orbitSpeed: '47.87 km/s',
      distanceFromSun: '57.9 million km',
      temperature: '167°C',
      moons: 0,
    },
    mythology: {
      god: 'Mercury (Hermes)',
      description: 'Roman messenger god of speed and communication',
      origin: 'Named after the fastest-moving planet in Roman mythology',
    },
    astrology: {
      element: 'Air/Earth',
      rulership: 'Gemini & Virgo',
      personality: 'Quick-thinking, communicative, analytical',
      influence: 'Governs communication, travel, and mental processes',
    },
    affirmation: 'Today you burn like Mercury — swift and unstoppable.',
    spotifyPlaylistId: '37i9dQZF1DX0XUsuxWHRQd',
  },
  {
    name: 'Venus',
    stats: {
      orbitSpeed: '35.02 km/s',
      distanceFromSun: '108.2 million km',
      temperature: '464°C',
      moons: 0,
    },
    mythology: {
      god: 'Venus (Aphrodite)',
      description: 'Roman goddess of love and beauty',
      origin: 'Named after the brightest celestial object after the Sun and Moon',
    },
    astrology: {
      element: 'Earth/Water',
      rulership: 'Taurus & Libra',
      personality: 'Loving, artistic, harmonious, sensual',
      influence: 'Rules love, beauty, relationships, and material pleasures',
    },
    affirmation: 'Channel Venus energy — radiate love and magnetic attraction.',
    spotifyPlaylistId: '37i9dQZF1DX4sWSpwq3LiO',
  },
  {
    name: 'Earth',
    stats: {
      orbitSpeed: '29.78 km/s',
      distanceFromSun: '149.6 million km',
      temperature: '15°C',
      moons: 1,
    },
    mythology: {
      god: 'Gaia (Terra)',
      description: 'Greek primordial goddess of Earth',
      origin: 'The only planet not named after a Roman/Greek deity',
    },
    astrology: {
      element: 'Earth',
      rulership: 'All life and nature',
      personality: 'Nurturing, grounded, life-giving, balanced',
      influence: 'Foundation of all earthly experiences and material reality',
    },
    affirmation: 'Ground yourself like Earth — balanced, nurturing, alive.',
    spotifyPlaylistId: '37i9dQZF1DX4UtSsGT1Sbe',
  },
  {
    name: 'Mars',
    stats: {
      orbitSpeed: '24.07 km/s',
      distanceFromSun: '227.9 million km',
      temperature: '-65°C',
      moons: 2,
    },
    mythology: {
      god: 'Mars (Ares)',
      description: 'Roman god of war and courage',
      origin: 'Named for its red color, resembling blood and warfare',
    },
    astrology: {
      element: 'Fire',
      rulership: 'Aries & Scorpio',
      personality: 'Aggressive, passionate, courageous, determined',
      influence: 'Governs action, desire, conflict, and physical energy',
    },
    affirmation: 'Embrace Mars courage — be bold, fierce, unstoppable.',
    spotifyPlaylistId: '37i9dQZF1DX76Wlfdnj7AP',
  },
  {
    name: 'Jupiter',
    stats: {
      orbitSpeed: '13.07 km/s',
      distanceFromSun: '778.5 million km',
      temperature: '-110°C',
      moons: 79,
    },
    mythology: {
      god: 'Jupiter (Zeus)',
      description: 'Roman king of gods, ruler of the sky',
      origin: 'Named after the supreme deity due to its massive size',
    },
    astrology: {
      element: 'Fire',
      rulership: 'Sagittarius & Pisces',
      personality: 'Expansive, optimistic, wise, philosophical',
      influence: 'Rules growth, wisdom, higher learning, and good fortune',
    },
    affirmation: 'Expand like Jupiter — think big, lead with wisdom.',
    spotifyPlaylistId: '37i9dQZF1DX4dyzvuaRJ0n',
  },
  {
    name: 'Saturn',
    stats: {
      orbitSpeed: '9.68 km/s',
      distanceFromSun: '1.43 billion km',
      temperature: '-140°C',
      moons: 82,
    },
    mythology: {
      god: 'Saturn (Cronus)',
      description: 'Roman god of time and agriculture',
      origin: 'Named after the god of time due to its slow orbital period',
    },
    astrology: {
      element: 'Earth',
      rulership: 'Capricorn & Aquarius',
      personality: 'Disciplined, responsible, structured, patient',
      influence: 'Governs discipline, karma, lessons, and life structure',
    },
    affirmation: 'Master time like Saturn — patient, disciplined, enduring.',
    spotifyPlaylistId: '37i9dQZF1DX3YSRoSdA634',
  },
  {
    name: 'Uranus',
    stats: {
      orbitSpeed: '6.80 km/s',
      distanceFromSun: '2.87 billion km',
      temperature: '-195°C',
      moons: 27,
    },
    mythology: {
      god: 'Uranus (Ouranos)',
      description: 'Greek primordial god of the sky',
      origin: 'First planet discovered in modern times, named after Greek sky god',
    },
    astrology: {
      element: 'Air',
      rulership: 'Aquarius',
      personality: 'Revolutionary, innovative, eccentric, independent',
      influence: 'Rules innovation, rebellion, sudden changes, and awakening',
    },
    affirmation: 'Break free like Uranus — innovate, rebel, transform.',
    spotifyPlaylistId: '37i9dQZF1DX0vHZ8elq0UK',
  },
  {
    name: 'Neptune',
    stats: {
      orbitSpeed: '5.43 km/s',
      distanceFromSun: '4.50 billion km',
      temperature: '-200°C',
      moons: 14,
    },
    mythology: {
      god: 'Neptune (Poseidon)',
      description: 'Roman god of the sea and storms',
      origin: 'Named after the sea god due to its deep blue color',
    },
    astrology: {
      element: 'Water',
      rulership: 'Pisces',
      personality: 'Mystical, intuitive, dreamy, spiritual',
      influence: 'Governs spirituality, dreams, illusions, and psychic abilities',
    },
    affirmation: 'Flow like Neptune — deep, mysterious, powerful.',
    spotifyPlaylistId: '37i9dQZF1DX3Sp5jK4E6YD',
  },
];

const SolarSystem: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handler for Spline object clicks
  const handleSplineMouseDown = (e: any) => {
    if (e.target && e.target.name) {
      // Find the planet in your array by name (case-insensitive)
      const planet = planets.find(p => p.name.toLowerCase() === e.target.name.toLowerCase());
      if (planet) setSelectedPlanet(planet);
    }
  };

  const closePlanetPanel = () => {
    setSelectedPlanet(null);
  };

  return (
    <div className="w-full h-screen relative bg-cosmic-black">
      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-red-400 text-lg text-center">
            <p>{error}</p>
            <p className="text-sm mt-2">Please check your internet connection</p>
          </div>
        </div>
      )}

      {/* Spline 3D Solar System via React component */}
      <div className="w-full h-full">
        <Spline
          scene="https://prod.spline.design/h532oH-cspaWinGF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onMouseDown={handleSplineMouseDown}
        />
      </div>

      {/* Planet Info Panel */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            className="fixed right-0 top-0 h-full w-96 glass-panel p-6 z-10 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <button
              onClick={closePlanetPanel}
              className="absolute top-4 right-4 text-white hover:text-cosmic-blue-neon transition-colors"
            >
              ✕
            </button>

            <div className="mt-8">
              <h2 className="text-3xl font-serif-display text-white mb-2">
                {selectedPlanet.name}
              </h2>
              
              <div className="space-y-6">
                {/* Stats Section */}
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="text-cosmic-blue-neon font-semibold mb-3 flex items-center">
                    🔭 Cosmic Stats
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-cosmic-gray-light">Orbit Speed:</span>
                      <span className="text-white ml-2">{selectedPlanet.stats.orbitSpeed}</span>
                    </div>
                    <div>
                      <span className="text-cosmic-gray-light">Distance from Sun:</span>
                      <span className="text-white ml-2">{selectedPlanet.stats.distanceFromSun}</span>
                    </div>
                    <div>
                      <span className="text-cosmic-gray-light">Temperature:</span>
                      <span className="text-white ml-2">{selectedPlanet.stats.temperature}</span>
                    </div>
                    <div>
                      <span className="text-cosmic-gray-light">Moons:</span>
                      <span className="text-white ml-2">{selectedPlanet.stats.moons}</span>
                    </div>
                  </div>
                </div>

                {/* Mythology Section */}
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="text-cosmic-blue-neon font-semibold mb-3 flex items-center">
                    🧙‍♂️ Ancient Wisdom
                  </h3>
                  <p className="text-white font-semibold">{selectedPlanet.mythology.god}</p>
                  <p className="text-cosmic-gray-light text-sm mt-1">
                    {selectedPlanet.mythology.description}
                  </p>
                  <p className="text-cosmic-gray-light text-sm mt-2 italic">
                    Origin: {selectedPlanet.mythology.origin}
                  </p>
                </div>

                {/* Astrology Section */}
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="text-cosmic-blue-neon font-semibold mb-3 flex items-center">
                    ⭐ Astrological Influence
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-cosmic-gray-light">Element:</span>
                      <span className="text-white ml-2">{selectedPlanet.astrology.element}</span>
                    </div>
                    <div>
                      <span className="text-cosmic-gray-light">Rules:</span>
                      <span className="text-white ml-2">{selectedPlanet.astrology.rulership}</span>
                    </div>
                    <div>
                      <span className="text-cosmic-gray-light">Personality:</span>
                      <span className="text-white ml-2">{selectedPlanet.astrology.personality}</span>
                    </div>
                    <div className="mt-3">
                      <span className="text-cosmic-gray-light">Influence:</span>
                      <p className="text-white mt-1">{selectedPlanet.astrology.influence}</p>
                    </div>
                  </div>
                </div>

                {/* Affirmation Section */}
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="text-cosmic-blue-neon font-semibold mb-3 flex items-center">
                    ✨ Daily Affirmation
                  </h3>
                  <p className="text-white italic">"{selectedPlanet.affirmation}"</p>
                </div>

                {/* Spotify Section */}
                <div className="glass-panel p-4 rounded-lg">
                  <h3 className="text-cosmic-blue-neon font-semibold mb-3 flex items-center">
                    🎧 Cosmic Vibes
                  </h3>
                  <iframe
                    src={`https://open.spotify.com/embed/playlist/${selectedPlanet.spotifyPlaylistId}?utm_source=generator&theme=0`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating UI */}
      <div className="absolute top-6 left-6 z-10">
        <motion.div
          className="glass-panel px-4 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-white font-serif-display text-xl">COSMIQ</h1>
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-6 z-10">
        <motion.div
          className="glass-panel px-4 py-2 rounded-lg max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-cosmic-gray-light text-sm">
            Click on planets to explore their cosmic secrets
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarSystem;
