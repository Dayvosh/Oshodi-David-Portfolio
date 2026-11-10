import Icon from "./Icon"

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-intro">
          <h2>
            Tell me what
            <br />
            you're building
          </h2>
          <p>
            I look forward to working with you, please feel free to send me an
            email
          </p>
        </div>
        <a className="email-pill" href="mailto:davidoshodi656@gmail.com">
          davidoshodi656@gmail.com
        </a>
        <div className="socials">
          <a
            href="https://dribbble.com/dayveed10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <Icon file="90588.svg" />
          </a>
          <a
            href="https://www.instagram.com/the_oshodi_of_design?rpxt=N3hsdGY0NGhsN25q&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Icon file="cd8cd.svg" />
          </a>
          <a
            href="https://github.com/Dayvosh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icon file="github.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/oshodi-david-8142a5208/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icon file="linkedin.svg" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          <Icon file="cdbb2.svg" /> OSHODI DAVID. ALL RIGHTS RESERVED
        </span>
        <a href="#top">
          <Icon file="6ad45.svg" /> Back to top
        </a>
      </div>
    </footer>
  )
}
