import PageContainer from "../../components/elements/PageContainer"
import ExternalLink from "../../components/molecules/ExternalLink"
import autorenametag from "./images/autorenametag.gif"
import bracketpaircolor from "./images/bracketpaircolor.png"
import coderunner from "./images/coderunner.gif"
import consoleutils from "./images/consoleutils.gif"
import eslint from "./images/eslint.png"
import gitlens from "./images/gitlens.png"
import jsonsort from "./images/jsonsort.gif"
import prettier from "./images/prettier.png"
import styledcomponents from "./images/styledcomponents.gif"
import stylelint from "./images/stylelint.png"
import data from "."

const Page = () => (
  <PageContainer>
    <p>{data.excerpt}</p>
    <br />
    <h4>1. Auto Rename Tag</h4>
    <p>
      A simple extension that renames the closing HTML/XML tag. You would think
      that this feature would come out of the box from VS Code by now, but as of
      today, while there is a built-in setting to turn this on for HTML files
      using the setting <code>editor.linkedEditing</code>, there is none for
      {` `}
      <code>.jsx</code> or <code>.tsx</code> files.
    </p>
    <img src={autorenametag} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>2. Bracket Pair Colorizer 2</h4>
    <p>
      Identifies matching brackets and colourizes them. This extension is all
      about improving readability, and once you start using this you will wonder
      how you ever coded without it. Interestingly the first version of this
      extension is still being used much more widely than this updated version
      even with the improved performance. Guess you can't stop the momentum.
    </p>
    <img src={bracketpaircolor} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>3. Code Runner</h4>
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
    <img src={coderunner} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>4. ESLint</h4>
    <p>Integrates ESLint into VS Code. Enough said.</p>
    <p>
      Here are some of the linting rules that I add on top of the recommended
      ones, and some rationale behind them.
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
      <li>
        Probably not the most necessary linting rule, I just prefer the
        consistency of prop ordering on jsx elements so that it is easier to
        identify similar elements for potential reusability.
      </li>
    </ul>
    <img src={eslint} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>5. GitLens</h4>
    <p>
      Helps to visualize code history and authorship using Git. A tool that
      greatly increases accessibility in discovering whom, why and when a line
      or code block was changed. Extremely useful when working in teams to dive
      deeper into intentions of code blocks and collaboration. In other words,
      you can quickly find out who is responsible for that badly written line of
      code. ;)
    </p>
    <img src={gitlens} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>6. javascript console utils</h4>
    <p>
      Log everything! This extension just makes logging a little faster in every
      way. Logging a variable without context usually makes it very difficult to
      read, and this extension automatically adds the variable name as a string
      in front of its value. On top of that, you can easily delete all of the
      {` `}
      <code>console.log</code> statements in your file. I prefer this over the
      more popular <code>Turbo Console Log</code> extension because the latter
      tries to be smart about its placement (attempts to place it outside of the
      function block) but sometimes fails miserably. This extension just places
      the console.log statement on the next line. Simple.
    </p>
    <img src={consoleutils} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>7. Prettier</h4>
    <p>
      I don't think it is an understatement when I say that Prettier has saved
      countless hours, possibly days or even weeks of my life. If you care about
      how tidy your code is to the last detail (which I believe most programmers
      do), this extension takes care of most of the little things for you, from
      indentation to semicolons and trailing commas. And while we're on the
      topic of semicolons, no we don't need it.
    </p>
    <img src={prettier} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>8. Sort JSON objects</h4>
    <p>
      Alphabetically sorts the keys in selected JSON objects. Similar to how
      sorted imports make life easier for everyone (less merge conflicts and
      easily identify duplicates), JSON files can sometimes benefit from
      sorting, which is why this is probably better off as a manually triggered
      extension rather than a linting rule.
    </p>
    <img src={jsonsort} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>9. stylelint</h4>
    <p>
      Even though this extension works best with standalone <code>.css</code> or
      {` `}
      <code>.scss</code> files, it does still help css-in-js styling as it still
      shows linting errors but does not offer autofixes inside <code>.tsx</code>
      {` `}
      files. In short, what this library does for styling is similar to what
      ESlint does for javascript. Fantastic.
    </p>
    <img src={stylelint} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <h4>10. vscode-styled-components</h4>
    <p>
      If you use Styled Components you probably already have this extension
      installed. Since Styled Components uses template literals, the styles that
      you write are technically just strings in javascript. And since Styled
      Components is just a library within javascript, it is very unlikely for
      built-in syntax highlighting to be introduced at all. So we will probably
      just have to rely on this extension to have our styles not just look like
      a very long string.
    </p>
    <img src={styledcomponents} />
    <ExternalLink
      href={`https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components`}
    >
      Link to extension in Visual Studio Marketplace
    </ExternalLink>
    <br />
    <p>
      While this is my current list of preferred extensions, the tools that you
      should use to code is highly dependent on the project that you're working
      on and your personal preference. On top of that, with the current pace of
      software development, half the extensions on this list might already be
      outdated by the time you are reading this! Rather than being a defining
      list of Visual Studio Code extensions, I hope that this can bring
      inspiration and more options to some that are looking for new tools to add
      to their arsenal. Happy coding!
    </p>
  </PageContainer>
)

export default Page
