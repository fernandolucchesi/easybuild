import React from 'react';

export default function TemplateOne() {
  return (
    <>
      <header className="flex flex-wrap items-center w-full px-6 py-2 bg-white lg:h-16 lg:px-16 lg:py-0">
        <div className="flex items-center justify-between flex-1 h-full">
          <img className="h-12" src="/logo512.png" alt="Logo" />
        </div>

        <label htmlFor="menu-toggle" className="block pointer-cursor lg:hidden">
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
              {[...Array(6)].map((_, key) => (
                <li key={key}>
                  <a
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 lg:py-5 hover:border-black"
                    href="https://google.com"
                  >
                    Item #{key}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 ">
        <div className="flex flex-row ">
          <div className="flex-col w-full p-4 md:w-1/2 center-x">
            <h1 className="font-mono text-5xl font-bold">Title</h1>
            <h2 className="py-2 font-mono text-3xl font-medium">Subtitle</h2>
            <p className="py-2">Here goes a random paragraph</p>
            <button className="w-full mt-16 md:w-48">Call to Action</button>
          </div>

          <div className="hidden w-full p-4 md:w-1/2 md:center-x">
            <img src="/placeholder.png" alt="Placeholder" />
          </div>
        </div>
      </section>
      <section className="h-32 bg-gray-300 center-x center-y">
        <h3 className="font-mono text-3xl">Clients</h3>
      </section>
      <section className="bg-gray-400">
        {[...Array(4)].map((_, key) => (
          <div
            key={key}
            className="flex flex-col py-4 md:odd:flex-row md:even:flex-row-reverse"
          >
            <div className="self-center w-full py-4 md:p-4 lg:px-4 md:w-1/2">
              <img src="/placeholder.png" alt="Placeholder" />
            </div>

            <div className="flex-col w-full py-4 md:p-4 md:w-1/2 center-x">
              <h3 className="mb-8 font-mono text-3xl">Highlight #{key}</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2 className="py-4 font-mono text-3xl">Perks</h2>
        <div className="flex flex-wrap overflow-hidden md:-mx-4">
          {[...Array(6)].map((_, key) => (
            <div
              key={key}
              className="w-full my-3 overflow-hidden md:my-6 md:px-4 md:w-1/2 lg:w-1/3"
            >
              <div className="w-auto mb-4 ">
                <img src="/placeholder.png" alt="Placeholder" />
              </div>
              <h4 className="py-4 font-mono text-2xl">Perk #{key}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                quis nisl eget augue blandit porttitor a sed tortor. Curabitur
                hendrerit metus diam, sed consequat dui maximus non. Maecenas
                diam nulla, varius eget velit et, iaculis eleifend purus.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="text-center bg-gray-200 center-x center-y">
        <div className="md:w-3/4">
          <h3 className="py-4 font-mono text-l">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            malesuada ipsum and velit malesuada, vel molestie dui tempus. Duis
            eget.
          </h3>
          <button className="w-full md:w-96">Call to Action</button>
        </div>
      </section>
      <section className="bg-gray-300">
        <h2 className="py-4 font-mono text-3xl">About Us</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="self-center w-full xl:w-1/2">
            <img src="/placeholder.png" alt="Placeholder" />
          </div>
          <div className="flex-col w-full py-16 xl:p-16 xl:w-1/2 center-x">
            <p>
              Duis sagittis, sapien eu pellentesque consectetur, lectus magna
              posuere velit, ut ultrices diam tellus facilisis ante. Curabitur
              mollis dui purus, non semper nunc placerat nec. Aenean euismod
              quam molestie, lobortis lacus et, elementum orci. Suspendisse
              mollis vitae lectus mollis aliquam. Donec volutpat arcu ante, id
              pharetra urna imperdiet id. Cras ultricies lacinia lacus a rutrum.
              Ut hendrerit consequat elit at aliquet. Suspendisse at diam eget
              ipsum aliquam accumsan. Aenean vitae felis felis. Morbi eu elit
              mi.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tristique erat sit amet leo efficitur, a ultrices massa cursus.
              Morbi sed dui accumsan, imperdiet lorem eget, vehicula diam.
              Pellentesque velit nisl, posuere eget sapien quis, bibendum
              dignissim justo. Maecenas vitae vulputate augue. Fusce dictum vel
              nisl blandit laoreet. Nunc nulla erat, efficitur sed ornare sed,
              faucibus sed odio.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="flex-col center-y">
          <h2 className="py-4 mb-12 font-mono text-3xl">Contact Us</h2>

          <form className="w-full max-w-lg ">
            <div className="flex flex-wrap mb-8">
              <div className="w-full px-2 mb-8 md:w-1/2 md:mb-0">
                <label
                  className="block py-2 font-medium"
                  labelfor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border border-red-600 rounded appearance-none focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="italic text-red-600">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full px-2 md:w-1/2">
                <label
                  className="block py-2 font-medium"
                  labelfor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-8">
              <div className="w-full px-2">
                <label
                  className="block py-2 font-medium"
                  labelfor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <p className="italic text-gray-600">
                  Some tips - as long as needed
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mb-8">
              <div className="w-full px-2">
                <label
                  className="block py-2 font-medium"
                  labelfor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className="block w-full h-48 px-4 py-3 mb-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="px-2 md:flex md:items-center">
              <button className="w-full ">Send</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="text-gray-300 bg-gray-800 section ">
        <div className="grid max-w-screen-xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div>
            <h5 className="text-xl font-semibold text-white">Menu #1</h5>
            <nav className="py-4">
              <ul className="space-y-2">
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-white">About us</h5>
            <nav className="py-4">
              <ul className="space-y-2">
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-white">Legal</h5>
            <nav className="py-4">
              <ul className="space-y-2">
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
                <li>
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-white">Contact</h5>
            <div className="py-4 space-y-4 md:space-y-6">
              <div className="flex items-start space-x-4">
                <div>
                  <svg
                    className="w-6 h-6 mt-1 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <address className="not-italic">
                    Street
                    <br />
                    City
                    <br />
                    Country
                  </address>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    ƒ
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <a href="https://google.com" className="hover:text-white">
                    Item
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between max-w-screen-xl pt-16 mx-auto space-y-4 md:flex-row lg:pt-10">
          <img className="h-12" src="/logo512.png" alt="Logo" />
          <div className="text-sm">&copy;2021 Ralfer. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
