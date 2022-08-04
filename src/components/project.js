
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaGithub } from 'react-icons/fa';

function Project(props) {
    const [isShown, setIsShown] = useState(false);
    return (
        <Container className='projectCard' onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)} style={{
                backgroundImage: `url(${props.imgroute})`,
            }}>
            <div className='projectInfo' style={{
                visibility: isShown ? 'visible' : 'hidden',
                opacity: isShown ? '1' : '0',
                transition: 'opacity 1500ms'
            }}>
                <p><a href={props.route} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>{props.name}</a> | <a href={props.repo} target="_blank"><FaGithub /></a></p>
            </div>
        </Container>
    )
}

export default Project;