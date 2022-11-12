const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'lb-bb.com',
  title: 'LB',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'LB Bradburn',
  role: 'Full Stack Engineer',
  description:
    'I am a bug hunter with a test-driven mindset.',
  resume: 'https://docs.google.com/document/d/1oEYQQDU4ESHVnc3ues3yzwuN1Skk7zclKHT80m0lSEw/edit#heading=h.6gy30nm7x8vl',
  social: {
    linkedin: 'https://linkedin.com/lb-bradburn',
    github: 'https://github.com/lb-bb',
  },
}

const aboutPlus = {
  // all the properties are optional - can be left empty or deleted
  photoUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/rescued-smiling-pitbull-meaty-13.jpg',
  blurb:
    'I was on my way to LA to try to reconnect with my ex wife when I discovered her office building had been taken over by German con men. They attempted to hold everyon hostage and steal millions of dollars, but I managed to thwart their efforts and almost everybody made it out alive. However, they did later have to remove both my feet as I got blood poisoning from all the glass I had to walk on.'
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Custom Automations API App',
    description:
      'As part of a monorepo for our department, my team has built a custom REST API in Typescript to relieve some of our dependency on Zapier. I translated 50% of our ‘zaps’ into Typescript routes, and this app now supports nearly every step in Fullstack’s admissions process.',
    stack: ['Node', 'JS', 'TS', 'Jest'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Google Apps Script & TS Translation',
    description:
      'I wrote a GAS to collect data from Ordway and Hubspot, transform it, and write it into a sheet. Once completed, I translated it into an app in our monorepo using Typescript and our custom REST API functions. This sheet is now automated for the Finance Department instead of a manual process.',
    stack: ['JS', 'TS', 'Clasp'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Satellite HQ: Virtual Office',
    description:
      'Satellite HQ is a virtual office platform with real-time communication built in. As a team of four, we created a solution for building office culture remotely. I wrote Satellite HQ’s peer-to-peer communication with WebRTC, buttons, and some multiplayer features via Phaser and Socket.io.',
    stack: ['Phaser', 'Socket.io', 'WebRTC', 'Express'],
    link: 'https://satellite-hq.herokuapp.com/',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Virtual Realty e-Commerce Site',
    description:
      'Virtual Realty is a single-page application for property sales, for which I programmed the vertical slices of the logged-in user experience. I also personally secured the site against data leaks and deployed via Heroku.',
    stack: ['Express', 'Sequelize', 'React', 'Redux' ],
    link: 'https://virtual-realty.herokuapp.com/home',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }
]

const skills = [
  'Node', 'Javascript', 'Typescript', 'Git', 'REST APIs', 'React', 'Redux', 'Sequelize', 'Google', 'Apps', 'Script', 'Jest'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bradburnlb@gmail.com',
}

export { header, about, aboutPlus, projects, skills, contact }
