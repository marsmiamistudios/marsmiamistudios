import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";
import Rooms from "./app/Rooms/page";

const config = {
  // REQUIRED
  appName: "Mars Miami Studios",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Miami's Diamond Studio",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "http://marsmusicstudios.com/",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? ""
            : "",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Studio B",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for smaller projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 25,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 40,
        features: [
          {
            name: "Neumann U87 Condenser Microphone",
          },
          { name: "Focuscrite Scarlet 2i2" },
          { name: "Universal Audio 6176 Vintage Channel Strip" },
          { name: "Akai Professional MPK249 49-key Keyboard Controller"},
          { name: "Alesis Monitor Two's"},
          { name: "KRK Rokit 8s" },
          { name: "HD Monitor + TV" },
        ],
      },
      {
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PTHqhHYk9DUtBP3l9IFqCPx"
            : "price_456",//todo change to prod price id
        // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
        isFeatured: true,
        name: "Studio A",
        description: "Top tier studio and recording booth designed by Kris Bentley.",
        price: 55,
        priceAnchor: 75,
        features: [
          {
            name: "Recording Booth",
          },
          {
            name: "Neumann U87 Condenser Microphone",
          },
          { name: "Focuscrite Clarett OctoPro Pre-Amp" },
          {name:"Maag Audio EQ4 500 Series 6-band Equalizer"},
          { name: "Universal Audio Apollo x8 Audio Interface" },
          { name: "Avalon VT-737SP Tube Channel Strip" },
          {name: "Purple Audio MC77 Limiting Amp"},
          {name:"Augspurger Duo Speakers"},
          { name: "2 HD Monitors + TV" },
        ],
      },
    ],
  },
  studios: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    Rooms: [
      {
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Studio B",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for smaller projects",
        // The price you want to display, the one user will be charged on Stripe.
        price: 25,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 40,
        features: [
          {
            name: "Neumann U87 Condenser Microphone",
          },
          { name: "Focuscrite Scarlet 2i2" },
          { name: "Universal Audio 6176 Vintage Channel Strip" },
          { name: "Akai Professional MPK249 49-key Keyboard Controller"},
          { name: "Alesis Monitor Two's"},
          { name: "KRK Rokit 8s" },
          { name: "HD Monitor + TV" },
        ],
      },
      {
        name: "Studio A",
        description: "Top tier studio and recording booth designed by Kris Bentley.",
        price: 55,
        priceAnchor: 75,
        features: [
          {
            name: "Recording Booth",
          },
          {
            name: "Neumann U87 Condenser Microphone",
          },
          { name: "Focuscrite Clarett OctoPro Pre-Amp" },
          {name: "Focusrite Red 1 500 Pre-Amp"},
          {name: "Neve 1073LB 500 Series Mono Microphone Pre-Amp"},
          {name: "Louder Than Liftoff Silver Bullet Stereo Tone Amp"},
          {name:"Maag Audio EQ4 500 Series 6-band Equalizer"},
          {name:"Solid State Logic G Comp 500 Series Stereo Bus Compressor"},
          {name:"Shadow Hills Mono Optograph 500 Mastering Compressor"},
          {name:"Wes Audio ngBusComp"},
          { name: "Universal Audio Apollo x8 Audio Interface" },
          { name: "Universal Audio 6176 Vintage Channel Strip" },
          { name: "Avalon VT-737SP Tube Channel Strip" },
          {name: "Purple Audio MC77 Limiting Amp"},
          {name: "BetterMaker Mastering Limiter"},
          {name:"Augspurger Duo Speakers"},
          { name: "2 HD Monitors + TV" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Mars Miami Studios <marsmiamistudio@gmail.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Mars Miami Studios <marsmiamistudio@gmail.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "marsmiamistudio@gmail.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "marsmiamistudio@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "luxury",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes["luxury"]["luxury"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
