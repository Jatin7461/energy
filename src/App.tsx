import React, { RefObject } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {

  const container: RefObject<HTMLInputElement> = React.createRef()

  useGSAP(() => {

    gsap.timeline().from('.header', {
      x: -100,
      opacity: 0,
      stagger: 0.15
    }).from('.energy', {
      y: 50,
      opacity: 0
    })
      .from('.content', {
        y: 50,
        opacity: 0
      })
      .from('.detox', {
        y: -500,
        opacity: 0,
        duration: 1,
      })
      .fromTo('.detox', {
        y: 0,
      }, {
        y: -50,
        repeat: -1,
        yoyo: true,
        duration: 1.5
      },)

  }, { scope: container })

  return (
    <div ref={container}>
      <Header />
      <Content />
      <img src="detox.png" className='detox' alt="" />
    </div>
  );
}

export default App;
