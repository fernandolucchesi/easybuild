import React from 'react';

const pricingPlans = [
  {
    name: 'Free',
    description: 'Forever free',
    price: '0',
    fee: '15%',
    perks: (
      <>
        <li>Chat with customers</li>
        <li>Manage your agenda</li>
        <li>
          <span className="font-black">03</span> tattoo auctions per month
        </li>
      </>
    ),
  },
  {
    name: 'Essential',
    description: 'Boost your career',
    price: '60',
    fee: '9%',
    perks: (
      <>
        <li>Chat with customers</li>
        <li>Manage your agenda</li>
        <li>Auction Statistics Overview</li>
        <li>
          <span className="font-black">10</span> tattoo auctions per month
        </li>
        <li>
          <span className="font-black">02</span> auction boosts per month
        </li>
      </>
    ),
  },
  {
    name: 'Pro',
    description: 'Take your career to the next level',
    price: '150',
    fee: '3%',
    perks: (
      <>
        <li>Chat with customers</li>
        <li>Manage your agenda</li>
        <li>Auction Statistics Overview</li>
        <li>
          <span className="font-black">20</span> tattoo auctions per month
        </li>
        <li>
          <span className="font-black">04</span> auction boosts per month
        </li>
        <li>
          <span className="font-black">02</span> agenda availability auctions
          per month
        </li>
        <li>
          <span>Add Google Analytics</span>
          <span className="ml-2 text-sm text-gray-500">not available yet</span>
        </li>
        <li>
          <span>Add Google Tag Manager</span>
          <span className="ml-2 text-sm text-gray-500">not available yet</span>
        </li>
        <li>
          <span>Add Facebook Pixel</span>
          <span className="ml-2 text-sm text-gray-500">not available yet</span>
        </li>
        <li>
          <span>Add Facebook Conversions API</span>
          <span className="ml-2 text-sm text-gray-500">not available yet</span>
        </li>
      </>
    ),
  },
];

