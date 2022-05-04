/**
 * Author: XM
 * Date: 2022-05-04 12:18
 *
 */
import React, { useState, useEffect, useRef } from "react"
import Vue, { } from 'vue';;
import ElementUI from 'element-ui'

import Test from './test.vue';

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

function VueAdaptor(){

  const eleRef = useRef();

  const vueRef = useRef();
  const rootApp = useRef();

  useEffect(() => {
    vueRef.current = new Vue({
     //  el: eleRef.current,
      render: h => h(Test)
    });
    rootApp.current = vueRef.current.$mount(eleRef.current);

    return () => {
      // vueRef.current.$destroy();
    }
  }, []);
  
  return(
    <div style={{ height: '100%' }} ref={eleRef} />
  )
}

export default VueAdaptor
