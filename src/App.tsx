import { useState, useEffect } from 'react'
import logo from './logo.svg'
import Modeler from 'bpmn-js/lib/Modeler'

import './App.css'

import bpmnXML from './test.xml?raw';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const modeler = new Modeler({ container: '#canvas' });
    modeler.importXML(undefined);
    return () => {
      modeler.destroy?.();
    }
  }, []);
  return (
    <div id="canvas">
    </div>
  )
}

export default App
