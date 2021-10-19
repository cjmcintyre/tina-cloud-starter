import { Service } from "../../components/service";
import { getStaticPropsForTina, staticRequest } from "tinacms";
import { layoutQueryFragment } from "../../components/layout";
import type { ServicesDocument } from "../../.tina/__generated__/types";
import FourOhFour from "../404";

// Use the props returned by get static props
export default function ServicePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  if (props.data && props.data.getServicesDocument) {
    return <Service {...props.data.getServicesDocument} />;
  }
  // We're likely loading a new document that doesn't yet have data
  // show the 404 which will quickly be replace by client side content
  // from Tina
  return <FourOhFour />;
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query ServiceQuery($relativePath: String!) {
        ${layoutQueryFragment}
        getServicesDocument(relativePath: $relativePath) {
          data {
            order
            title
            author {
              ... on AuthorsDocument {
                data {
                  name
                  avatar
                }
              }
            }
            date
            heroImg
            body
          }
        }
      }
    `,
    variables: { relativePath: `${params.filename}.md` },
  })) as { data: { getServicesDocument: ServicesDocument } };
  return {
    props: {
      ...tinaProps,
    },
  };
};

/**
 * To build the service pages we just iterate through the list of
 * services and provide their "filename" as part of the URL path
 *
 * So a service at "content/services/hello.md" would
 * be viewable at http://localhost:3000/services/hello
 */
export const getStaticPaths = async () => {
  const servicesListData = (await staticRequest({
    query: `#graphql
      {
        getServicesList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })) as any;
  return {
    paths: servicesListData.getServicesList.edges.map((service) => ({
      params: { filename: service.node.sys.filename },
    })),
    fallback:'blocking',
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
