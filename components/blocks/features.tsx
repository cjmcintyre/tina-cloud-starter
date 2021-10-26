import { Actions } from "../actions";
import { Section } from "../section";
import { Container } from "../container";
import { Icon } from "../icon";

export const Feature = ({ featuresColor, data, index }) => {
  return (
    <div
      className="flex-1 flex flex-col gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
      data-aos={'fade-up'}
      data-aos-delay={index * 500}
      data-aos-offset={300}
      data-aos-duration={600}
    >
      {data.icon && <Icon parentColor={featuresColor} data={data.icon} />}
      {data.title && (
        <h3 className="text-2xl font-semibold title-font">{data.title}</h3>
      )}
      {data.text && (
        <p className="text-base opacity-80 leading-relaxed">{data.text}</p>
      )}
      {data.actions && <Actions actions={data.actions} />}
    </div>
  );
};

export const Features = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Feature featuresColor={data.color} key={i} index={i} data={block}/>;
          })}
      </Container>
    </Section>
  );
};
