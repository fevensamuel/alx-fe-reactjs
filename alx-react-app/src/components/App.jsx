// src/App.jsx

import Header from './Header';      // Import Header
import MainContent from './MainContent';  // Import MainContent
import Footer from './Footer';      // Import Footer

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
