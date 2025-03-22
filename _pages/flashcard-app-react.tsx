import React, { useState } from 'react';

const Flashcard = ({ front, back, pronunciation, meaning, isFlipped, index, handleFlip }) => {
  return (
    <div 
      className="w-64 h-64 m-4 cursor-pointer"
      onClick={() => handleFlip(index)}
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-all duration-500"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div 
          className="absolute w-full h-full bg-blue-100 border-2 border-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl font-bold text-blue-800">{front}</div>
          <div className="text-sm text-blue-600 mt-2">Click to flip</div>
        </div>
        
        <div 
          className="absolute w-full h-full bg-green-100 border-2 border-green-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-4"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-4xl font-bold text-green-800">{back}</div>
          {pronunciation && <div className="text-sm text-green-700 mt-2">Pronunciation: {pronunciation}</div>}
          {meaning && <div className="text-sm text-green-700 mt-2">Meaning: {meaning}</div>}
          <div className="text-xs text-green-600 mt-2">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

const FlashcardSet = () => {
  const [currentCategory, setCurrentCategory] = useState("vowels");
  const [currentSubcategory, setCurrentSubcategory] = useState("all");
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);
  
  const handleFlip = (index) => {
    if (flippedCardIndex === index) {
      setFlippedCardIndex(null);
    } else {
      setFlippedCardIndex(index);
    }
  };
  
  const categories = {
    vowels: [
      { front: "ਅ", back: "अ", pronunciation: "a (as in 'about')" },
      { front: "ਆ", back: "आ", pronunciation: "ā (as in 'father')" },
      { front: "ਇ", back: "इ", pronunciation: "i (as in 'it')" },
      { front: "ਈ", back: "ई", pronunciation: "ī (as in 'meet')" },
      { front: "ਉ", back: "उ", pronunciation: "u (as in 'put')" },
      { front: "ਊ", back: "ऊ", pronunciation: "ū (as in 'boot')" },
    ],
    consonants: [
      { front: "ਸ", back: "स", pronunciation: "sa" },
      { front: "ਹ", back: "ह", pronunciation: "ha" },
      { front: "ਕ", back: "क", pronunciation: "ka" },
      { front: "ਖ", back: "ख", pronunciation: "kha" },
      { front: "ਗ", back: "ग", pronunciation: "ga" },
      { front: "ਘ", back: "घ", pronunciation: "gha" },
    ],
    vowelSigns: [
      { front: "ਾ (ਕਾਨਾ)", back: "ा (कानां)", pronunciation: "ā" },
      { front: "ਿ (ਸਿਹਾਰੀ)", back: "ि (इकार)", pronunciation: "i" },
      { front: "ੀ (ਬਿਹਾਰੀ)", back: "ी (ईकार)", pronunciation: "ī" },
      { front: "ੁ (ਅੌਂਕੜ)", back: "ु (उकार)", pronunciation: "u" },
      { front: "ੂ (ਦੁਲੈਂਕੜ)", back: "ू (ऊकार)", pronunciation: "ū" },
      { front: "ੇ (ਲਾਂਵਾਂ)", back: "े (एकार)", pronunciation: "e" },
    ],
    words: {
      all: [
        { front: "ਪੰਜਾਬੀ", back: "पंजाबी", meaning: "Punjabi" },
        { front: "ਹਿੰਦੀ", back: "हिंदी", meaning: "Hindi" },
        { front: "ਗੁਰੂ", back: "गुरु", meaning: "Teacher" },
        { front: "ਸਿੱਖ", back: "सिख", meaning: "Sikh" },
        { front: "ਪਾਣੀ", back: "पानी", meaning: "Water" },
        { front: "ਦੁੱਧ", back: "दूध", meaning: "Milk" },
      ],
      places: [
        { front: "ਅੰਮ੍ਰਿਤਸਰ", back: "अमृतसर", meaning: "Amritsar" },
        { front: "ਦਿੱਲੀ", back: "दिल्ली", meaning: "Delhi" },
        { front: "ਲੁਧਿਆਣਾ", back: "लुधियाना", meaning: "Ludhiana" },
        { front: "ਜਲੰਧਰ", back: "जलंधर", meaning: "Jalandhar" },
        { front: "ਚੰਡੀਗੜ੍ਹ", back: "चंडीगढ़", meaning: "Chandigarh" },
        { front: "ਪਟਿਆਲਾ", back: "पटियाला", meaning: "Patiala" },
      ],
      food: [
        { front: "ਛੋਲੇ", back: "छोले", meaning: "Chickpeas curry" },
        { front: "ਪਰਾਂਠਾ", back: "पराठा", meaning: "Paratha" },
        { front: "ਪਨੀਰ", back: "पनीर", meaning: "Cottage cheese" },
        { front: "ਲੱਸੀ", back: "लस्सी", meaning: "Buttermilk" },
        { front: "ਪਕੌੜੇ", back: "पकौड़े", meaning: "Fritters" },
        { front: "ਦਾਲ", back: "दाल", meaning: "Lentils" },
      ],
      names: [
        { front: "ਗੁਰਪ੍ਰੀਤ", back: "गुरप्रीत", meaning: "Gurpreet" },
        { front: "ਹਰਪ੍ਰੀਤ", back: "हरप्रीत", meaning: "Harpreet" },
        { front: "ਸੁਖਵਿੰਦਰ", back: "सुखविंदर", meaning: "Sukhwinder" },
        { front: "ਅਮਨਦੀਪ", back: "अमनदीप", meaning: "Amandeep" },
        { front: "ਜਸਪ੍ਰੀਤ", back: "जसप्रीत", meaning: "Jaspreet" },
        { front: "ਮਨਪ੍ਰੀਤ", back: "मनप्रीत", meaning: "Manpreet" },
      ],
      nature: [
        { front: "ਪਹਾੜ", back: "पहाड़", meaning: "Mountain" },
        { front: "ਦਰਿਆ", back: "दरिया", meaning: "River" },
        { front: "ਬਾਰਿਸ਼", back: "बारिश", meaning: "Rain" },
        { front: "ਸੂਰਜ", back: "सूरज", meaning: "Sun" },
        { front: "ਚੰਦ", back: "चंद", meaning: "Moon" },
        { front: "ਤਾਰੇ", back: "तारे", meaning: "Stars" },
      ],
      animals: [
        { front: "ਕੁੱਤਾ", back: "कुत्ता", meaning: "Dog" },
        { front: "ਬਿੱਲੀ", back: "बिल्ली", meaning: "Cat" },
        { front: "ਸ਼ੇਰ", back: "शेर", meaning: "Lion" },
        { front: "ਹਾਥੀ", back: "हाथी", meaning: "Elephant" },
        { front: "ਗਾਂ", back: "गाय", meaning: "Cow" },
        { front: "ਬਾਂਦਰ", back: "बंदर", meaning: "Monkey" },
      ]
    }
  };

  // Reset the flipped card when changing categories or subcategories
  const changeCategory = (category) => {
    setCurrentCategory(category);
    setFlippedCardIndex(null);
    if (category === 'words') {
      setCurrentSubcategory('all');
    } else {
      setCurrentSubcategory(null);
    }
  };

  const changeSubcategory = (subcategory) => {
    setCurrentSubcategory(subcategory);
    setFlippedCardIndex(null);
  };

  // Get the cards to display based on current category and subcategory
  const getDisplayCards = () => {
    if (currentCategory === 'words') {
      return categories.words[currentSubcategory] || [];
    }
    return categories[currentCategory] || [];
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Gurmukhi to Hindi Flashcards</h1>
      
      <div className="flex justify-center mb-4 flex-wrap">
        <button 
          className={`px-3 py-1 m-1 rounded-lg ${currentCategory === 'vowels' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => changeCategory('vowels')}
        >
          Vowels (ਸਵਰ)
        </button>
        <button 
          className={`px-3 py-1 m-1 rounded-lg ${currentCategory === 'consonants' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => changeCategory('consonants')}
        >
          Consonants (ਵਿਅੰਜਨ)
        </button>
        <button 
          className={`px-3 py-1 m-1 rounded-lg ${currentCategory === 'vowelSigns' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => changeCategory('vowelSigns')}
        >
          Vowel Signs (ਮਾਤਰਾਂ)
        </button>
        <button 
          className={`px-3 py-1 m-1 rounded-lg ${currentCategory === 'words' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => changeCategory('words')}
        >
          Words
        </button>
      </div>
      
      {/* Subcategories for words */}
      {currentCategory === 'words' && (
        <div className="flex justify-center mb-4 flex-wrap">
          <button 
            className={`px-2 py-1 m-1 text-sm rounded-lg ${currentSubcategory === 'all' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => changeSubcategory('all')}
          >
            All Words
          </button>
          <button 
            className={`px-2 py-1 m-1 text-sm rounded-lg ${currentSubcategory === 'places' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => changeSubcategory('places')}
          >
            Places
          </button>
          <button 
            className={`px-2 py-1 m-1 text-sm rounded-lg ${currentSubcategory === 'food' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => changeSubcategory('food')}
          >
            Food
          </button>
          <button 
            className={`px-2 py-1 m-1 text-sm rounded-lg ${currentSubcategory === 'names' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => changeSubcategory('names')}
          >
            Names
          </button>
          <button 
            className={`px-2 py-1 m-1 text-sm rounded-lg ${currentSubcategory === 'nature' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => changeSubcategory('nature')}
          >
            Nature
          </button>
          <button 
            className={`px-2 py-1 m-1 text-sm rounded-lg ${currentSubcategory === 'animals' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => changeSubcategory('animals')}
          >
            Animals
          </button>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center">
        {getDisplayCards().map((card, index) => (
          <Flashcard 
            key={index}
            index={index}
            front={card.front} 
            back={card.back} 
            pronunciation={card.pronunciation} 
            meaning={card.meaning}
            isFlipped={flippedCardIndex === index}
            handleFlip={handleFlip}
          />
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
        <h2 className="text-lg font-bold text-yellow-800 mb-2">Study Tips</h2>
        <ul className="list-disc pl-5 text-yellow-800 text-sm">
          <li>Click on a card to flip it and see the answer</li>
          <li>Use the category buttons to switch between different sets</li>
          <li>For words, use the subcategory buttons to focus on themes</li>
          <li>Practice daily for better retention</li>
        </ul>
      </div>
    </div>
  );
};

export default FlashcardSet;