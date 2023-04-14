import { useState } from 'react';
import './App.css';

function App() {


  const [lists, setLists] = useState([
    {
      id: 1, title: 'Task List 1', items: [
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task']
    },


    {
      id: 2, title: 'Task List 2', items: [
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task']
    },

    {
      id: 3, title: 'Task List 3', items: [
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task',
        'Task name one this is a new task Task name one this is a new taskTask name one this is a new task']
    },
  ]);


  const [focusedListIndex, setFocusedListIndex] = useState(0);
const [focusedItemIndex, setFocusedItemIndex] = useState(0);

  const handleKeyDown = (event) => {
    const { key, shiftKey } = event;
    const currentList = lists[focusedListIndex];
    const currentListLength = currentList.items.length;

    switch (key) {
      case 'Tab':
        setFocusedListIndex((focusedListIndex + 1) % lists.length);
        setFocusedItemIndex(0);
        break;
      case 'Shift':
        break;
      case 'j':
        setFocusedItemIndex((focusedItemIndex + 1) % currentListLength);
        break;
      case 'k':
        setFocusedItemIndex((focusedItemIndex - 1 + currentListLength) % currentListLength);
        break;
      case 'h':
        setFocusedListIndex((focusedListIndex - 1 + lists.length) % lists.length);
        setFocusedItemIndex(0);
        break;
      case 'l':
        setFocusedListIndex((focusedListIndex + 1) % lists.length);
        setFocusedItemIndex(0);
        break;
      case 'g':
        if (shiftKey) {
          setFocusedItemIndex(currentListLength - 1);
        } else {
          setFocusedItemIndex(0);
        }
        break;
      default:
        break;
    }
  };



  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" className="bg-stone-800 h-screen w-full flex justify-center items-start p-20 gap-14">
      {
        lists.map((each, index) => {
          return (
            <div key={index} className={`w-1/3 bg-stone-900  p-8 rounded-xl ${index === focusedListIndex ? "border-slate-500 border-2 outline-none" : ""}`}>
              <h2 className='text-2xl text-white font-semibold mb-4'>{each.title}</h2>
              <div className=''>
                {
                  each.items.map((text, i) => {
                    return (
                      <div key={i} className={`flex text-slate-100 gap-4 items-start cursor-pointer p-6 rounded-lg ${i === focusedItemIndex ? "bg-stone-700" : ""}`}>
                        <div className='bg-red-700 w-2.5 h-2.5 rounded-full flex-none mt-2'></div>
                        <p className=''>{text}</p>
                        <p>1d</p>
                      </div>
                    )
                  })
                }
              </div>
              <input type='text' className='font-bold w-full bg-stone-800 p-3 rounded-xl outline-none text-white' placeholder='+ new task' />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

