import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';
import axios from 'axios';
import {
  MainWrapper,
  HeaderWrapper,
  FooterWrapper,
} from "../components/styles";
import Favicon from "react-favicon";
import {Preloader} from '../pageloader/index';
import Logo from "../assets/aflogostr.png";
import { ReactComponent as FooterLogo } from "../assets/logo.svg";
import { ReactComponent as ResumeIcon } from "../assets/cv.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/stack-overflow.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import {ReactComponent as WebIcon} from '../assets/web.svg';
import {ReactComponent as TwitterIcon} from '../assets/twittersvg.svg';
import {ReactComponent as IGIcon} from '../assets/instagram.svg';
import {ReactComponent as QuoraIcon} from '../assets/quora.svg';

import HTMLIcon from "../assets/html.svg";
import StyledIcon from "../assets/styled.png";
import ReactIcon from "../assets/react.svg";
import SqlIcon from "../assets/sql.svg";
import VscodeIcon from "../assets/vscode.svg";
import GitIcon from "../assets/git.svg";
import PythonIcon from "../assets/python.svg";
import FlaskIcon from "../assets/flask.svg";
import BootstrapIcon from "../assets/bootstrap.svg";
import UbuntuIcon from "../assets/ubuntu.svg";


export const findImg = (val, arr) => {
  const result = arr.find((el) => el.public_id.includes(val) === true)
  return result.public_id
}
const tools = [
  {
    url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    logo: HTMLIcon
  },

  {
    url: "https://styled-components.com/",
    logo: StyledIcon
  },
  {
    url: "https://getbootstrap.com/",
    logo: BootstrapIcon
  },
  {
    url: "https://reactjs.org/",
    logo: ReactIcon
  },

  {
    url: "https://www.postgresql.org/",
    logo: SqlIcon
  },
  {
    url: "https://ubuntu.com/",
    logo: UbuntuIcon
  },
  {
    url: "https://code.visualstudio.com/",
    logo: VscodeIcon
  },
  {
    url: "https://git-scm.com/",
    logo: GitIcon
  },
  {
    url: "https://python.com/",
    logo: PythonIcon
  },
  {
    url: "https://flask.palletsprojects.com/en/2.1.x/",
    logo: FlaskIcon
  },
 
 
]
const projects = [
  {
    name: "Meme Generator",
    url: "https://ibnbayo.github.io/meme-app/",
    mark: "React JS",
    imgsrc: "https://i.postimg.cc/W38tG4mF/Screenshot-Buzz.png",
    giturl: "https://github.com/ibnbayo/meme-app"
  },
  {
    name: "User Search",
    url: "https://ibnbayo.github.io/User-Data-Search/",
    mark: "Javascript",
    imgsrc: "https://i.postimg.cc/J79tjSZQ/Screenshot-Users-Table.png",
    giturl: "https://github.com/ibnbayo/User-Data-Search"
  },
  {
    name: "Todo App",
    url: "https://github.com/ibnbayo/fullstack-todo",
    mark: "Python, Javascript, Postgres",
    imgsrc: "https://i.postimg.cc/yY2nHxyx/Screenshot-FFPost.png",
    giturl: "https://github.com/ibnbayo/fullstack-todo"
  },

  {
    name: "Page Saver Chrome Extension",
    url: "https://github.com/ibnbayo/page-saver",
    mark: "Javascript",
    imgsrc: "https://i.postimg.cc/HssHnrKm/Screenshot-page-saver.jpg",
    giturl: "https://github.com/ibnbayo/page-saver"
  },
  {
    name: "Tesla Landing Page",
    url: "https://ibnbayo.github.io/Tesla-Page/",
    mark: "CSS",
    imgsrc: "https://i.postimg.cc/x8RrC86Z/screenshot.jpg",
    giturl: "https://github.com/ibnbayo/Tesla-Page"
  },
  {
    name: "Toucan Restaurant",
    url: "https://ibnbayo.github.io/v39-toucans-team-02/catering.html",
    mark: "Bootstrap",
    imgsrc: "https://i.postimg.cc/KcJ7DGJy/Screenshot-Restaurant.png",
    giturl: "https://github.com/ibnbayo/v39-toucans-team-02"
  },
  {
    name: "Productivity App",
    url: "https://ibnbayo.github.io/productivity-app/",
    mark: "Javascript",
    imgsrc: "https://i.postimg.cc/4xK68JRC/Screenshot-productivity.png",
    giturl: "https://github.com/ibnbayo/productivity-app"
  },



 
]

