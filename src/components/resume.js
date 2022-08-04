
import Container from 'react-bootstrap/Container';
import pdf from '../CV.pdf'


function Resume() {
    return (
        <Container style={{
            textAlign: 'justify'
        }}>
            <h1>Resume</h1>
            <h2><a href={pdf} download="HGuevara_CV">Download Resume</a></h2>
            <h3>Front end proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Angular</li>
                <li>Bootsrap</li>
                <li>Tailwind</li>
            </ul>
            <h3>Back end proficiencies</h3>
            <ul>
                <li>PHP</li>
                <li>APIs</li>
                <li>Node</li>
                <li>Nest</li>
                <li>Express</li>
                <li>MySQL, Sequalize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </Container>
    )
}

export default Resume;