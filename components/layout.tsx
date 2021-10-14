import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";
import { Theme } from "./theme";
import { CookieConsent } from '@sandstreamdev/cookieconsent';
import '@sandstreamdev/cookieconsent/build/cookieconsent.min.css';

declare global {
  interface Window { gtmInitialized?: any; }
}

const prod_url = 'tina-area.vercel.app';

export const Layout = ({ rawData = "", data = layoutData, children }) => {

  useEffect(() => {
    const cc = new CookieConsent({
      "palette": {
        "popup": {
          "background": "#312e3b",
          "text": "#fff"
        },
        "button": {
          "background": "#4285f4",
          "text": "#ffffff",
        }
      },
      type: 'opt-in',
      consentSettingsElementId: 'cc-revoke-choice',
      layout: 'categories',
      showCategories: {
        [CookieConsent.UNCATEGORIZED]: false,
        [CookieConsent.ESSENTIAL]: true,
        [CookieConsent.PERSONALIZATION]: false,
        [CookieConsent.ANALYTICS]: true,
        [CookieConsent.MARKETING]: false
      },
      cookie: {
        expiryDays: 365*2,
        domain: prod_url,
        name: 'foo',
      },
      content: {
        privacyPolicyLink: '/privacy-policy',
        cookiePolicyLink: '/cookie-policy',
        message: `We use cookies to recognize your repeat visits and preferences, as well as to measure the effectiveness of campaigns and analyze traffic.  To accomplish this, we must store cookies on your device. If you're cool with that, hit "Accept all cookies". For more information and to customize your settings, hit "Customize settings".`,
        categoryAnalytics: 'These cookies collect information to help us understand how our website is being used. They allow us to count unique visits and see from where visitors came from. We can also see how users navigate between pages and what actions they take. With this information, we can measure and improve the content of our site and ensure its accessible to all users.',
        categoryEssential: `These cookies are necessary to make this site run properly and securely. For example, with this kind of cookies, we register your cookie preferences so that you won't be seeing this pop-up next time you visit our page and we can keep track which categories you have opted-in.`,
        // categoryMarketing: '',
        //  categoryPersonalization: '',
        //  categoryUncategorized: '',
        customizeMessage: `Here is an overview of the cookies we use on this site. Please select categories that you are OK with. You can always change your choices at any time, by clicking the "🍪" link on the site's footer.`,
      },
    });

    cc.on('initialized', function () {
      const { consents } = cc;
      if (consents.ESSENTIAL === 'ALLOW') {
        if (consents.ANALYTICS === 'ALLOW') {
          initializeGTM();
        }

        if (consents.ANALYTICS === 'DENY') {
          //cleanup gtags that got readded?
          console.log("oninitialise recleanup gtag hit")
          var checkgTag = document.cookie.indexOf('_ga_DC3ZXPZSXL');
          if (checkgTag === 41) {
            cc.deleteCookie("_ga_DC3ZXPZSXL");
          }

          var object2 = JSON.parse(localStorage.getItem("foo_ESSENTIAL"));
          if (object2) {
            var dateString = object2.timestamp;
            var now = new Date().getTime();
            if (now > (dateString + 604800000)) {
              document.cookie = `foo_ANALYTICS=DENY; domain=${prod_url}; max-age=0`;
              document.cookie = `foo_ESSENTIAL=ALLOW; domain=${prod_url}; max-age=0`;
            }
          } else {
            var object = { value: "ALLOW", timestamp: Date.now() }
            localStorage.setItem("foo_ESSENTIAL", JSON.stringify(object));
          }
        }
      }
    });

    cc.on('popupClosed', function () {
      const { consents } = cc;

      var object = { value: "ALLOW", timestamp: Date.now() }
      localStorage.setItem("foo_ESSENTIAL", JSON.stringify(object));

      if (consents.ANALYTICS === 'ALLOW') {
        initializeGTM();
      } else if (isGTMInitialized()) {
        uninitializeGTM();
      }
    });

    cc.on("statusChanged", function (...args) {
      console.log(...args);
    });

    cc.on("error", console.error)

    function isGTMInitialized() {
      return window.gtmInitialized;
    }

    function initializeGTM() {
      if (!isGTMInitialized()) {

        var newScript = document.createElement('script');
        const inlineScript = document.createTextNode(
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DC3ZXPZSXL');`);

        newScript.appendChild(inlineScript);

        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(newScript, x);

        var s = document.createElement('script');
        s.type = "text/javascript"
        s.async = true;
        s.src = "https://www.googletagmanager.com/gtag/js?id=G-DC3ZXPZSXL";
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        window.gtmInitialized = true;
      }
    }

    function uninitializeGTM() {
      // remove cookies
      cc.deleteCookie('_ga_DC3ZXPZSXL');
      cc.deleteCookie('_ga');

      // reload page to get rid of GTM
      location.reload();
    }
  }, []);

  return (
    <>
      <Head>
        <title>foobar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {data.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "mono" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "mont" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "robotoSlab" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Slab:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {/*   <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" /> */}
      </Head>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col 
          ${data.theme.font === "nunito" && "font-nunito"} 
          ${data.theme.font === "lato" && "font-lato"} 
          ${data.theme.font === "sans" && "font-sans"}
          ${data.theme.font === "mono" && "font-mono"}
          ${data.theme.font === "mont" && "font-mont"}
          ${data.theme.font === "robotoSlab" && "font-robotoSlab"}`}
        >
          <Header data={data?.header} />
          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex flex-col">
            {children}
          </div>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};

export const layoutQueryFragment = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      header {
        icon {
          name
          color
          style
        }
        color
        nav {
          href
          label
        }
      }
      footer {
        color
        social {
          facebook
          twitter
          instagram
          github
        }
      }  
      theme {
        color
        icon
        font
        darkMode
      }
    }
  }
`;
