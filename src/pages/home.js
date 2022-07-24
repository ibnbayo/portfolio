import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from 'react-slick';
import axios from 'axios';
import {
  MainWrapper,
  HeaderWrapper,
  FooterWrapper,
} from "../components/styles";
import {Preloader} from '../pageloader/index';
import Logo from "../assets/logo.svg";
import { ReactComponent as FooterLogo } from "../assets/logo.svg";
import { ReactComponent as ResumeIcon } from "../assets/cv.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as HashnodeIcon } from "../assets/hashnode.svg";
import { ReactComponent as StackOverflowIcon } from "../assets/stack-overflow.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import {ReactComponent as WebIcon} from '../assets/web.svg';
import {ReactComponent as YTIcon} from '../assets/youtube.svg';
import {ReactComponent as IGIcon} from '../assets/instagram.svg';
import {ReactComponent as QuoraIcon} from '../assets/quora.svg';
import {ReactComponent as PickyIcon} from '../assets/picky.svg';
import HTMLIcon from "../assets/html.svg";
import SassIcon from "../assets/sass.svg";
import TWIcon from "../assets/tailwindcss.svg";
import StyledIcon from "../assets/styled.png";
import ReactIcon from "../assets/react.svg";
import GatsbyIcon from "../assets/gatsby.svg";
import NuxtIcon from "../assets/nuxt.svg";
import VueIcon from "../assets/vue.svg";
import GraphqlIcon from "../assets/graphql.svg";
import SqlIcon from "../assets/sql.svg";
import VscodeIcon from "../assets/vscode.svg";
import GitIcon from "../assets/git.svg";
import resume from '../assets/airahyusuff.pdf';

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
    url: "https://sass-lang.com/",
    logo: SassIcon
  },
  {
    url: "https://tailwindcss.com/",
    logo: TWIcon
  },
  {
    url: "https://styled-components.com/",
    logo: StyledIcon
  },
  {
    url: "https://reactjs.org/",
    logo: ReactIcon
  },
  {
    url: "https://www.gatsbyjs.com/",
    logo: GatsbyIcon
  },
  {
    url: "https://nuxtjs.org/",
    logo: NuxtIcon
  },
  {
    url: "https://vuejs.org/",
    logo: VueIcon
  },
  {
    url: "https://graphql.org/",
    logo: GraphqlIcon
  },
  {
    url: "https://www.postgresql.org/",
    logo: SqlIcon
  },
  {
    url: "https://code.visualstudio.com/",
    logo: VscodeIcon
  },
  {
    url: "https://git-scm.com/",
    logo: GitIcon
  },
]
const projects = [
  {
    name: "Callerview Dashboard",
    url: "https://callerview.netlify.app",
    mark: "callerview"
  },
  {
    name: "AutiMS",
    url: "https://autims.netlify.app",
    mark: "autims"
  },
  {
    name: "Teume project",
    url: "https://treasureproject.netlify.app",
    mark: "treasure"
  },
  {
    name: "MCF",
    url: "https://mentalcare.life",
    mark: "mcf"
  },
  {
    name: "Fitila",
    url: "https://fitila.mentalcare.life",
    mark: "fitila"
  },
  {
    name: "Filter Pay",
    url: "https://filter-pay.netlify.app",
    mark: "filter"
  },
  {
    name: "GitHub Repos",
    url: "https://githubgraphql.netlify.app/",
    mark: "graphql"
  },
  {
    name: "MePaint",
    url: "https://mepaint.netlify.app",
    mark: "meyer"
  },
  {
    name: "This Portfolio",
    url: "#",
    mark: "portfolio"
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
  const [allImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
        axios.get('https://res.cloudinary.com/khairahscorner/image/list/project.json')
        .then(res => {
          setAllImages([...res.data.resources]);
          setLoading(false);     
        })
  }, []);

  return (
    loading ? Preloader : (
    <div>
      <HeaderWrapper>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div>
          <div className="resume-text">
            <a href={resume} download="Airah-Yusuff-Resume.pdf">
              Download My Resume
            </a>
          </div>
          <div className="resume-icon">
            <a href={resume} download="Airah-Yusuff-Resume.pdf">
              <ResumeIcon />
            </a>
          </div>
        </div>
      </HeaderWrapper>

      <MainWrapper>
        <div className="first-section inner-content">
          <div className="intro">
            <h1 className="intro-heading">Hi, I'm Airah Yusuff.</h1>
            <p className="intro-desc">
              Frontend Engineer &#x2022; Technical Writer
            </p>
            <div className="separator"></div>
            <div className="social-icons">
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/khairah-yusuff/"
                >
                  <LinkedinIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/khairahscorner"
                >
                  <GithubIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://khairahscorner.hashnode.dev/"
                >
                  <HashnodeIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://stackoverflow.com/users/11233049/airah-yusuff?tab=answers"
                >
                  <StackOverflowIcon />
                </a>
              </div>
              <div className="icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:airahyusuff@gmail.com?subject=From Your Portfolio"
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
              <h2 className="section-heading">Brief Intro.</h2>
              <div className="bio">
                <p>
                  I'm a Frontend Engineer with 3+ years of experience developing
                  visually appealing web applications with delightful user
                  experience.{" "}
                </p>
                <p>
                  As an avid learner, I thrive in work environments that provide
                  measurable metrics for career growth, great opportunities for
                  skills improvement and promotes close team collaborations and
                  soft skills acquisition.
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
              <h2 className="section-heading">Past Projects.</h2>
              <div className="flex-row">
                  {projects.map((project, index) => (
                    <div className="member" key={`project-${index}`}>
                      <div className="inner">
                      <div className="img-box">
                        <img src={`https://res.cloudinary.com/khairahscorner/image/upload/${findImg(project.mark, allImages)}.jpg`} alt={project.name} />
                        <div className="overlay"/>
                      </div>
                      <div className="content">
                        <div className="text">
                          {project.name}
                        </div>
                        <a className="btn" href={project.url} target="_blank" rel="noreferrer"> 
                          <WebIcon />
                        </a>
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
              <h2 className="section-heading">Outside of Work.</h2>
              <div className="bio mb-20">
                <p>
                I create modest fashion, lifestyle and skincare content for my blog and different social media platforms!🥰{" "}
                </p>
                <p>I also share general helpful tips, blogging resources and technical articles.</p>
              </div>
              <div className="social-icons">
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.khairahscorner.com"
                >
                  <WebIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://youtube.com/khairahscorner"
                >
                  <YTIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/khairahscorner"
                >
                  <IGIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.quora.com/profile/Airah-Yusuff"
                >
                  <QuoraIcon />
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://pinterest.com/khairahscorner"
                >
                
                </a>
              </div>
              <div className="round-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.gopicky.com/skincarebiased"
                >
                  <PickyIcon />
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </MainWrapper>

      <FooterWrapper>
        
        <div className="credit">
          © {currentYear} 
        </div>
      </FooterWrapper>
    </div>
    )
  );
};

export default Home;
