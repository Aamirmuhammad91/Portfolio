import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Idress Muhammad',
      title: 'Senior Developer',
      img: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: 'assets/twitter.png',
      desc: 'This is a dummy text and picture from Pexels.com. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      name: 'Andalika Müller',
      title: 'Co-Founder of DELKA',
      img: 'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: 'assets/youtube.png',
      desc: 'This is a dummy text and picture from Pexels.com. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      featured: true,
    },
    {
      id: 3,
      name: 'Leonardo Verropolous',
      title: 'CEO of ALBI',
      img: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      icon: 'assets/linkedin.png',
      desc: 'This is a dummy text and picture from Pexels.com. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img src='assets/right-arrow.png' className='left' alt='' />
              <img className='user' src={d.img} alt='' />
              <img className='right' src={d.icon} alt='' />
            </div>
            <div className='center'>{d.desc}</div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
