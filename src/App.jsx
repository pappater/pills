import React, { useState, useEffect, useRef } from 'react';
import { isTextPresent } from './utils';
import Content from './components/Content';
import Table from './components/Table';
import ExtraContent from './components/ExtraContent';

const App = () => {
  const [textArray, setTextArray] = useState([]);
  const [charsPerLine, setCharsPerLine] = useState(0);
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [highlightData, setHighlightData] = useState([]);
  const [renderedText, setRenderedText] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const highlightListRef = useRef(null);

  const testcharacters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz                              `;
  const charWidth = 10;
  const charHeight = 18;

  const generateInitialText = () => {
    const width = window.innerWidth * 0.995; // 80% of the width
    const height = window.innerHeight * 0.9;

    const calculatedCharsPerLine = Math.floor(width / charWidth);
    const calculatedNumberOfLines = Math.floor(height / charHeight);
    const totalChars = calculatedCharsPerLine * calculatedNumberOfLines;

    const initialTextArray = Array.from({ length: totalChars }, () => {
      return testcharacters[Math.floor(Math.random() * testcharacters.length)];
    });

    setCharsPerLine(calculatedCharsPerLine);
    setNumberOfLines(calculatedNumberOfLines);
    setTextArray(initialTextArray);
  };

  useEffect(() => {
    generateInitialText();

    const handleResize = () => {
      generateInitialText();
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setTextArray((prevTextArray) => {
        const newTextArray = [...prevTextArray];
        const updatesPerInterval = Math.floor(newTextArray.length * 0.05 + Math.floor(Math.random() * 20) + 1);

        for (let i = 0; i < updatesPerInterval; i++) {
          const randomPosition = Math.floor(Math.random() * newTextArray.length);
          newTextArray[randomPosition] = testcharacters[Math.floor(Math.random() * testcharacters.length)];
        }

        return newTextArray;
      });
    }, 300);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateHighlights = () => {
      let newHighlights = [];
      let newText = '';

      for (let i = 0; i < numberOfLines; i++) {
        const lineStart = i * charsPerLine;
        const lineEnd = lineStart + charsPerLine;
        const line = textArray.slice(lineStart, lineEnd).join('');
        const splits = line.split(' ');

        const highlightedLine = splits.map((word, index) => {
          if (isTextPresent(word)) {
            newHighlights.push({ line: i, wordIndex: index, text: word });
            return `<span class="highlight" style="background-color: red">${word}</span>`;
          }
          return word;
        }).join(' ');

        newText += highlightedLine;
      }

      if (newHighlights.length > 0) {
        setHighlightData(prevHighlights => [...prevHighlights, ...newHighlights]);
      }

      setRenderedText(newText);
    };

    calculateHighlights();
  }, [textArray, charsPerLine, numberOfLines]);

  useEffect(() => {
    if (highlightListRef.current) {
      highlightListRef.current.scrollTop = highlightListRef.current.scrollHeight;
    }
  }, [highlightData]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <h1 className='md:hidden text-9xl m-auto w-full text-center mt-10' >PILLS.</h1>
      {/* Header */}
      <div className={`grid md:grid-cols-4 gap-4 text-slate-300 md:m-20 m-10`} >
        <div className="col-span-3 h-[99vh] overflow-hidden">
          <div className="text-justify">
            <div
              dangerouslySetInnerHTML={{ __html: renderedText }}
            />
          </div>
        </div>

        <div className="flex flex-wrap max-h-screen overflow-y-auto text-justify" ref={highlightListRef}>
          {[...new Set(highlightData.map((highlight) => highlight.text.toUpperCase()))].map((uniqueText, index) => (
            <a key={index} className="text-slate-300 mr-4 flex-1 flex-wrap" href={`https://en.wikipedia.org/wiki/${uniqueText}`} target='_blank' rel='noopener noreferrer'>{uniqueText}</a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className='md:grid md:grid-cols-2 hidden'>
        {/* Sub content 1 */}
        <div
          className="header sticky top-0 text-[150px] font-extrabold h-screen bg-red-600 text-white"
        >
          PILLS.
        </div>

        {/* Sub content 2 */}
        <div className="bg-red-600">
          <div
            className="  transform translate-x-1/2 transition-transform  ease-smooth"
            style={{
              transform: `translate(-50%, -${scrollPosition* 0.1}px)`,
              zIndex: 50,
            }}
          >
            <div className="max-w-3xl mx-auto">
              <Content />
              <Table />
              <ExtraContent />
              <hr className="w-[30%] my-9 mx-auto bg-slate-800 rounded-md border-slate-800 h-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

