import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { about } from '../../portfolio'
import './About.css'
// import pic1 from './propic1.jpeg';
import pic2 from './propic2.png';
import leetcodeIcon from "./leetcode-icon.svg";

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center '>
      <div className='propic-cont'>
        <img src={pic2} className='propic propic-top' alt="Pradeep Kumar Vijayakumaran" />
      </div>

      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}<span className='university'>Northeastern University</span></h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a target='_blank' rel="noreferrer"
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a target='_blank' rel="noreferrer"
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.email && (
              <a target='_blank' rel="noreferrer"
                href={social.email}
                aria-label='email'
                className='link link--icon'
              >
              <EmailIcon />
              </a>
            )}

          </>
        )}
      </div>
    </div>
  )
}

export default About
