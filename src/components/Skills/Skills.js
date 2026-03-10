import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!Object.keys(skills).length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>My Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={uniqid()} className='skills__category'>
          <h3 className='skills__category-title'>{category}</h3>
          <div className='skills__badges'>
            {items.map(({ name, badge }) => (
              <img key={uniqid()} src={badge} alt={name} className='skills__badge' />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills