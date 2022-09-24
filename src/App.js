import Spline from "@splinetool/react-spline";
import styled from "styled-components";

// IMPORTS IMGS
// import logo from "./img/logo.svg";
// import IconYT from "./img/icon-youtube.svg";
// import IconTwitter from "./img/icon-twitter.svg";
// import IconLaptop from "./img/icon-laptop.svg";

export default function App() {
  return (
    <>
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/ObPECKrMgjj5Q6k2/scene.splinecode"
        />
        <Content>
          <Menu>
            <li>
              <img
                src="https://res.cloudinary.com/dnnjctymr/image/upload/v1664049657/logo_o0znma.svg"
                alt="LOGO"
              />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">App</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="https://dylan-cerv.web.app/">
                <button>Portfolio</button>
              </a>
            </li>
          </Menu>
          <h1>Collaborate with people</h1>
          <p>
            Bring your team together and build your community by using our
            cross-platform app that lets you collaborate via chat, voice and by
            sharing and storing unlimited media files. A world of topics is
            waiting for you. Join the private beta.
          </p>

          <button>
            <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1664049657/icon-laptop_dyagzi.svg" />
            Download for Mac
          </button>

          {/* <a href="#"><img src={} /></a> */}
        </Content>
        <SocialNET>
          <div />
          <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1664049658/icon-youtube_hpqwgd.svg" />
          <img src="https://res.cloudinary.com/dnnjctymr/image/upload/v1664049657/icon-twitter_bnywlr.svg" />
        </SocialNET>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-family: 16px;
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background-color: rgba(0, 0, 0, 0.2);
    border: 0;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: #fff;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const SocialNET = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: #fff;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
