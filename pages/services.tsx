import { getStaticPropsForTina } from "tinacms";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { Services } from "../components/services";
import { layoutQueryFragment } from "../components/layout";
import type { ServicesConnection } from "../.tina/__generated__/types";

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const services = props.data.getServicesList.edges;

  return (
    <Section >
      <Container className="flex flex-wrap justify-evenly " size="small">
        <Services data={services}/>
      </Container>
    </Section>
  );
}

export const getStaticProps = async () => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query PageQuery {
        ${layoutQueryFragment}
        getServicesList {
          edges {
            node {
              id
              values
              data {
                author {
                  ... on AuthorsDocument {
                    data {
                      name
                      avatar
                    }
                  }
                }
              }
              sys {
                filename
              }
            }
          }
        }
      }
    `,
    variables: {},
  })) as { data: { getServicesList: ServicesConnection } };

  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
