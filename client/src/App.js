import React from 'react';
import Header from './components/Header';
import './index.css' // Import the index.css so that tailwind styles can be applied


function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <div className="mt-20"> {/* Added a margin-top of 20 so that the content does not overlap with the header */}
        <h1>Hello world</h1>
      </div>

    </div>
  );
}

export default App;