import { aboutPlus } from '../../portfolio'
import photo from '../../lb-bb-2022.png'

import './AboutPlus.css'

const AboutPlus = () => {
  const { photoUrl, blurb } = aboutPlus

  return (
    <div className='about center'>
      {photo && <img className='bio-photo' src={photo} alt='This is me' />}
      <div className='about__contact center'>
        {blurb && (
          <p className='big-font'>
            {blurb}
          </p>
        )}
      </div>
    </div>
  )
}

export default AboutPlus
