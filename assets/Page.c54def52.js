import{P as o}from"./PageContainer.06e33636.js";import{E as t}from"./ExternalLink.fe5f46a4.js";import{s}from"./index.5c8532d4.js";import{b as i,j as e}from"./vendor.17de887c.js";var n="/assets/autorenametag.de2c159c.gif",r="/assets/bracketpaircolor.6dfd8da5.png",a="/assets/coderunner.c3ffcdf2.gif",l="/assets/consoleutils.62fb8afb.gif",d="/assets/eslint.d85fa2d5.png",c="/assets/gitlens.5d22be73.png",h="/assets/jsonsort.7305b829.gif",u="/assets/prettier.a59b2943.png",m="/assets/styledcomponents.d944b87c.gif",p="/assets/stylelint.9830e952.png";const k=()=>i(o,{children:[e("p",{children:s.excerpt}),e("br",{}),e("h4",{children:"1. Auto Rename Tag"}),i("p",{children:["A simple extension that renames the closing HTML/XML tag. You would think that this feature would come out of the box from VS Code by now, but as of today, while there is a built-in setting to turn this on for HTML files using the setting ",e("code",{children:"editor.linkedEditing"}),", there is none for"," ",e("code",{children:".jsx"})," or ",e("code",{children:".tsx"})," files."]}),e("img",{src:n}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"2. Bracket Pair Colorizer 2"}),e("p",{children:"Identifies matching brackets and colourizes them. This extension is all about improving readability, and once you start using this you will wonder how you ever coded without it. Interestingly the first version of this extension is still being used much more widely than this updated version even with the improved performance. Guess you can't stop the momentum."}),e("img",{src:r}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"3. Code Runner"}),e("p",{children:"Run code snippets or files for most mainstream languages. For frontend web development, it saves you the hassle of opening a browser console and typing your code out."}),i("p",{children:["You can manually select the language that you want it to run, but I normally code in typescript and needed to do a few tweaks to get it to work. It requires ",e("code",{children:"ts-node"})," to be installed globally and the following in your VS Code settings."]}),e("p",{children:e("code",{children:'"code-runner.executorMap": { "typescript": "ts-node -T" }'})}),e("p",{children:"This sets the transpile only flag on and turns off type checking so that you can run snippets without worrying about type or module errors."}),e("img",{src:a}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"4. ESLint"}),e("p",{children:"Integrates ESLint into VS Code. Enough said."}),e("p",{children:"Here are some of the linting rules that I add on top of the recommended ones, and some rationale behind them."}),i("ul",{children:[i("li",{children:["Unused variables take up memory and leave dead code lying around. This coupled with ",e("code",{children:"ts-prune"})," helps clean things up."]}),e("li",{children:"Single or double quotes? Neither. Template literals with backticks were introduced in ES6 and nullify the debate of whether single quotes or double quotes are used more in text. Do you ever use backticks in your sentences? I guess not. With embedded expressions such a useful and common way of writing code nowadays, why go through the hassle of switching between different quotation marks anymore?"}),i("li",{children:[e("code",{children:"import/order"})," and ",e("code",{children:"sort-imports"})," organise your imports nicely. The reason for using both is that they autofix different parts of the imports."]}),e("li",{children:"No. Console."}),e("li",{children:"Similar to the discussion on which quotation marks to use, I opted to simplify JSX props by using curly brace everywhere. Why complicate life with so many options and conditions? Just pick the most versatile option and stick to it."}),e("li",{children:"Probably not the most necessary linting rule, I just prefer the consistency of prop ordering on jsx elements so that it is easier to identify similar elements for potential reusability."})]}),e("img",{src:d}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"5. GitLens"}),e("p",{children:"Helps to visualize code history and authorship using Git. A tool that greatly increases accessibility in discovering whom, why and when a line or code block was changed. Extremely useful when working in teams to dive deeper into intentions of code blocks and collaboration. In other words, you can quickly find out who is responsible for that badly written line of code. ;)"}),e("img",{src:c}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"6. javascript console utils"}),i("p",{children:["Log everything! This extension just makes logging a little faster in every way. Logging a variable without context usually makes it very difficult to read, and this extension automatically adds the variable name as a string in front of its value. On top of that, you can easily delete all of the"," ",e("code",{children:"console.log"})," statements in your file. I prefer this over the more popular ",e("code",{children:"Turbo Console Log"})," extension because the latter tries to be smart about its placement (attempts to place it outside of the function block) but sometimes fails miserably. This extension just places the console.log statement on the next line. Simple."]}),e("img",{src:l}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"7. Prettier"}),e("p",{children:"I don't think it is an understatement when I say that Prettier has saved countless hours, possibly days or even weeks of my life. If you care about how tidy your code is to the last detail (which I believe most programmers do), this extension takes care of most of the little things for you, from indentation to semicolons and trailing commas. And while we're on the topic of semicolons, no we don't need it."}),e("img",{src:u}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"8. Sort JSON objects"}),e("p",{children:"Alphabetically sorts the keys in selected JSON objects. Similar to how sorted imports make life easier for everyone (less merge conflicts and easily identify duplicates), JSON files can sometimes benefit from sorting, which is why this is probably better off as a manually triggered extension rather than a linting rule."}),e("img",{src:h}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"9. stylelint"}),i("p",{children:["Even though this extension works best with standalone ",e("code",{children:".css"})," or"," ",e("code",{children:".scss"})," files, it does still help css-in-js styling as it still shows linting errors but does not offer autofixes inside ",e("code",{children:".tsx"})," ","files. In short, what this library does for styling is similar to what ESlint does for javascript. Fantastic."]}),e("img",{src:p}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("h4",{children:"10. vscode-styled-components"}),e("p",{children:"If you use Styled Components you probably already have this extension installed. Since Styled Components uses template literals, the styles that you write are technically just strings in javascript. And since Styled Components is just a library within javascript, it is very unlikely for built-in syntax highlighting to be introduced at all. So we will probably just have to rely on this extension to have our styles not just look like a very long string."}),e("img",{src:m}),e(t,{href:"https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components",children:"Link to extension in Visual Studio Marketplace"}),e("br",{}),e("p",{children:"While this is my current list of preferred extensions, the tools that you should use to code is highly dependent on the project that you're working on and your personal preference. On top of that, with the current pace of software development, half the extensions on this list might already be outdated by the time you are reading this! Rather than being a defining list of Visual Studio Code extensions, I hope that this can bring inspiration and more options to some that are looking for new tools to add to their arsenal. Happy coding!"})]});export{k as default};
