/**
 * Author: XM
 * Date: 2022-05-02 11:46
 *
 */

// @ts-nocheck
import React, { useState, useRef, useEffect } from "react"
// @ts-ignore
import BPMNModeler from 'bpmn-js/lib/Modeler';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';
import initXML from './initial.bpmn?raw';

import Palette from './features/palette';
import ContextPad from './features/context-pad';


import './style.css';

interface BMPNRenderProps {
  xml?: string;
  onChange?: (xml: string) => void;
}


const BPMNRender: React.FC<BMPNRenderProps> = (props) => {

  const bpmnRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    bpmnRef.current = new BPMNModeler({
      container: containerRef.current,
      propertiesPanel: {
        parent: '.rb-container'
      },
      // modules: [],
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        {
          paletteProvider: [ 'type', Palette],
          contextPadProvider: ['type', ContextPad],
        }
      ],
      moddleExtensions: [],
    });

    bpmnRef.current.importXML(initXML).then(res => {
      console.log(res);
    }).catch(e => {
      console.error(e);
    });

    return () => {
      bpmnRef.current.destroy();
    }
  }, []);

  return(
    <div className='rb-container'>
      <div ref={containerRef} className='rb-canvas' />
    </div>
  )
}

export default BPMNRender
