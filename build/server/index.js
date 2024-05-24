import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { RiFlowerFill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { GiSeatedMouse, GiAnt } from "react-icons/gi";
import { SiCockroachlabs } from "react-icons/si";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-BB1H3bTN.css";
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const links = () => [
  { rel: "stylesheet", href: stylesheet }
];
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const f1 = "/assets/f1-D260D83x.webp";
const f2 = "/assets/f2-CLWBkTpJ.webp";
const f3 = "/assets/f3-lae3C-UF.webp";
const logo$1 = "/assets/logo1-vqwx5uCz.webp";
const Footer = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center  justify-center  w-full mt-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full bg-red-600 h-14 items-center justify-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-white text-3xl", children: "Get Started Today! Call us at 360-810-5420 or" }),
      /* @__PURE__ */ jsx("button", { className: "bg-black text-white h-8 p-1 ml-2", children: "Get a Free Estimate" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-center bg-white w-full h-28", children: [
      /* @__PURE__ */ jsx("img", { src: f1, className: "h-16 mr-10" }),
      /* @__PURE__ */ jsx("img", { src: f2, className: "h-16 mr-10" }),
      /* @__PURE__ */ jsx("img", { src: f3, className: "h-16 mr-10" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-gray-800 w-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-evenly", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: logo$1, className: "h-28" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center ", children: [
          /* @__PURE__ */ jsxs("p", { className: "relative text-lg font-medium group transition duration-300 text-white mr-4", children: [
            "Our Services",
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "relative text-lg font-medium group transition duration-300 text-white mr-4 ", children: [
            "About Us",
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "relative text-lg font-medium group transition duration-300 text-white mr-4", children: [
            "Areas We Service",
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "relative text-lg font-medium group transition duration-300 text-white mr-4", children: [
            "Special Offers",
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "relative text-lg font-medium group transition duration-300 text-white mr-4", children: [
            "Contact Us",
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-0 w-0 h-1 bg-red-700 transition-all duration-300 group-hover:w-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ jsx(FaFacebookF, { className: "text-white" }),
          /* @__PURE__ */ jsx(FaGoogle, { className: "text-white" }),
          /* @__PURE__ */ jsx(RiFlowerFill, { className: "text-white" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row mt-8 items-center justify-evenly", children: [
        /* @__PURE__ */ jsx("div", { className: "text-white", children: "© 2024 Sound Pest Control. All rights reserved." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: "ADDRESS" }),
          /* @__PURE__ */ jsx("p", { className: "text-white", children: "6701 Kitsap Way" }),
          /* @__PURE__ */ jsx("p", { className: "text-white", children: "Bremerton WA 98312" }),
          /* @__PURE__ */ jsx("p", { className: "text-white", children: "Tel:360-692-1616" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: "HOURS" }),
          /* @__PURE__ */ jsx("p", { className: "text-white", children: "M-F: 8AM-5PM" }),
          /* @__PURE__ */ jsx("p", { className: "text-white", children: "SAT: Closed" }),
          /* @__PURE__ */ jsx("p", { className: "text-white", children: "SUN: Closed" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-white", children: "Privacy Policy" })
      ] })
    ] })
  ] });
};
const comunity = "/assets/community-Clvz-34l.webp";
const contract = "/assets/Contracts-BloYZ5jc.webp";
const From = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[2000px]  pl-24 mt-8", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-5xl", children: "Professional Pest Control in Puget Sound" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg mt-5", children: [
        "If you are looking for an exceptional, local pest control company in the Puget Sound area, you found it! ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: " With over 30 years of experience and community involvement, we offer recurring servicing for year-round protection, as well as one-time treatments, " }),
        "working with you to exterminate and eliminate all common pests and providing you with peace of mind. "
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg mt-5", children: [
        "Our local exterminators, who live in, work in, and contributed to the Bremerton community and beyond, ",
        /* @__PURE__ */ jsx("span", { className: "font-bold", children: " go through an extensive training and certification process conducted by the state of Washington " }),
        " to ensure all of our services are exemplary and bring as little harm to the environment as possible, ensuring your family's safety. We prioritize eco-friendly pest control, using 100% EPA-approved products. "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-evenly mt-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center bg-gray-400 rounded-full h-28 w-56 mr-4", children: /* @__PURE__ */ jsx("img", { src: contract, className: "h-14 w-28" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-lg", children: "No Contracts" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: "We are confident that you’ll be satisfied with the quality of our pest control services, which is why we don’t require monthly contracts with our services." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-evenly mt-5", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center bg-gray-400 rounded-full h-28 w-56 mr-4", children: /* @__PURE__ */ jsx("img", { src: comunity, className: "h-14 w-28" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-lg", children: "Community Involvement" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: "We donate our time and money to the Central Kitsap Food Bank. When you choose Sound Pest, you’re helping feed those in need!" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col  items-center bg-black w-full ml-16 mr-16 mt-10", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-4xl text-white mt-4", children: "Get A Free Estimate" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row mt-3 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mr-12", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "First Name",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("input", { className: "h-8 w-56" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "Last Name",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("input", { className: "h-8 w-56" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row mt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mr-12", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "Phone",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("input", { className: "h-8 w-56" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "Email",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("input", { className: "h-8 w-56" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row mt-3 ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
          "Address",
          /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
        ] }),
        /* @__PURE__ */ jsx("input", { className: "h-8 w-[520px]" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row mt-3 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mr-12", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "City/Town",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("input", { className: "h-8 w-56" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "State/Province",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("select", { className: "h-8 w-56", children: /* @__PURE__ */ jsx("option", { value: "default", disabled: true, selected: true, children: "-select-" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row mt-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col mr-12", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "ZIP/Postal Code",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("input", { className: "h-8 w-56" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
            "Country",
            /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
          ] }),
          /* @__PURE__ */ jsx("select", { className: "h-8 w-56", children: /* @__PURE__ */ jsx("option", { value: "default", disabled: true, selected: true, children: "-None-" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row mt-3 ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
          "Are You a New Customer?",
          /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
        ] }),
        /* @__PURE__ */ jsx("select", { className: "h-8 w-[520px]", children: /* @__PURE__ */ jsx("option", { value: "default", disabled: true, selected: true, children: "-None-" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row mt-3", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-white text-lg", children: [
          "How can we help you?",
          /* @__PURE__ */ jsx("span", { className: "text-red-700 text-lg", children: "*" })
        ] }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-[520px] h-32 p-2 border border-gray-300 rounded"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-white -ml-24 mt-1", children: "By submitting this form, you are agreeing to the privacy policy." }),
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor p-2 text-white mt-16 mb-4", children: "Get Started Today" })
    ] })
  ] });
};
const family = "/assets/family-Dn1M0YbH.jpg";
const HeroSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-[500px] items-center  bg-cover bg-center ", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-[900px] bg-black h-full ", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-7xl ml-16 mt-8 text-white", children: "Get Started Today with a Free Quote!" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-3xl ml-16 mt-6 text-white", children: "Our team of experienced and professionally-trained exterminators understands that each pest infestation is unique, which is why we offer customized pest solutions." }),
        /* @__PURE__ */ jsx("button", { className: "bg-btncolor p-1 w-96 text-white font-bold text-lg ml-16 mt-6", children: "Get Your Free, No-Commitment Estimate" })
      ] }),
      /* @__PURE__ */ jsx("img", { src: family, className: "w-[800px] h-[500px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-24 font-bold text-3xl items-center justify-center bg-orange-400 text-white", children: [
      "Are You Unhappy With Your Current Pest Control Company?",
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor text-white text-xl h-10 ml-4 p-1 font-normal", children: "Switch to sound Pest control" })
    ] })
  ] });
};
const logo = "/assets/logo-D7s0rDFA.webp";
const NavbarLogo = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center justify-between md:h-32 bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "ml-16", children: /* @__PURE__ */ jsx("img", { src: logo, className: "h-28 transform transition duration-300 hover:scale-110" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col mr-16 items-end", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-2xl", children: "Call Your Local Pest Pros Today!" }),
        /* @__PURE__ */ jsx("p", { className: "font-bold text-4xl text-red-600", children: "Call Us Today! 360-810-5420" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row h-12 w-full items-center justify-center gap-6 bg-red-500 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white", children: [
        "Our Services",
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180", children: /* @__PURE__ */ jsx("path", { className: "fill-current", d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white", children: [
        "About Us",
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "h-5 ml-2  group-hover:text-white transition-transform group-hover:rotate-180", children: /* @__PURE__ */ jsx("path", { className: "fill-current", d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white", children: [
        "Areas We Service ",
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "h-5 ml-2 group-hover:text-white transition-transform group-hover:rotate-180", children: /* @__PURE__ */ jsx("path", { className: "fill-current", d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white", children: "Special Offers" }),
      /* @__PURE__ */ jsxs("div", { className: "group flex font-bold text-lg text-white hover:bg-slate-800 h-full items-center p-2 hover:text-white", children: [
        "Contact Us ",
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "h-5 ml-2  group-hover:text-white transition-transform group-hover:rotate-180", children: /* @__PURE__ */ jsx("path", { className: "fill-current", d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" }) })
      ] })
    ] })
  ] });
};
const NavbarOne = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col md:flex-row w-full md:h-14 h-24 justify-center md:justify-between items-center   bg-gray-800", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row items-center mb-2 md:mb-0 md:ml-20", children: [
      /* @__PURE__ */ jsx("p", { className: "text-white font-bold md:text-lg mr-2", children: "4.4 Star Rating" }),
      /* @__PURE__ */ jsx(
        ReactStars,
        {
          count: 5,
          value: 4.4,
          size: 30,
          isHalf: true,
          emptyIcon: /* @__PURE__ */ jsx("i", { className: "far fa-star" }),
          halfIcon: /* @__PURE__ */ jsx("i", { className: "fa fa-star-half-alt" }),
          fullIcon: /* @__PURE__ */ jsx("i", { className: "fa fa-star" }),
          activeColor: "#ffd700",
          edit: false
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-white font-bold md:text-lg ml-2", children: "82 reviews" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row md:mr-20", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor text-white font-bold p-1 md:p-2 mr-3", children: "Contact Us" }),
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor text-white font-bold p-1 md:p-2 ", children: " Special Offers" })
    ] })
  ] }) });
};
const Offers = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full h-[500px] bg-slate-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-1/2 h-full items-center justify-evenly", children: [
      /* @__PURE__ */ jsx("div", { className: "flex bg-gray-800 items-center justify-center w-full sm:w-72 h-[460px]", children: /* @__PURE__ */ jsxs("div", { className: "border-dashed border-8 border-gray-400 w-full sm:w-64 h-[440px] flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-white text-5xl text-center", children: "$30 off pest control" }),
        /* @__PURE__ */ jsx("p", { className: "text-white text-3xl text-center", children: "For New Customers" }),
        /* @__PURE__ */ jsx("button", { className: "bg-btncolor text-white w-52 h-8 text-sm", children: "Redeem Offer" }),
        /* @__PURE__ */ jsx("img", { src: logo, className: "w-36 h-24 mt-1" }),
        /* @__PURE__ */ jsx("p", { className: "text-white", children: "Expires:" }),
        /* @__PURE__ */ jsx("p", { className: "text-white", children: "05/31/2024" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row w-full sm:w-1/2 h-full items-center justify-evenly", children: /* @__PURE__ */ jsx("div", { className: "flex bg-white items-center justify-center w-full sm:w-72 h-[460px]", children: /* @__PURE__ */ jsxs("div", { className: "border-dashed border-8 border-gray-400 w-full sm:w-64 h-[440px] flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold text-red-700 text-5xl text-center", children: "$30 off" }),
        /* @__PURE__ */ jsx("p", { className: "text-black text-4xl text-center", children: "For Active & Veteran Military" }),
        /* @__PURE__ */ jsx("button", { className: "bg-btncolor text-white mt-12 w-52 h-8 text-sm", children: "Redeem Offer" }),
        /* @__PURE__ */ jsx("img", { src: logo, className: "w-36 h-24 mt-1" }),
        /* @__PURE__ */ jsx("p", { className: "text-black", children: "Expires:" }),
        /* @__PURE__ */ jsx("p", { className: "text-red-400", children: "05/31/2024" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-1/2 h-full ", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-4xl  p-6", children: "Save Some Cash Today!" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg p-6", children: "We know that choosing a pest control service is an important decision. Let us make it easy for you to get started with us with these exclusive special offers!" }),
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor  h-10 w-44 ml-5 text-white", children: "View All Saving" })
    ] })
  ] }) });
};
const Problem = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full  items-center justify-center bg-gray-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-3xl mt-4", children: [
      "What kind of ",
      /* @__PURE__ */ jsx("span", { className: "font-bold text-3xl", children: "problem " }),
      "are you having? ",
      /* @__PURE__ */ jsx("span", { className: "font-bold text-2xl", children: "Select all that apply." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col m-4  items-center justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl pl-2 pr-2 w-48 h-14 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiSeatedMouse, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Rodents" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 w-48  h-14 rounded-3xl pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Carpenter Ants" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48  h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Odorous House Ants" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Termites" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(SiCockroachlabs, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Bed Bugs" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiSeatedMouse, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Moles" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Termites" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(SiCockroachlabs, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Bed Bugs" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiSeatedMouse, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Moles" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Termites" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(SiCockroachlabs, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Bed Bugs" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiSeatedMouse, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Moles" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Termites" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(SiCockroachlabs, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Bed Bugs" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiSeatedMouse, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Moles" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-6 mt-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Termites" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(SiCockroachlabs, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Bed Bugs" }),
          " "
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
            /* @__PURE__ */ jsx(GiSeatedMouse, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
            " "
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Moles" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-6 mt-6", children: /* @__PURE__ */ jsxs("div", { className: "group flex flex-row items-center justify-evenly bg-white p-1 rounded-3xl w-48 h-14 pl-2 pr-2 hover:border-2 border-red-600", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex group-hover:bg-red-500 rounded-full h-12 w-12 items-center justify-center mr-2", children: [
          /* @__PURE__ */ jsx(GiAnt, { className: "text-red-600 group-hover:text-white h-10 w-10" }),
          " "
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "Termites" }),
        " "
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row mt-9 items-center ", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor p-2 mr-8 text-white font-bold", children: "More Option" }),
      /* @__PURE__ */ jsx("button", { className: "bg-btncolor p-2 text-white font-bold", children: "Get My Solution" })
    ] })
  ] });
};
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(NavbarOne, {}),
    /* @__PURE__ */ jsx(NavbarLogo, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(Problem, {}),
    /* @__PURE__ */ jsx(From, {}),
    /* @__PURE__ */ jsx(Offers, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DPoy0x38.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js", "/assets/components-yMMKGiC_.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-C76giVEJ.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js", "/assets/components-yMMKGiC_.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-KMUa2Dke.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js"], "css": ["/assets/_index-D-CY9PJp.css"] } }, "url": "/assets/manifest-567266c9.js", "version": "567266c9" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
