import Stack from "../../components/elements/Stack"
import image01 from "./images/image01.png"
import image02 from "./images/image02.png"
import data from "."

const Page = () => (
  <Stack
    css={`
      padding-top: 1rem;
    `}
    data-aos={`fade`}
    gap={`1rem`}
  >
    <p>{data.excerpt}</p>
    <p>Below is an example of the CSS prop in Styled Components:</p>
    <img src={image01} />
    <p>
      Let me start by saying, if you are comfortable with having a separate file
      for <code>CSS/SCSS</code> this might not be what you're looking for. The
      CSS prop brings back memories of the early days of styling React
      components using inline styling, except now you have access to all if not
      most of what stylesheets and SCSS can do (e.g. nesting, media queries,
      selectors, the list goes on....).
    </p>
    <p>
      CSS-in-JS solutions are very powerful because they give you the ability to
      manipulate styles using Javascript in a more direct way. However, similar
      to writing CSS class names, most recommended CSS-in-JS methods still
      require you to create a whole bunch of new variables or components, and
      naming things is always a struggle in programming. So why do it at all?
      The CSS prop lets you simply add styles to native JSX components without
      having to add all the boilerplate code when creating new styled components
      and also avoid having to pass custom props in.
    </p>
    <img src={image02} />
    <p>
      You still have access to the theme for consistency and all of Javascript
      without the overhead. While you might argue that there should be a
      separation of concerns and styling doesn't belong on markup, I would say
      that using the CSS prop comes with a useful side effect of encouraging
      code reusability. Since you don't have the convenience of simply pasting
      the same class name all over your markup, you are more likely to extract
      and reuse React components instead, making your markup much more modular.
    </p>
    <p>
      I have seen many React codebases, and because of how the files are
      normally structured, people tend to have too much business logic tangled
      into the markup. Frameworks such as Angular and Vue tend to prevent this a
      little more because there is no Javascript in their markup syntax.
      However, React markup IS Javascript. Between marrying business logic and
      markup compared to styling and markup, the latter just makes a lot more
      sense. The CSS prop is just another reason why you should do so.
    </p>
    <p>
      Nothing great comes for free, and this feature isn't ready for use out of
      the box after installing Styled Components in your project. You will have
      to add a Babel plugin in your configuration, and if you're using
      Typescript, add this into one of your types files:
    </p>
    <code>{`/// <reference types="styled-components/cssprop" />`}</code>
    <p>
      For small projects, when I'm working solo or if performance isn't of
      utmost importance, this is my go-to choice for styling in React. Not
      having to open separate style sheets, think of new class names and then
      add them to the markup is just wonderful. Not to mention, you will never
      get into trouble with those pesky class name typos again.
    </p>
    <p>For more, visit the official documentation for using CSS prop:</p>
    <a
      href={`https://styled-components.com/docs/api#css-prop`}
      rel={`noreferrer`}
      target={`_blank`}
    >
      https://styled-components.com/docs/api#css-prop
    </a>
  </Stack>
)

export default Page
