import React, { useState } from 'react';
import './header-vertical.css'
import useStore from '../section-productos/useProducts';

const data = [
    { id: 2, title: 'Processors', list: ['Processors AMD', 'Processors INTEL'] },
    { id: 3, title: 'Motherboards', list: ['Motherboards AMD', 'Motherboards INTEL'] },
    { id: 4, title: 'Graphics Cards', list: ['Graphics Cards AMD', 'Graphics Cards INTEL'] },
    { id: 5, title: 'RAM Memory', list: ['Ram Memory', 'Ram Memory Notebooks'] },
    { id: 6, title: 'Storage', list: ['HDD', 'SDD', 'External Storage'] },
    { id: 7, title: 'Cooling', list: ['Cooler Fan', 'Cooler CPU', 'Thermal Phaste'] },
    { id: 8, title: 'Cases', list: ['Cases'] },
    { id: 9, title: 'Power Supplies', list: ['Power Supplies'] },
    { id: 10, title: 'Monitors and TVs', list: ['Monitors', 'TVs'] },
    { id: 11, title: 'Peripherals', list: ['Headphones', 'Keyboards', 'Mouse', 'Microphones', 'Speakers'] },
    // ...otros datos
  ];

function HeaderVertical() {
  const {handleFilterProducts, Mode , BarMenu} = useStore();
  const [activeTitle, setActiveTitle] = useState(null);

  const toggleList = (titleId) => {
    setActiveTitle(prevActiveTitle => (prevActiveTitle === titleId ? null : titleId));
  };

  return (
    <header className={Mode ? (!BarMenu ? 'vertical-header': 'vertical-header showBar') : (!BarMenu ? 'vertical-header-dark': 'vertical-header-dark showBar')}>
      {data.map((item) => (
        <div key={item.id}>
          <div onClick={() => toggleList(item.id)} className="expandir">
            <h3 className="vertical-header-div-h3">{item.title}</h3>
            <i className={`fi fi-rr-angle-small-${activeTitle === item.id ? 'up' : 'down'}`}></i>
          </div>
          {activeTitle === item.id && (
            <ul className="vertical-header-ul">
              {item.list.map((listItem, index) => (
                <li key={index} onClick={() => handleFilterProducts(listItem)} className="vertical-header-ul-li">
                  {listItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </header>
  );
}

export default HeaderVertical;
