
# Free React Serverless Hotel Booking Website Template 🛏️ 🏨

![Alt text](public/readme/main1-1.png?raw=true "Main Page")

Look, ma, no servers! This free template is designed for accommodation and hospitality websites and is built with React, Typescript, Vite, Tailwind, AirJam, and Stripe. This template is built in a full serverless manner, so you can easily get started by hosting on platforms such as Vercel, Netlify, a Node server, or even on your own local machine as a static website, and you don't have to worry about bringing up a server to back it up. Although this template is designed primarily as a website for private accommodations like B&Bs and lodges, the template can easily be adapted for various bookable hospitality services, including spas, salons, car rentals, kayak rentals, etc.


## Demo
A hosted demo of this template is available at https://free-react-serverless-booking-template.vercel.app/

The demo is wired up with Stripe under test mode, so feel free to use Stripe's [test card numbers](https://docs.stripe.com/testing#cards) to test payment processing flows.

![Alt text](public/readme/main1-2.png?raw=true "Main Page")
![Alt text](public/readme/main1-3.png?raw=true "Main Page")
![Alt text](public/readme/main2.png?raw=true "Main Page")
![Alt text](public/readme/main3.png?raw=true "Main Page")
![Alt text](public/readme/main4.png?raw=true "Main Page")



## Features
* Designed as a full PWA (Progressive Web App) using Tailwind and the template is tested with various web and mobile browsers for responsiveness. All responsive settings are controllable using Tailwind classes.
* Developed with TypeScript and SWC (Speedy Web Compiler), powered by Vite. To compile your project with SWC efficiency, use the `npm build` command to build your project, which triggers the Vite compiler.
* Uses Stripe to process payments. Use Stripe's dashboard to enable and support various payment processing options and workflows. If you're not interested in taking payments, you can simply ignore Stripe settings and mark your resources as free on AirJam to disable payment collection features.
* Booking functions are provided by AirJam's Appointment component, and it supports things like booking moderation, localization, and email notifications. Manage bookings, customize email designs, and handle internationalization via the AirJam Appointment component dashboard.
* You can obviously take advantage of the flexibility of React and Javascript to add whatever features you'd like to the template. You can keep your project serverless with tools like Firebase (for database) and Clerk (for auth), or connect to [Xano](https://www.xano.com/) or custom servers for building your own custom server-based features.
* The look and feel are entirely controlled by React, Tailwind, and CSS. Use these tools in any shape and form as you wish to mold the template to your specific design and functionality needs.


## Running the template

### tl;dr

To build, do:

```
git clone https://github.com/airjam-co/react-hospitality-site-starter
npm install
npm run build
```
Then, to run:
```
mv .env.example .env
npm run dev
```


### In detail

Run the steps above to clone, install, build, and run the template as-is. The template should work out-of-the-box. 

To customize the template for your own use, you will need your own [AirJam](https://airjam.co/) and [Stripe](https://stripe.com/) account to begin. First. sign up and configure your [Stripe](https://stripe.com/) account and grab Stripe's secret and publishable keys for use. Please refer to this [doc](https://docs.stripe.com/keys) to learn how to retrieve the keys from Stripe's dashboard. If you're not interested in processing payments, you can skip the Stripe configuration altogether.

The, sign up to [AirJam](https://airjam.co/) and create a new Appointment component by following following [this guide](https://airjam.co/appointment/how). As you are following the guide, please make sure you do the following:

* You can add as many resources (ie. individual rentable units) as you need, however, make sure to **set booking duration as Daily**, set minimum and maximum booking duration, and set booking increments, since this template is using Daily booking interface to let users to book resource in daily increments.
* For each resources, make sure to either set the price as $0 for free resources, or prices higher than **$0.50 USD per increment**, as Stripe does not process transactions smaller than that.


Once you are all configured with Stripe and AirJam, have Stripe's secret and publishable keys, and have an ID for your AirJam's Appointment component, then you can add those values to the .env files to configure your account to the template. Open `.env` file and change `VITE_AIRJAM_APPOINTMENT_ID` and `VITE_STRIPE_PUBLISHABLE_CLIENT_KEY` to your Appointment component ID and Stripe's publishable key, respectively, then goto your AirJam's Appointment component, choose Stripe as the payment processor, then past Stripe's secret key to the text box below the dropdown to wire your AirJam account with your Stripe account.

If you're not familiar with how to work with `.env` files, [refer to following guide](https://vite.dev/guide/env-and-mode#env-files) on how to work with `env` files in different environments. In production, it's highly recommended that you use [environment variables](https://vite.dev/guide/env-and-mode#env-variables) instead of `.env` files.


## Learn more
To learn more about specific technology used for this template, check out following resources:

* [How to create new Appointment component with AirJam](https://airjam.co/appointment/how)
* [Next.js Documentation](https://nextjs.org/docs)
* [Tailwind Documentation](https://tailwindui.com/documentation)

## About AirJam

AirJam offers a variety of serverless components that enable frontend engineers to easily add complex features to their projects without the need for server-side coding. This template leverages AirJam's Appointment component to add booking functionality.


## Support AirJam

😃 Everything in this template, including its features, is provided free of charge, sponsored by AirJam.  If you like this template, you can help us out for a [couple of beers](https://donorbox.org/support-airjam) 🍺 or give it a star ⭐ 