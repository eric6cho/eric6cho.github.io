import '../../styles/comp-home.scss';
import Emblem from '../comp-emblem';

function Home(props) {

  const getComponent = () => {

    let data = props.data;

    let component = (
      <div className="home-section">
        <Emblem/>
        <h1>{data['title']}</h1>
        <div className="description-section">
          {data['description'].map((text,i)=><p key={i}>{text}</p>)}
        </div>
        <a className='resume' target='_blank' href='resume/Eric Cho Resume.pdf'>
          <h3>View Resume</h3> 
        </a>
      </div>  
    );

    return component;
  };

  return getComponent();
}

export default Home;