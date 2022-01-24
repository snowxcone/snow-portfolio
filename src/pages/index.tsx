import React, { useState } from 'react';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
import { Card } from '../components';
import '../static/styles/index.css';
import { SnowTv } from '../components/SnowTv';
import { Playground } from '../pages/playground';

interface Content {
  title: string,
  content: JSX.Element,
}

const App = () => {
  const defaultStyle = "cursor-pointer";
  const focusedStyle = "text-blue-600 font-bold " + defaultStyle;
  const delay = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const [currId, setCurrId] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const allTvContent: Content[] = [
    {
      title: "About me", content: <Card>I'm snow</Card>
    },
    { title: "Playground", content: <Playground /> },
    { title: "third heading", content: <Card>yay</Card> }
  ]

  return (
    <div className='flex h-screen w-screen bg-clouds bg-cover relative' onWheel={async (e) => {
      if (!isScrolling) {
        if (e.deltaY > 0 && currId < allTvContent.length) {
          setIsScrolling(true);
          setCurrId(prevState => prevState + 1);
          delay(1000).then(() => setIsScrolling(false))
        } else if (e.deltaY < 0 && currId > 0) {
          setIsScrolling(true);
          setCurrId(prevState => prevState - 1);
          await delay(1000);
          setIsScrolling(false);
        }
      }
    }}>
      <div className='flex flex-col w-screen-2/3 align-middle justify-center p-5'>
        <SnowTv className="w-auto h-36 stroke-blue-500 drop-shadow-xl" />
        <div className='w-full h-96 border-r-2/5 border-blue-500 rounded-xl '>
          {allTvContent[currId].content}
        </div>
      </div>
      <div className='flex flex-grow justify-center'>
        <ul className='flex flex-col justify-center'>
          {allTvContent.map((el, idx) => (
            <li key={el.title} className={clsx(defaultStyle, currId === idx && focusedStyle)} onClick={() => { setCurrId(idx) }}>{el.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