const Home = () => {
  const [currentYear, setCurrentYear] = useState("");
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    infinite: true,
    arrows: true,
    dots: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  };


  return (
    <div>
      <Favicon url="favicons.ico"></Favicon>
      <HeaderWrapper>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div>
          <div className="resume-text">
            <a href="https://github.com/ibnbayo" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
          <div className="resume-icon">
            <a href="https://github.com/ibnbayo">
              <GithubIcon />
            </a>
          </div>
        </div>
      </HeaderWrapper>

      <MainWrapper>
        <div className="first-section inner-content">
          <div className="intro">
            <h1 className="intro-heading">Hi, I'm Abdullahi Fahm.</h1>
            <p className="intro-desc">
              Frontend Engineer &#x2022; Aspiring Fullstack Engineer
            </p>
            <div className="separator"></div>
            <div className="social-icons">
              
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ibnbayo"
                >
                  <GithubIcon />
                </a>
              </div>
              
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stackoverflow.com/users/19413350/abdullahi"
                >
                  <StackOverflowIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/zzinedddine"
                >
                  <TwitterIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:abdullahifahm@gmail.com?subject=From Your Portfolio"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-section">
          <div className="inner-content inner-padding">
            <div className="section-wrapper">
              <h2 className="section-heading">Profile</h2>
              <div className="bio">
                <p>
                  I'm a Frontend Engineer with experience in developing
                  visually appealing web applications with delightful user
                  experiences.{" "}
                </p>
                <p>
                I have a heightened sense of curiosity about software,
                 developer tools, and the application of technical concepts 
                 to solving problems. 
                </p>
              </div>
            </div>
            <div>
              <h2 className="section-heading">Tools I Use.</h2>
                <div className="container">
                <Slider {...settings}>
                      {tools.map((item, index) => (
                        <div className="each-slide" key={`tool-${index}`} style={{width: "150px"}}>
                          <a href={item.url}>
                            <img src={item.logo} alt={`logo-${index}`} />
                          </a>
                        </div>
                      ))}
                </Slider>
                </div>
            </div>
          </div>
        </div>
        <div className="third-section">
        <div className="inner-content inner-padding">
            <div>
              <h2 className="section-heading">Projects</h2>
              <div className="flex-row">
                  {projects.map((project, index) => (
                    <div className="member" key={`project-${index}`}>
                      <div className="inner">
                      <div className="img-box">
                        <img src={project.imgsrc} alt={project.name} />
                        <div className="overlay"/>
                      </div>
                      <div className="content">
                        <div className="text">
                          {project.name}
                        </div>
                        <div className="webgit">
                        <a className="btn" id="weblink" href={project.url} target="_blank" rel="noreferrer"> 
                          <WebIcon />
                        </a>
                        <a className="btn" id="gitlink" href={project.giturl} target="_blank" rel="noreferrer"> 
                          <GithubIcon />
                        </a>
                        </div>
                      </div>
                      <div className="subtext">
                          {project.mark}
                        </div>
                      </div>
                    </div>
                  ))}      
                </div>
            </div>
          </div>
        </div>
        <div className="second-section">
          <div className="inner-content inner-padding">
            <div className="section-wrapper">
              <h2 className="section-heading">About</h2>
              <div className="bio mb-20">
                <p>
                A software engineering professional with entry-level experience specializing in software development with
                 Python and JavaScript.  {" "}
                </p>
                <p>
                I am a creative, self-motivated and passionate Front-End Developer, passionate about writing clean and organized code, 
                and keen on personal and professional development.

            I offer my ability (fueled by my passion for building solutions) to deliver creative, elegant and efficient solutions 
            to problems. I always seek to improve my skillset and stay on top of latest technologies.  {" "}
                </p>
                <p>When not coding, I'm either reading or watching videos on technology and 
                  it's role in making the world a better place.

                I'm also very ethusiastic about Space exploration, environmental sustainability and Artificial Intelligence.
</p>
              
              </div>
             
            </div>
          </div>
        </div>
      </MainWrapper>

      <FooterWrapper>
        
        <div className="credit">
          © 2022 
        </div>
      </FooterWrapper>
    </div>
    )

};

export default Home;