export default function TemplateFive() {
  return (
    <>
      <section className="bg-center bg-cover bg-inkspace">
        <div className="container relative flex items-center h-screen px-4 mx-auto text-gray-200 lg:px-6">
          <img className="absolute top-4 " alt="Inkspace" src="/inkspace.svg" />
          <div className="flex flex-col">
            <h2 className="mb-4 font-medium tracking-wide uppercase md:text-lg">
              Tattoo auction house
            </h2>
            <h1 className="font-sans text-2xl font-extrabold tracking-wide lg:w-3/4 md:text-5xl lg:text-6xl ">
              Auction your tattooing services and get the most out of your art!
            </h1>
            <p className="mt-12 mb-8 font-light md:text-xl">
              Get exposed to new clients, replace bookings cancellations, and
              maximize your profits
            </p>
            <div>
              <button className="btn btn--outlined btn--cta">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-24 mx-auto bg-white lg:px-6 lg:py-40 ">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="w-full text-2xl font-extrabold tracking-wide md:text-4xl lg:w-2/5">
            Take your career to the next level — designed by tattoo lovers to
            tattoo artists
          </div>
          <div className="flex flex-col w-full space-y-12 md:flex-row md:space-x-12 md:space-y-0 lg:w-3/5">
            <div className="w-full space-y-4 md:w-1/2">
              <h2 className="text-2xl font-bold ">Auctioning Services</h2>
              <p className="text-gray-800">
                Auction your tattoos and agenda availability. Choose the best
                settings and dates for you, and we auction and notify all
                potential interested users in our platform.
              </p>
            </div>
            <div className="w-full space-y-4 md:w-1/2">
              <h2 className="text-2xl font-bold ">Sell with trust</h2>
              <p className="text-gray-800">
                Everything you need to become succesful: transparency, online
                support, engaged community, live chat, reminder messages and
                much more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 mx-auto bg-white lg:px-6">
        <div className="flex flex-col border lg:flex-row rounded-3xl">
          <div className="h-[250px] lg:w-1/2 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none lg:h-[500px]">
            <img
              className="object-cover object-top w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
              src="/artist.jpeg"
              alt="Tattoo artist"
            />
          </div>
          <div className="h-[250px] flex flex-col justify-center flex-grow w-full px-4 md:px-16 lg:h-[500px] bg-gray-100 rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:w-1/2">
            <h2 className="text-2xl font-bold md:text-4xl">
              With Inkspace I am able to replace 90% of my last time booking
              cancellations.
            </h2>
            <p className="mt-8 text-gray-800">
              Fernando,
              <br />
              Artist in Oslo, Norway
            </p>
          </div>
        </div>
      </section>
      <section className="container px-4 py-24 mx-auto bg-white lg:px-6 lg:py-40 ">
        <div className="w-full mb-12 text-2xl font-bold md:text-4xl">
          How do we help you
        </div>
        <div className="flex flex-wrap -mx-4">
          <div class="my-4 px-4 w-full overflow-hidden md:w-1/2 lg:w-1/3 space-y-4">
            <h2 className="text-2xl font-bold ">Unexpected cancellations</h2>
            <p className="text-gray-800">
              Do you have clients cancelling their bookings in the last minute?
              No problem! Pick one of your available designs and create an
              attractive auction, we will notify the tattoo fans in your
              surroundings about the last minute great tattoo deal!
            </p>
          </div>
          <div class="my-4 px-4 w-full overflow-hidden md:w-1/2 lg:w-1/3 space-y-4">
            <h2 className="text-2xl font-bold">Seasonal Clientele</h2>
            <p className="text-gray-800">
              Is it common for you be fully booked during the summer and
              struggle to get clients during the winter or holiday seasons? Take
              advantange of auctions to attract new customers during low seasons
              and maximize your profits during the high seasons!
            </p>
          </div>
          <div class="my-4 px-4 w-full overflow-hidden md:w-1/2 lg:w-1/3 space-y-4">
            <h2 className="text-2xl font-bold ">Top level artist</h2>
            <p className="text-gray-800">
              Are you always fully booked and your clients need to wait over 3
              months to get a tattoo with you? Spare some time of your agenda
              and auction it! Some would love to pay you an extra cash to skip
              the long waiting line.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-4 mx-auto bg-white lg:px-6 ">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 p-4 md:px-16  bg-cta bg-left-top md:bg-right bg-cover w-full relative border rounded-3xl h-[200px] md:h-[400px]">
          <div className="text-lg font-bold tracking-wide text-center text-white md:text-3xl lg:text-4xl">
            Let tattoo lovers compete for your work
          </div>
          <div>
            <button className="top-1/2 left-1/2 btn btn--cta btn--outlined">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 mt-25 md:mt-40">
        <div className="container px-4 py-20 mx-auto lg:px-6 lg:py-36">
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center w-1/4 space-y-2 text-gray-800">
              <h2 className="text-5xl font-bold">2</h2>
              <span className="text-lg font-semibold">users</span>
            </div>
            <div className="flex flex-col items-center w-1/4 space-y-2 text-gray-800">
              <h2 className="text-5xl font-bold">1</h2>
              <span className="text-lg font-semibold">countries</span>
            </div>
            <div className="flex flex-col items-center w-1/4 space-y-2 text-gray-800">
              <h2 className="text-5xl font-bold">0</h2>
              <span className="text-lg font-semibold">
                completed auctions daily
              </span>
            </div>
            <div className="flex flex-col items-center w-1/4 space-y-2 text-gray-800">
              <h2 className="text-5xl font-bold">0</h2>
              <span className="text-lg font-semibold">happy tattooists</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 py-24 mx-auto bg-white lg:px-6 lg:py-40 ">
        <div className="w-full mb-12 space-y-2">
          <h2 className="text-4xl font-bold">Pricing</h2>
          <h3 className="text-xl text-gray-800">
            We have the right plan for you
          </h3>
        </div>
        <div className="flex flex-row w-full space-x-16">
          {pricingPlans.map((plan) => (
            <div className="flex flex-col w-1/3 px-6 pt-12 pb-4 space-y-8 text-gray-800 duration-300 transform border cursor-pointer rounded-3xl hover:shadow-xl hover:border-gray-300 hover:-translate-y-2">
              <div>
                <h2 className="text-xl font-semibold text-black">
                  {plan.name}
                </h2>
                <div>{plan.description}</div>
              </div>
              <div className="flex flex-row items-end">
                <div className="text-4xl font-black">${plan.price}</div>
                <div>/month</div>
              </div>
              <button className="btn btn--cta">Get Started</button>
              <div className="flex-grow">
                <ul className="space-y-2 text-lg list-disc list-inside">
                  {plan.perks}
                </ul>
              </div>
              <div>
                <hr className="mb-4" />
                <span className="font-black">{plan.fee}</span> comission fee on
                every sale
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900">
        <div className="container px-4 py-24 mx-auto text-gray-100 lg:px-6 lg:py-40 ">
          Footer
        </div>
      </section>
    </>
  );
}
