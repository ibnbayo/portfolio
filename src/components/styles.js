import styled from "styled-components";
import { screens, colors } from "../utilities";
const red = "#be0028";

export const HeaderWrapper = styled.header`
  position: sticky;
  width: 100%;
  top: -1px;
  z-index: 100;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors["color-light"]};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px;
  @media ${screens.mobileL} {
    padding: 10px 15px;
  }
  .nav-wrapper {
    position: relative;
  }
  .logo {
    display: flex;
    width: 17vmin;
    height: auto;
    margin: -10px 0 -10px -10px;
    img {
      max-width: 100%;
      @media ${screens.mobileL} {
        max-width: 85%;
      }
    }
  }
  .resume-text {
    font-size: 3vmin;
    color: ${colors["color-primary"]};
    cursor: pointer;
    @media ${screens.mobileL} {
      display: none;
    }
  }
  .resume-icon {
    display: none;
    cursor: pointer;
    svg {
      object-fit: contain;
      path {
        fill: ${colors["color-primary"]};
      }
    }
    @media ${screens.mobileL} {
      display: inline-block;
    }
  }
`;
export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0;
  background-color: ${colors["color-light"]};
  .footer-logo {
    width: 20%;
    svg {
      width: 100%;
      object-align: cover;
    }
    @media ${screens.mobileL} {
      width: 50%;
    }
  }
  .credit {
    color: ${colors["color-primary"]};
    padding: 20px 0 50px;
    width: 100%;
    text-align: center;
    letter-spacing: 1px;
  }
`;

export const ButtonWrapper = styled.button`
  padding: 10px 20px;
  background-color: ${red};
  border: 1px solid transparent;
  border-radius: 10px;
  transition: transform 0.5s ease-in-out;
  a {
    color: #ffffff;
    font-weight: 600;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  .inner-content {
    width: 80%;
    margin: 0 auto;
    @media ${screens.mobileL} {
      width: 90%;
    }
  }
  .inner-padding {
    padding: 7% 0;
    @media ${screens.mobileL} {
      padding: 15% 0;
    }
  }
  .first-section {
    height: 80vmin;
    background-color: ${colors["color-light"]};
    @media ${screens.mobileL} {
      height: 20vh;
    }
  }
  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15% 0;
    justify-content: center;
    @media ${screens.mobileL} {
      padding: 25% 0;
    }
    @media ${screens.mobileSm} {
      padding: 30% 0;
    }
  }
  .intro-heading {
    font-size: 5rem;
    margin-bottom: 25px;
    @media ${screens.mobileL} {
      font-size: 3rem;
      margin-bottom: 15px;
    }
  }
  .intro-desc {
    font-size: 1.2rem;
    margin-bottom: 20px;
    @media ${screens.mobileL} {
      font-size: 1.2rem;
    }
  }
  .separator {
    width: 50px;
    height: 1px;
    border-bottom: 1.5px solid ${colors["color-primary"]};
  }
  .social-icons {
    display: flex;
    width: 70%;
    align-items: center;
    margin-top: 15px;
    .round-icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        background-color: ${colors["color-light"]};
        padding: 9px;
        border: transparent;
        border-radius: 50%;
        @media ${screens.mobileL} {
          height: 25px;
          padding: 2px;
        }
    }
    .icon {
      width: 7vmin;
      height: 3vmin;
      margin-right: 15px;
    }
    a {
        svg {
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        &:hover {
          svg {
            transform: scale(1.1);
          }
        }
      }
  }
  .intro-heading {
    font-size: 5rem;
    margin-bottom: 25px;
    @media ${screens.mobileL} {
      font-size: 3rem;
    }
  }
  .section-heading {
    font-size: 3rem;
    margin-bottom: 40px;
    @media ${screens.mobileL} {
      font-size: 2rem;
    }
  }
  .second-section {
    background-color: ${colors["color-primary"]};
    color: ${colors["color-light"]};
  }
  .section-wrapper {
    margin-bottom: 10%;
    @media ${screens.mobileL} {
      margin-bottom: 20%;
    }
  }
  .bio {
    width: 90%;
    p {
      margin-bottom: 10px;
      line-height: 2rem;
    }
    @media ${screens.mobileL} {
      width: 100%;
    }
  }
  .third-section {
    background-color: ${colors["color-light"]};
  }
  .flex-row {
    padding-top: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .member {         
        display: flex;
        flex-direction: column;
        transform: scale(1.02);
        box-shadow: 0 10px 20px rgb(0 0 0 / 15%);
        transition: transform 0.5s ease;
        border-radius: 10px;
        width 45%;
        margin: 0 2.5% 70px;
        &:hover {
            transform: scale(1.04);
        }
        @media ${screens.mobileL} {
            width: 90%;
            margin: 0 0 70px;
        }
    }
    .img-box {
        position: relative;
        width: 100%;
        margin-bottom: -5px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    }
    
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    .btn {
      margin-left: 30px;
      cursor: pointer;
      transition: all 0.5s ease;
      outline: transparent;
      display: flex;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    .toggle {
        transform: rotate(180deg);
    }
    @media ${screens.mobileL} {
      padding: 20px 15px;
    }
  }
  .text {
    font-size: 1.2rem;
    font-weight: 700;
    @media ${screens.mobileL} {
      font-size: 1rem;
    }
  }
.mb-20 {
    margin-bottom: 30px;
}
`;
