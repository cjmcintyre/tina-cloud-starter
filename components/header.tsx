import React, { useState, useRef } from "react";
import Link from "next/link";
import { Container } from "./container";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";
import { useRouter } from "next/router";
import useMediaQuery from "./hooks/useMediaQuery";
import useOutsideClick from "./hooks/useOutsideClick";

export const Header = ({ data }) => {
  const isMobile = useMediaQuery("(max-width:774px)");
  const theme = React.useContext(ThemeContext);
  
  let [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
 
  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-700 dark:to-gray-800",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 dark:border-blue-700",
    teal: "border-b-3 border-teal-200 dark:border-teal-700",
    green: "border-b-3 border-green-200 dark:border-green-700",
    red: "border-b-3 border-red-300 dark:border-red-700",
    pink: "border-b-3 border-pink-200 dark:border-pink-700",
    purple: "border-b-3 border-purple-200 dark:border-purple-700",
    orange: "border-b-3 border-orange-200 dark:border-orange-700",
    yellow: "border-b-3 border-yellow-300 dark:border-yellow-600",
  };

  const router = useRouter();

  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className={`bg-gradient-to-b ${headerColorCss}`} ref={ref}>
      <Container className="py-0 relative z-10 max-w-8xl">
        <div className="flex items-center justify-between">
          <h4 className="select-none text-lg font-bold tracking-tight my-4 transition duration-150 ease-out transform">
            <Link href="/" passHref>
              <a className="flex items-center">
                <Icon
                  parentColor={data.color}
                  data={{
                    name: data.icon.name,
                    color: data.icon.color,
                    size: "custom",
                  }}
                  className="inline-block h-auto w-10 mr-1"
                />{" "}
                foobar
              </a>
            </Link>
          </h4>
          {isMobile ?
            <>
              <button onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
              </button>
            </>
            :
            <ul className="flex gap-6 sm:gap-8 lg:gap-10">
              {data.nav &&
                data.nav.map((item, i) => {
                  const route =
                    router.asPath === "/" ? "home" : router.asPath || "home";
                  const href = item.href || "home";
                  const activeItem = route.includes(href);
                  return (
                    <li
                      key={`${item.label}-${i}`}
                      className={activeItem ? activeItemClasses[theme.color] : ""}
                    >
                      <Link href={`/${item.href || "home"}`}>
                        <a className="select-none	text-base inline-block tracking-wide font-regular transition duration-150 ease-out opacity-70 hover:opacity-100 py-8">
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          }
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        ></div>
        {isMobile && isOpen ?
          <ul className=" traflex-auto flex-col text-center" >
            {data.nav &&
              data.nav.map((item, i) => {
                const route =
                  router.asPath === "/" ? "home" : router.asPath || "home";
                const href = item.href || "home";
                const activeItem = route.includes(href);
                return (
                  <li
                    key={`${item.label}-${i}`}
                    className={`flex ${activeItem ? activeItemClasses[theme.color] : ""} `}
                  >
                    <Link href={`/${item.href || "home"}`}>
                      <a className="w-full select-none text-base inline-block tracking-wide font-regular transition duration-150 ease-out opacity-70 hover:opacity-100 py-8">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
          : false}
      </Container>
    </div>
  );
};
