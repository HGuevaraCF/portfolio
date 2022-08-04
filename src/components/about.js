import Container from 'react-bootstrap/Container';
import avatar from '../utils/img/1.png';

function AboutMe() {
    return (
      <Container style={{
        textAlign: 'justify'
      }}>
        <h1>About Me</h1>
        <div className='aboutImage' style={{
          backgroundImage: `url(${avatar})`
        }}>
        </div>
        <div>
          <p>Entrepreneur, electrical engineer, and a passionate web developer. I consider myself and adventurous risk-taker person, always looking for new challenges that make a better and a much more wise version of me. I keep myself in a continuous learning, always updated on the latest technologies, in order to achieve every one of goals by providing the most simple and scalable solution.</p>
        </div>
      </Container>
    )
}

export default AboutMe;