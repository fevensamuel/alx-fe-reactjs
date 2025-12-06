// src/App.jsx
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // Import the UserProfile component
import Counter from './components/Counter';


function App() {
  return (
    <div>
<h1>Counter Application</h1>
      {/* Use the Counter component here */}
      <Counter />

      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Footer />
    </div>
  );
}

export default App;
