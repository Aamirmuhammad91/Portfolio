import './works.scss';
import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Flexbox Project',
      desc: 'A small project in done making use of HTML, CSS and Flexbox ',
      img: './assets/flexbox.PNG',
      repo: 'https://github.com/Aamirmuhammad91/Flexbox-Project',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Master Thesis',
      desc: 'This is a link to my Master Thesis Work',
      img: './assets/F1271086-01.jpg',
      repo: 'https://github.com/Aamirmuhammad91/Final-Thesis',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'JavaScript Projects',
      desc: 'Repository with all JavaScript Project.',
      img: './assets/menu.PNG',
      repo: 'https://github.com/Aamirmuhammad91/JavaScript-Projects',
    },
  ];
  return (
    <div className='works' id='works'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a
                    href={d.repo}
                    target='_blank'
                    rel='flexbox project repository'
                  >
                    {d.title}
                  </a>
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt='' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className='arrow left'
        src='assets/arrow.png'
        alt='arrow'
        onClick={() => handleClick('left')}
      />
      <img
        className='arrow right'
        src='assets/arrow.png'
        alt='arrow'
        onClick={() => handleClick()}
      />
    </div>
  );
}
