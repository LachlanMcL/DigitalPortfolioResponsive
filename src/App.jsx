import profileImage from '../src/assets/profilePicture.jpg'
import capstoneImage1 from '../src/assets/Capstone-Project-Screenshots/Capture9.jpg'
import capstoneImage2 from '../src/assets/Capstone-Project-Screenshots/Capture10.jpg'
import capstoneImage3 from '../src/assets/Capstone-Project-Screenshots/Capture11.jpg'
import capstoneImage4 from '../src/assets/Capstone-Project-Screenshots/Capture12.jpg'
import capstoneImage5 from '../src/assets/Capstone-Project-Screenshots/Capture13.jpg'
import capstoneImage6 from '../src/assets/Capstone-Project-Screenshots/Capture14.jpg'
import gitHubIcon from '../src/assets/gitHubIcon.jpg'
import linkedinIcon from '../src/assets/linkedinIcon.jpg'

import {Row, Col, Stack, Button, Card, Image, Carousel, Collapse} from 'react-bootstrap'
import { useState } from 'react'

const TileCard = () => {
  return (
    <div className='p-2'>
      <Card>
        <Card.Header className='card-header-custom'>
          <Image className='img-profile' src={profileImage} roundedCircle/>
        </Card.Header>
        <Card.Body>
          <Card.Title className='card-title-custom'>Lachlan McLeod</Card.Title>
          <Card.Text className='card-text-custom'>
            Software Engineer
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

const ContactCard = () => {
  return (
    <div className='p-2'>
      <Card>
        <Card.Header className='card-title-custom'>
          <Card.Title>Contact Information</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className='card-text-custom'>lachlanmcleod333@gmail.com</Card.Text>
          <Card.Text className='card-text-custom'>+61 0432 540 677</Card.Text>
          <Card.Text className='card-text-custom'><a href='https://github.com/LachlanMcL' target="_blank">LachlanMcL <Image className='gitIcon' src={gitHubIcon}/></a></Card.Text>
          <Card.Text className='card-text-custom'><a href='https://www.linkedin.com/in/lachlanmcleod-/' target="_blank">Lachlan McLeod <Image className='linkedinIcon' src={linkedinIcon}/></a></Card.Text>
          <br></br>
          <Card.Text className='card-text-custom quote'>Fast learner, eager to cement myself in the programming world</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

const EducationCard = () => {
  return (
    <div className='p-2'>
      <Card>
        <Card.Header>
          <Card.Title className='card-title-custom'>Education</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Title>Bachelors Software Engineering and Business Informatics</Card.Title>
          <ul><Card.Text><li>University of Canberra, Feb 2019 - Dec 2023</li></Card.Text></ul>
          <Card.Title>Full Stack Open Course</Card.Title>
          <ul><Card.Text><li>University of Helsinki (Online), May 2024 - Current</li></Card.Text></ul>
        </Card.Body>
      </Card>
    </div>
  )
}

const ExperienceCard = () => {
  return (
    <div className='p-2'>
      <Card>
        <Card.Header>
          <Card.Title className='card-title-custom'>Experience and Personal Projects</Card.Title>
        </Card.Header>
        <Card.Body className='card-body-custom'>
          <Stack gap={3} className='col-md-4 mx-auto align-items-center'>
            <FinalCapstoneProject />
            <TaskPlannerProject />
            <WeatherAppProject />
          </Stack>
        </Card.Body>
      </Card>
    </div>
  )
}

const FinalCapstoneProject = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='p-2'>
      <Card className='card-custom'>
        <Card.Body>
          <Card.Title>Final Capstone Project, 2023</Card.Title>
          <ul><Card.Text>
              <li>Collaborated in an agile environment with two Project Managers and another Software Engineer.</li>
              <li>Developed a statistical analysis tool for two University Professors.</li>
              <li>Utilized an iterative process to build the software in R, employing Shiny (an IDE with front-end development capabilities similar to Bootstrap).</li>
              <li>The final product replaced the previously used MATLAB software, reducing user actions required to obtain statistical analyses and graphs from 20-30 clicks to 2-3.</li>
          </Card.Text></ul>
          <Button 
            variant='primary'
            onClick={() => setOpen(!open)}
            aria-controls='carousel-display'
            aria-expanded={open}
          >
            screenshots
          </Button>
          <br></br>
          <br></br>
          <Collapse in={open}>
            <div id='carousel-display'>
              <Carousel>
                <Carousel.Item>
                  <Image className='img-carousel' src={capstoneImage1} rounded/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image className='img-carousel' src={capstoneImage2} rounded/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image className='img-carousel' src={capstoneImage3} rounded/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image className='img-carousel' src={capstoneImage4} rounded/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image className='img-carousel' src={capstoneImage5} rounded/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image className='img-carousel' src={capstoneImage6} rounded/>
                </Carousel.Item>
              </Carousel>
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  )
}

const TaskPlannerProject = () => {
  return (
    <div className='p-2'>
      <Card className='card-custom'>
        <Card.Body>
          <Card.Title><a href='https://github.com/LachlanMcL/task-app' target="_blank">Task Planner Application - May 2024 <Image className='gitIcon' src={gitHubIcon}/></a></Card.Title>
          <ul><Card.Text>
              <li>Developed a fully functional task planner website utilizing the React.js framework.</li>
              <li>Enabled users to view and complete tasks, set new tasks, assign priority levels, and add detailed descriptions.</li>
              <li>Implemented a robust database testing environment using json-server.</li>
              <li>Utilized API endpoints for creating, retrieving, and deleting tasks in the database.</li>
              <li>Deployed an <a href='https://task-app-t8my.onrender.com/' target="_blank">example</a> website on Render.com. <span style={{color: "grey"}}>(Sometimes needs a minute to reboot)</span></li>
              <li>Established a comprehensive deployment pipeline for seamless future updates.</li>
          </Card.Text></ul>
        </Card.Body>
      </Card>
    </div>
  )
}

const WeatherAppProject = () => {
  return (
    <div className='p-2'>
      <Card className='card-custom'>
        <Card.Body>
          <Card.Title><a href='https://github.com/LachlanMcL/weather-app' target="_blank">Weather App - June 2024 <Image className='gitIcon' src={gitHubIcon}/></a></Card.Title>
          <ul><Card.Text>
            <li>Developed a static website utilizing the University of <a href='https://studies.cs.helsinki.fi/restcountries/' target="_blank">Helsinki's country API</a> to provide users with comprehensive country information.</li>
            <li>Enabled users to select a specific country to view current weather data, retrieved from the <a href='https://openweathermap.org/api' target="_blank">Open Weather Map API</a>.</li>
            <li>Leveraged the Bootstrap CSS library to create a clean and visually appealing layout.</li>
            <li>Implemented the application using the React.js framework.</li>
            <li>Deployed an <a href='https://weather-app-qek0.onrender.com/' target="_blank">example</a> application on Render.com.</li>
          </Card.Text></ul>
        </Card.Body>
      </Card>
    </div>
  )
}

const TechnicalSkillsCard = ({skills}) => {
  return (
    <div className='p-2'>
      <Card>
        <Card.Header className='card-title-custom'>
          <Card.Title>Technical Skills</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text className='card-text-custom'>1 being competent, 5 being expert</Card.Text>
            {skills.map(skill => {
              return (
                <Row key={skill.name} className='justify-content-center'>
                  <Col xs="5" md="3">{skill.name}</Col>
                  <Col xs="auto">{skill.level}</Col>
                </Row>
              )
            })}
        </Card.Body>
      </Card>
    </div>
  )
}

function App() {
  
  const skills = [
    {name: "CSS3", level: 4},
    {name: "HTML5", level: 4},
    {name: "JavaScript", level: 4},
    {name: "React.js", level: 3},
    {name: "Python", level: 3},
    {name: "MongoDB", level: 2},
    {name: "MySQL", level: 2},
    {name: "PostgreSQL", level: 2},
    {name: "Electron.js", level: 2},
    {name: "R", level: 2},
    {name: "Java", level: 1},
  ]

  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <Stack gap={3} className='col-md-4 mx-auto align-items-center'>
          <TileCard />
          <ContactCard />
          <EducationCard />
          <TechnicalSkillsCard skills={skills}/>
          <ExperienceCard />
        </Stack>
      </div>
    </div>
  )
}

export default App
