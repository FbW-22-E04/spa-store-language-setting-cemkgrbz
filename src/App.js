import { useState } from 'react';
import Header from "./components/Header"
import Content from "./components/Content"
import { Context } from "./Context";

function App() {

  const [language, setLanguage] = useState("DE")

  return (
    <Context.Provider value={[language, setLanguage]}>
      <div>
        <Header />
        <Content />
      </div>
    </Context.Provider>
  );
}

export default App;