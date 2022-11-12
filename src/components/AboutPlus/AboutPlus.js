import { aboutPlus } from '../../portfolio'
import './AboutPlus.css'

const AboutPlus = () => {
  const { photoUrl, blurb } = aboutPlus

  return (
    <div className='about center'>
      {photoUrl && <img src={photoUrl} alt='This is me' />}
      <div className='about__contact center'>
        {blurb && (
          <p>
            {blurb}
          </p>
        )}
      </div>
    </div>
  )
}

export default AboutPlus
