import ImageAuthor from "../../components/elements/ImageAuthor"
import Stack from "../../components/elements/Stack"
import image01 from "./images/image01.gif"
import image02 from "./images/image02.png"
import image03 from "./images/image03.gif"
import image04 from "./images/image04.png"
import image05 from "./images/image05.png"
import image06 from "./images/image06.png"
import image07 from "./images/image07.gif"
import image08 from "./images/image08.png"
import image09 from "./images/image09.gif"
import image10 from "./images/image10.gif"
import data from "."

const Page = () => (
  <Stack
    data-aos={`fade`}
    gap={`1rem`}
    css={`
      padding-top: 1rem;
    `}
  >
    <p>
      Here’s my list of the most useful Visual Studio Code extensions that you
      can find today to improve your efficiency and productivity.
    </p>

    <br />

    <h3>1. Auto Rename Tag</h3>
    <p>
      A simple extension that renames the closing HTML/XML tag. You would think
      that this feature would come out of the box from VS Code by now, but as of
      today, while there is a built-in setting to turn this on for HTML files
      using the setting <code>editor.linkedEditing</code>, there is none for
      {` `}
      <code>.jsx</code> or <code>.tsx</code> files.
    </p>
    <img src={image01} />

    <br />

    <h3>2. Bracket Pair Colorizer 2</h3>
    <p>
      Identifies matching brackets and colourizes them. This extension is all
      about improving readability, and once you start using this you will wonder
      how you ever coded without it. Interestingly the first version of this
      extension is still being used much more widely than this updated version
      even with the improved performance. Guess you can’t stop the momentum.
    </p>
    <img src={image02} />

    <br />

    <h3>3. Code Runner</h3>
    <p>
      Run code snippets or files for most mainstream languages. For frontend web
      development, it saves you the hassle of opening a browser console and
      typing your code out.
    </p>
    <p>
      You can manually select the language that you want it to run, but I
      normally code in typescript and needed to do a few tweaks to get it to
      work. It requires <code>ts-node</code> to be installed globally and the
      following in your VS Code settings.
    </p>
    <p>
      <code>{`"code-runner.executorMap": { "typescript": "ts-node -T" }`}</code>
    </p>
    <p>
      This sets the transpile only flag on and turns off type checking so that
      you can run snippets without worrying about type or module errors.
    </p>
    <img src={image03} />

    <br />

    <h3>4. ESLint</h3>
    <p>Integrates ESLint into VS Code. Enough said.</p>
    <p>
      Here are some of the linting rules that I add on top of the recommended
      ones, and some rationale behind them
    </p>
    <ul>
      <li>
        Unused variables take up memory and leave dead code lying around. This
        coupled with <code>ts-prune</code> helps clean things up.
      </li>
      <li>
        Single or double quotes? Neither. Template literals with backticks were
        introduced in ES6 and nullify the debate of whether single quotes or
        double quotes are used more in text. Do you ever use backticks in your
        sentences? I guess not. With embedded expressions such a useful and
        common way of writing code nowadays, why go through the hassle of
        switching between different quotation marks anymore?
      </li>
      <li>
        <code>import/order</code> and <code>sort-imports</code> organise your
        imports nicely. The reason for using both is that they autofix different
        parts of the imports.
      </li>
      <li>No. Console.</li>
      <li>
        Similar to the discussion on which quotation marks to use, I opted to
        simplify JSX props by using curly brace everywhere. Why complicate life
        with so many options and conditions? Just pick the most versatile option
        and stick to it.
      </li>
    </ul>
    <img src={image04} />

    <br />

    <h3>5. GitLens</h3>
    <p>
      Helps to visualize code history and authorship using Git. A tool that
      greatly increases accessibility in discovering whom, why and when a line
      or code block was changed. Extremely useful when working in teams to dive
      deeper into intentions of code blocks and collaboration. In other words,
      you can quickly find out who is responsible for that badly written line of
      code. ;)
    </p>
    <img src={image05} />

    <br />

    <h3>6. Prettier</h3>
    <p>
      I don’t think it is an understatement when I say that Prettier has saved
      countless hours, possibly days or even weeks of my life. If you care about
      how tidy your code is to the last detail (which I believe most programmers
      do), this extension takes care of most of the little things for you, from
      indentation to semicolons and trailing commas. And while we’re on the
      topic of semicolons, no we don’t need it.
    </p>
    <img src={image06} />

    <br />

    <h3>7. Sort JSON objects</h3>
    <p>
      Alphabetically sorts the keys in selected JSON objects. Similar to how
      sorted imports make life easier for everyone (less merge conflicts and
      easily identify duplicates), JSON files can sometimes benefit from
      sorting, which is why this probably is better off as a manually triggered
      extension rather than a linting rule.
    </p>
    <img src={image07} />

    <br />

    <h3>8. stylelint</h3>
    <p>
      Even though this extension works best with standalone <code>.css</code> or
      {` `}
      <code>.scss</code> files, it does still help css-in-js styling as it still
      shows linting errors but does not offer autofixes inside <code>.tsx</code>
      {` `}
      files. In short, what this library does for styling is similar to what
      ESlint does for javascript. Fantastic.
    </p>
    <img src={image08} />

    <br />

    <h3>9. Turbo Console Log</h3>
    <p>
      Log everything! This extension just makes logging a little faster in every
      way. Logging a variable without context usually makes it very difficult to
      read, and this extension automatically adds the context of the file and
      function your variable is in. On top of that, you can easily comment,
      uncomment or delete all of the <code>console.log</code> statements in your
      file.
    </p>
    <img src={image09} />

    <br />

    <h3>10. vscode-styled-components</h3>
    <p>
      If you use Styled Components you probably already have this extension
      installed. Since Styled Components uses template literals, the styles that
      you write are technically just strings in javascript. And since Styled
      Components is just a library within javascript, it is very unlikely for
      built-in syntax highlighting to be introduced at all. So we will probably
      just have to rely on this extension to have our styles not just look like
      a very long string.
    </p>
    <img src={image10} />

    <br />

    <p>
      While this is my current list of preferred extensions, the tools that you
      should use to code is highly dependent on the project that you’re working
      on and your personal preference. On top of that, with the current pace of
      software development, half the extensions on this list might already be
      outdated by the time you are reading this! Rather than being a defining
      list of Visual Studio Code extensions, I hope that this can bring
      inspiration and more options to some that are looking for new tools to add
      to their arsenal. Happy coding!
    </p>

    <br />

    <ImageAuthor
      image={data.image}
      authorName={`José Oliveira`}
      authorLink={`https://www.pexels.com/@jose-oliveira-32884059`}
      imageLink={`https://www.pexels.com/photo/wood-landscape-water-summer-7028840/`}
    />
  </Stack>
)

export default Page
