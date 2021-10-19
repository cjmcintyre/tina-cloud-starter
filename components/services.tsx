import React from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import { BsArrowRight } from "react-icons/bs";
import { ThemeContext } from "./theme";
import format from "date-fns/format";

export const Services = ({ data }) => {
  const theme = React.useContext(ThemeContext);
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };

  return (
    <>

      {data.map((serviceData) => {
        const service = serviceData.node;
        /**
         * Formats date field value to be more readable.
         */
        let formattedDate
        if (service?.values.date !== null) {
          const date = service.values.date ? new Date(service?.values?.date) : '';
          formattedDate = date ? format(date, "MMM dd, yyyy") : date;
        }

        return (
          <div className="p-2 group" key={service.sys.filename}>
            <div className="max-w-sm rounded overflow-hidden shadow-sm transition-all duration-250 ease-out hover:shadow-lg bg-white h-full">
              <img className="w-full h-72 p-6" src={service.values.excerptImg}></img>

              <div className="px-6 py-4">

                <Link
                  key={service.sys.filename}
                  href={`/services/` + service.sys.filename}
                  passHref
                >
                  <a
                    key={service.id}
                    className="group block"
                  >
                    <h3
                      className={`text-gray-900 dark:text-white text-2xl font-semibold title-font mb-5 transition-all duration-150 ease-out underline  ${titleColorClasses[theme.color]
                        }`}
                    >
                      {service.values.title}{" "}
                      <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <BsArrowRight className="inline-block h-8 -mt-1 ml-1  opacity-70" />
                      </span>
                    </h3>
                  </a>
                </Link>

                <p className="text-gray-700 text-base">
                  {service.values.excerpt}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">

              </div>
            </div>

          </div>
        );
      })}
    </>
  );
};
