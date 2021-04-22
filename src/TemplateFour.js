import React from 'react';

export default function TemplateFour() {
  const arrow = (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-4 h-4 ml-1"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  );

  const check = (
    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white rounded-full bg-easybuild-purple">
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        className="w-3 h-3"
        viewBox="0 0 24 24"
      >
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
    </span>
  );
  return (
    <div id="wrapper">
      <div>
        <header className="py-2 text-gray-600 body-font">
          <div className="container flex flex-wrap items-center w-full px-6 py-2 mx-auto bg-white lg:h-16 lg:py-0 ">
            <div className="flex items-center flex-grow ">
              <img
                loading="lazy"
                src="img/easybuild-logo-full.png"
                alt="Easybuild logo"
                className="h-8"
              />
            </div>

            <label
              htmlFor="menu-toggle"
              className="block pointer-cursor lg:hidden"
            >
              <svg
                className="text-gray-900 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div
              className="hidden w-full lg:flex lg:items-center lg:w-auto"
              id="menu"
            >
              <nav>
                <ul className="items-center justify-between pt-4 lg:flex lg:pt-0">
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="https://blog.easybuild-purple.com.br"
                      rel="noopener noreferrer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#sobre"
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#servicos"
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#vantagens"
                    >
                      Vantagens
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#clientes"
                    >
                      Clientes
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:text-black"
                      href="#contato"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <a
              href="/"
              onClick={() =>
                alert(
                  'Hey AWS, we are just waiting for your startup credits to deploy our app. :)',
                )
              }
              rel="noopener noreferrer"
              className="items-center hidden px-3 py-3 ml-4 text-base text-white border-0 rounded bg-easybuild-purple md:inline-flex hover:bg-easybuild-darkpurple focus:outline-none"
            >
              Start building {arrow}
            </a>
          </div>
        </header>
      </div>

      <section className="relative px-2 py-20 text-gray-700 bg-gray-100 body-font md:py-32 lg:py-60 xl:py-72">
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center w-full text-center lg:w-3/4">
            <h1 className="text-4xl font-black uppercase md:leading-tight md:text-6xl">
              Build an awesome website easily!
            </h1>
            <h2 className="py-2 my-8 text-2xl text-gray-700 md:text-2xl lg:w-3/4">
              It is so easy that you are going to be <strong>shocked</strong>...
            </h2>
            <a
              href="/"
              onClick={() =>
                alert(
                  'Hey AWS, we are just waiting for your startup credits to deploy our app. :)',
                )
              }
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-4 text-lg text-white border-0 rounded bg-easybuild-purple focus:outline-none hover:bg-easybuild-darkpurple"
            >
              Show me the magic {arrow}{' '}
            </a>
          </div>
        </div>
      </section>
      {/* <section className="-my-4 md:-my-8 lg:-my-16 xl:-my-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F6"
            fill-opacity="1"
            d="M0,288L80,282.7C160,277,320,267,480,229.3C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </section> */}
      <section className="px-2 py-12 text-gray-700 md:py-32 lg:py-40 xl:py-56">
        <div className="container flex flex-col mx-auto md:items-center">
          <h1 className="text-3xl font-black leading-snug uppercase lg:w-3/4 lg:text-center md:text-5xl md:leading-tight">
            A whole{' '}
            <span className="text-white bg-easybuild-darkpurple">
              different concept
            </span>{' '}
          </h1>
          <div className="flex mt-6 mb-12">
            <div className="inline-flex w-16 h-1 rounded-full bg-easybuild-purple"></div>
          </div>
          <div className="flex flex-col w-full h-full py-12 md:py-20 md:flex-row">
            <div className="flex items-center justify-center w-full mb-12 md:mb-0 md:mr-4 md:w-1/2">
              <img
                src="img/time-waste.svg"
                alt="Placeholder"
                className="w-96"
              />
            </div>
            <div className="flex flex-col justify-center w-full md:ml-4 md:w-1/2">
              <h2 className="mb-6 text-3xl font-black">
                <span className="text-easybuild-darkpurple">Stop</span> wasting
                your time
              </h2>
              <p className="mb-8 text-xl md:text-2xl">
                Drag and drop solutions can be very cool, but we all know that
                it requires a lot of time, effort and patience in order to build
                any website with it.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full py-12 md:py-20 md:flex-row">
            <div className="flex items-center justify-center w-full mb-12 text-center md:mb-0 md:mr-4 md:w-1/2">
              <img
                src="img/ugly-website.svg"
                alt="Placeholder"
                className="w-96"
              />{' '}
            </div>
            <div className="flex flex-col justify-center w-full md:ml-4 md:w-1/2">
              <h2 className="mb-6 text-3xl font-black">
                <span className="text-easybuild-darkpurple">Stop</span> terrible
                designs
              </h2>
              <p className="mb-8 text-xl md:text-2xl">
                Being able to drag and drop everywhere, changing everything that
                you want, gives you the power to create websites with awful
                looks and poor user experiences. Trust our design team to do
                this for you instead. And always remember, with great power
                comes great responsabilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full h-full py-12 md:py-20 md:flex-row">
            <div className="flex items-center justify-center w-full mb-12 md:mb-0 md:mr-4 md:w-1/2">
              <img src="img/injured.svg" alt="Placeholder" className="w-96" />
            </div>
            <div className="flex flex-col justify-center w-full md:ml-4 md:w-1/2">
              <h2 className="mb-6 text-3xl font-black">
                <span className="text-easybuild-darkpurple">Stop</span> hurting
                yourself over and over again
              </h2>
              <p className="mb-8 text-xl md:text-2xl">
                Changing the layout of your website without{' '}
                <span className="font-semibold text-easybuild-darkpurple">
                  easybuild
                </span>{' '}
                is extremely painful. It is needed to choose a whole different
                template and start it all over from scratch. All your texts and
                images are gone. It just doesn't make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="-my-4 md:-my-8 lg:-my-16 xl:-my-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F3F4F6"
              fill-opacity="1"
              d="M0,160L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
        </svg>
      </section> */}
      <section className="py-20 text-gray-600 bg-gray-100 body-font md:py-32 lg:py-40 xl:py-56">
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row md:px-6">
          <div className="flex flex-col items-start justify-center w-full mb-16 md:items-center lg:w-full lg:mb-0">
            <h1 className="text-3xl font-black leading-snug uppercase lg:w-3/4 lg:text-center md:text-5xl md:leading-tight">
              With easybuild you can add your content, and{' '}
              <span className="text-white bg-easybuild-darkpurple">
                switch among top notch designs at anytime
              </span>
              !
            </h1>
            <div className="flex mt-6 mb-12">
              <div className="inline-flex w-16 h-1 rounded-full bg-easybuild-purple"></div>
            </div>
            <p className="mb-8 text-xl md:text-2xl">Still can't believe it?</p>
            <a
              href="/"
              onClick={() =>
                alert(
                  'Hey AWS, we are just waiting for your startup credits to deploy our app. :)',
                )
              }
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-4 text-lg text-white border-0 rounded bg-easybuild-purple focus:outline-none hover:bg-easybuild-darkpurple"
            >
              Try it now {arrow}{' '}
            </a>
          </div>
        </div>
      </section>
      {/* <section className="-my-4 md:-my-8 lg:-my-16 xl:-my-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F6"
            fill-opacity="1"
            d="M0,96L1440,128L1440,0L0,0Z"
          ></path>
        </svg>
      </section> */}

      <section className="py-20 text-gray-600 body-font md:py-32 lg:py-40 xl:py-56">
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row md:px-6">
          <div className="flex flex-col items-center justify-center w-full mb-16 lg:w-full lg:mb-0">
            <h1 className="text-3xl font-black leading-snug uppercase lg:w-3/4 lg:text-center md:text-5xl md:leading-tight">
              PRICING
            </h1>
            <div className="flex mt-6 mb-12">
              <div className="inline-flex w-16 h-1 rounded-full bg-easybuild-purple"></div>
            </div>
            <div className="relative flex flex-col w-full px-4 py-8 border-4 rounded-lg border-easybuild-purple md:w-1/3 lg:w-1/4">
              <div>
                <div className="absolute top-0 right-0 ">
                  <h2 className="px-3 py-2 mb-1 text-sm font-medium tracking-widest text-white rounded-bl-lg title-font bg-easybuild-purple">
                    BETA LAUNCH OFFER
                  </h2>
                </div>
                <h1 className="flex items-center pb-4 my-4 text-5xl leading-none text-gray-900 border-b border-gray-300">
                  <span>$60</span>
                  <span className="ml-1 text-lg font-normal text-gray-500">
                    /year
                  </span>
                </h1>
                <div className="my-8 text-lg">
                  <p className="flex items-center mb-2 text-gray-600">
                    {check}
                    99.99% website hosting
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    {check}
                    Integrated contact form
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    {check}
                    SSL certificate
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    {check}
                    SEO capabilities
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    {check}
                    Connect your own domain
                  </p>
                </div>
                <a
                  href="/"
                  onClick={() =>
                    alert(
                      'Hey AWS, we are just waiting for your startup credits to deploy our app. :)',
                    )
                  }
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-2 text-lg text-white border-0 rounded bg-easybuild-purple focus:outline-none hover:bg-easybuild-darkpurple"
                >
                  Get your website {arrow}{' '}
                </a>
                <div className="py-1 text-center text-gray-500">
                  7 days money back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="-my-4 md:-my-8 lg:-my-16 xl:-my-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F6"
            fill-opacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,218.7C640,224,800,192,960,154.7C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section> */}
      <section className="py-20 text-gray-600 bg-gray-100 body-font md:py-32 lg:py-48">
        <div className="container flex flex-col items-center px-4 mx-auto lg:flex-row md:px-6">
          <div className="flex flex-col w-full lg:w-1/2 lg:mb-0 lg:pr-16">
            <h1 className="text-3xl font-black leading-snug uppercase md:text-5xl md:leading-tight">
              <span className="text-white bg-easybuild-purple">Start</span>{' '}
              building your website now!{' '}
            </h1>
            <img
              alt=""
              src="img/call-to-action-img.png"
              className="object-cover object-center mt-6 rounded lg:hidden"
            />
            <div className="flex mt-6 mb-6">
              <div className="inline-flex w-16 h-1 rounded-full bg-easybuild-purple-500"></div>
            </div>
            <p className="w-full mb-12 text-xl leading-relaxed">
              Are you ready to <strong>go online</strong>?
            </p>
            <div className="flex">
              <a
                href="https://api.whatsapp.com/send?phone=5561998568439&amp;text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%20da%20Remote%20Agro"
                rel="noopener noreferrer"
                className="inline-flex px-6 py-4 text-lg text-center text-white border-0 rounded bg-easybuild-purple focus:outline-none hover:bg-easybuild-darkpurple"
              >
                YES! Let's go!
              </a>
            </div>
          </div>
          <div className="items-center hidden w-full mb-16 lg:flex lg:w-1/2 lg:mb-0">
            <img
              alt=""
              src="img/launch.svg"
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      <footer className="text-white bg-easybuild-darkpurple body-font">
        <div className="container flex flex-col items-center gap-4 px-5 py-8 mx-auto sm:flex-row">
          <a
            className="flex items-center justify-center font-medium title-font md:justify-start"
            href="/"
          >
            <span className="ml-3 text-xl">EasyBuild</span>
          </a>
          <p className="py-1 text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 ">
            © 2021 EasyBuild —
            <a
              href="https://www.instagram.com/easybuild.site/"
              className="ml-1 "
              rel="noopener noreferrer"
              target="_blank"
            >
              @easybuild.site
            </a>
          </p>
          <span className="inline-flex justify-center sm:ml-auto sm:justify-start ">
            <a
              className=""
              href="https://www.facebook.com/Remote-Science-102384204827570/?view_public_for=102384204827570"
              rel="noopener noreferrer"
            >
              <svg
                alt="facebook"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 "
              href="https://www.instagram.com/easybuild-purple/"
              rel="noopener noreferrer"
            >
              <svg
                alt="instagram"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              className="ml-3 "
              href="/"
              onClick={() =>
                alert(
                  'Hey AWS, we are just waiting for your startup credits to deploy our app. :)',
                )
              }
              rel="noopener noreferrer"
            >
              <svg
                alt="whatsapp"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="whatsapp"
                className="w-5 h-5 svg-inline--fa fa-whatsapp fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
