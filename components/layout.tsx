import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";
import { Theme } from "./theme";

declare global {
  interface Window { cookieconsent?: any; }
}

export const Layout = ({ rawData = "", data = layoutData, children }) => {
  

   useEffect(() => {
              window.cookieconsent?.initialise({
                "palette": {
                  "popup": {
                    "background": "#6c63ff",
                  },
                  "button": {
                    "background": "#fff",
                    "text": "#237afc"
                  }
                },
                "theme": "classic",
                "position": "bottom",
                "type": "opt-in",
                "content": {
                  "href": "http://localhost:3000/privacy"
                },
                "revokable" : true,
                revokeBtn: `<div class="cc-revoke cc-bottom cc-animate cc-color-override-782958852">🍪 Cookie policy</div>`,
                 onInitialise: function(status) {
                  var type = this.options.type;
                  var didConsent = this.hasConsented();

                  if (type == 'opt-in' && didConsent) {
                    setCookies()
                  // enable cookies
                  }
                  if (type == 'opt-out' && !didConsent) {
                    deleteCookies(this.options.cookie.name);
                  // disable cookies
                  }
                }, 
                onStatusChange: function(status) {
                this.hasConsented() ? setCookies() : deleteCookies(this.options.cookie.name);
                },
                onRevokeChoice: function() {
                  var type = this.options.type;
                  type == "opt-in" ? deleteCookies(this.options.cookie.name) : setCookies();
                },
                law: {
                regionalLaw: false,
                },
                "dismissOnScroll": 200,
                "dismissOnTimeout": 15000,
                "dismissOnWindowClick": true,
              });
            
  }, []);

  function setCookies() {
      console.log("setCookies hit")
      var s = document.createElement('script');
      s.type = "text/javascript"
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=G-DC3ZXPZSXL";
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      var script = document.createElement('script');
      script.innerHTML = `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-DC3ZXPZSXL');`
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(script, x);

      // you can add facebook-pixel and other cookies here
  };

  function deleteCookies(cookieconsent_name) {
    console.log(cookieconsent_name, " inside deletecookies");
    var keep = [cookieconsent_name, "DYNSRV"];
    
    document.cookie.split(';').forEach(function(c) {
        console.log(c);
        c = c.split('=')[0].trim();
        if (!~keep.indexOf(c))
            document.cookie = c + '=;' + 'expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
    });
  };
  return (
    <>
      <Head>
        <title>Tina</title>
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
          <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
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
