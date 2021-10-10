import React from 'react'

export default function SessionFooter() {
  return (
    <footer className='flex-row-center'>
      <div className='session-footer flex-row-between'>
        <p>© 2021 Jon Zamora</p>
        <ul className='flex-row-center'>
          <li className='session-footer-link'>
            <a href='http://github.com/jayzizzle' target='_blank'>
              GitHub
            </a>
          </li>
          <li className='session-footer-link'>
            <a href='https://linkedin.com/in/jon-zamora-97a8a6219/' target='_blank'>
              LinkedIn
            </a>
          </li>
          <li className='session-footer-link'>
            <a href='http://mixcloud.com/jonzamora' target='_blank'>
              Mixcloud
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
