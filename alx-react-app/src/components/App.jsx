// src/App.jsx

import Header from './components/Header';      // Import Header
import MainContent from './components/MainContent';  // Import MainContent
import Footer from './components/Footer';      // Import Footer

function App() {
  return (
    <div className="App">
      {/* Include the components in the specified order */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
