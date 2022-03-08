import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Easybank Landing page coded by James Romero"/>
        <meta name="author" content="James Romero"/>
        <meta name="author" content="Blue Royalty"/>
        <meta name="msapplication-TileColor" content="#31d35c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="icon" href="https://res.cloudinary.com/blueshomepage/image/upload/v1646562009/frontendmentor/Easybank/images/favicon-32x32_fzovhu.png" type="image" sizes="16x16"/>
        <title>EasyBank - Landing Page</title>
      </Head>
      <header className="headerContainer">
        <div className="logoContainer">
          <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562032/frontendmentor/Easybank/svg/logo_ijdhd3.svg" layout="fill" objectFit="contain" alt="Easybank logo"/>
        </div>
        {
          toggleNav && (
            <motion.nav className="toggle hide-on-desktop" animate={toggleNav ? {'opacity' : [0,1]} : {'opacity' : [1,0]}} transition={{duration:0.2}}>
              <ul className="toggle__list">
                <li className="toggle__list__item">Home</li>
                <li className="toggle__list__item">About</li>
                <li className="toggle__list__item">Contact</li>
                <li className="toggle__list__item">Blog</li>
                <li className="toggle__list__item">Careers</li>
              </ul>
            </motion.nav>
          )
        }
          <nav className="hide-on-mobile">
            <ul className="nav__list">
              <li className="nav__list__item">Home</li>
              <li className="nav__list__item">About</li>
              <li className="nav__list__item">Contact</li>
              <li className="nav__list__item">Blog</li>
              <li className="nav__list__item">Careers</li>
            </ul>
          </nav>
        <button type="button" className="headerCTABtn cta-button hide-on-mobile">Request Invite</button>
        <div className="toggleContainer hide-on-desktop">
          <motion.button type="button" onClick={(e) => {e.preventDefault(); setToggleNav(!toggleNav);}} className="toggleBtn" whileTap={{'scale': [1,0,1]}}>
            {
              toggleNav ? 
              <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562028/frontendmentor/Easybank/svg/icon-close_pf6nnf.svg'} layout="fill" objectFit="contain" alt="Easybank close icon"/>
              :
              <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562028/frontendmentor/Easybank/svg/icon-hamburger_skc2je.svg'} layout="fill" objectFit="contain" alt="Easybank hamburger icon"/>
            }
          </motion.button>
        </div>
      </header>

      <main className="mainContainer">
        <aside className="leftSide mainInnerContainer">
          <article>
            <p className="leftSide__title">
              Next generation<br/>digital banking
            </p>
            <p className="leftSide__about">
              Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
          </article>
          <button type="button" className="leftSide__btn cta-button">
            Request Invite
          </button>
        </aside>
        <figure className="rightSide">
          <div className="rightSide__image"></div>
        </figure>
      </main>

      <section className="summaryOuterContainer">
        <div className="summaryContainer">
          <p className="question">
            Why choose <span>Easybank?</span>
          </p>
          <p className="answer">
            We leverage Open Banking to turn your bank account into your financial hub. <span>Control your finances like never before.</span>
          </p>
        </div>
        <div className="cards cardContainer">
          <div className="onlineCard">
            <div className="onlineCard__logo">
              <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562030/frontendmentor/Easybank/svg/icon-online_zzngml.svg'} layout="fill" objectFit="contain" alt="Easybank online icon"/>
            </div>
            <p className="onlineCard__title">
              Online Banking
            </p>
            <p className="onlineCard__summary">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
            </p>
          </div>
          <div className="simpleCard">
            <div className="simpleCard__logo">
            <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562030/frontendmentor/Easybank/svg/icon-budgeting_bw8rwc.svg'} layout="fill" objectFit="contain" alt="Easybank budgeting icon"/>
            </div>
            <p className="simpleCard__title">
              Simple Budgeting
            </p>
            <p className="simpleCard__summary">
              See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="fastCard">
            <div className="fastCard__logo">
            <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562030/frontendmentor/Easybank/svg/icon-onboarding_wkb5pr.svg'} layout="fill" objectFit="contain" alt="Easybank onboarding icon"/>
            </div>
            <p className="fastCard__title">
              Fast Onboarding
            </p>
            <p className="fastCard__summary">
              We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
            </p>
          </div>
          <div className="openCard">
            <div className="openCard__logo">
            <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562030/frontendmentor/Easybank/svg/icon-api_rxbrmu.svg'} layout="fill" objectFit="contain" alt="Easybank api icon"/>
            </div>
            <p className="openCard__title">
              Open API
            </p>
            <p className="openCard__summary">
              Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
      
      <section className="articleContainer">
        <div className="articleInnerContainer">
          <p className="articleTitle">Latest Articles</p>
          <div className="articleCard">
            <div className="articleCard__global">
              <div className="articleCard__image">
                <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562010/frontendmentor/Easybank/images/image-currency_nhrdgm.jpg'} layout="fill" objectFit="cover" alt="Easybank article image money"/>
              </div>
              <article className="articleCard__article">
                <p className="articleCard__author">
                  By Claire Robinson
                </p>
                <p className="articleCard__title">
                  Receive money in any currency with no fees
                </p>
                <p className="articleCard__context">
                  The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …
                </p>
              </article>
            </div>

            <div className="articleCard__global">
              <div className="articleCard__image">
                <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562010/frontendmentor/Easybank/images/image-restaurant_a2xsjv.jpg'} layout="fill" objectFit="cover" alt="Easybank article image food"/>
              </div>
              <article className="articleCard__article">
                <p className="articleCard__author">
                  By Wilson Hutton
                </p>
                <p className="articleCard__title">
                  Treat yourself without worrying about money
                </p>
                <p className="articleCard__context">
                  Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
                </p>
              </article>
            </div>

            <div className="articleCard__global">
              <div className="articleCard__image">
                <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562010/frontendmentor/Easybank/images/image-plane_rigwcg.jpg'} layout="fill" objectFit="cover" alt="Easybank article image plane"/>
              </div>
              <article className="articleCard__article">
                <p className="articleCard__author">
                  By Wilson Hutton
                </p>
                <p className="articleCard__title">
                  Take your Easybank card wherever you go
                </p>
                <p className="articleCard__context">
                  We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
                </p>
              </article>
            </div>

            <div className="articleCard__global">
              <div className="articleCard__image">
                <Image src={'https://res.cloudinary.com/blueshomepage/image/upload/v1646562010/frontendmentor/Easybank/images/image-confetti_uticrl.jpg'} layout="fill" objectFit="cover" alt="Easybank article image party"/>
              </div>
              <article className="articleCard__article">
                <p className="articleCard__author">
                  By Claire Robinson
                </p>
                <p className="articleCard__title">
                  Our invite-only Beta accounts are now live!
                </p>
                <p className="articleCard__context">
                  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="footerOuterContainer">
        <div className="footerContainer">
          <div className="outerLeft">
            <div className="footer__left">
              <div className="footer__logo">
                <div className="footer__logoContainer">
                  <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562032/frontendmentor/Easybank/svg/logo_ijdhd3.svg" layout="fill" objectFit="contain" alt="Easybank logo"/>
                </div>
              </div>
              <div className="socialMedias">
                <div className="socialMedias__container">
                  <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562028/frontendmentor/Easybank/svg/icon-facebook_zvfzld.svg" layout="fill" objectFit="contain" alt="Facebook"/>
                </div>
                <div className="socialMedias__container">
                  <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562028/frontendmentor/Easybank/svg/icon-youtube_fpvxbh.svg" layout="fill" objectFit="contain" alt="Youtube"/>
                </div>
                <div className="socialMedias__container">
                  <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562032/frontendmentor/Easybank/svg/icon-twitter_bwk5em.svg" layout="fill" objectFit="contain" alt="Twitter"/>
                </div>
                <div className="socialMedias__container">
                  <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562031/frontendmentor/Easybank/svg/icon-pinterest_y1wshd.svg" layout="fill" objectFit="contain" alt="Pinterest"/>
                </div>
                <div className="socialMedias__container">
                  <Image src="https://res.cloudinary.com/blueshomepage/image/upload/v1646562030/frontendmentor/Easybank/svg/icon-instagram_ujizol.svg" layout="fill" objectFit="contain" alt="Instagram"/>
                </div>
              </div>
            </div>
            <div className="footer__middle">
              <div className="footer__middle__nav">
                <div className="footer__middle__nav__left">
                  <ul className="footer__middle__nav__left__list">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div className="footer__middle__nav__right">
                  <ul className="footer__middle__nav__right__list">
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <button type="button" className="headerCTABtn cta-button">
              Request Invite
            </button>
            <p className="copyright">&copy; Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Index