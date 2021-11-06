(this.webpackJsonpdotcom=this.webpackJsonpdotcom||[]).push([[8],{100:function(e,t,i){"use strict";i.r(t);var s=i(2),o=i(7),n=i.p+"static/media/image01.16cad9b2.gif",r=i.p+"static/media/image02.b21fc07c.png",a=i.p+"static/media/image03.612515a2.gif",l=i.p+"static/media/image04.756ab5ee.png",c=i.p+"static/media/image05.1cd1dd9b.png",d=i.p+"static/media/image06.58460e45.png",h=i.p+"static/media/image07.5a3ed20a.gif",u=i.p+"static/media/image08.4235763f.png",m=i.p+"static/media/image09.a3c85de8.gif",b=i.p+"static/media/image10.b8def43e.gif",j=i(35),p=i(0),g=(t.default=function(){return Object(p.jsxs)(g,{"data-aos":"fade",gap:"1rem",children:[Object(p.jsx)("p",{children:j.a.excerpt}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"1. Auto Rename Tag"}),Object(p.jsxs)("p",{children:["A simple extension that renames the closing HTML/XML tag. You would think that this feature would come out of the box from VS Code by now, but as of today, while there is a built-in setting to turn this on for HTML files using the setting ",Object(p.jsx)("code",{children:"editor.linkedEditing"}),", there is none for"," ",Object(p.jsx)("code",{children:".jsx"})," or ",Object(p.jsx)("code",{children:".tsx"})," files."]}),Object(p.jsx)("img",{src:n}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"2. Bracket Pair Colorizer 2"}),Object(p.jsx)("p",{children:"Identifies matching brackets and colourizes them. This extension is all about improving readability, and once you start using this you will wonder how you ever coded without it. Interestingly the first version of this extension is still being used much more widely than this updated version even with the improved performance. Guess you can't stop the momentum."}),Object(p.jsx)("img",{src:r}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"3. Code Runner"}),Object(p.jsx)("p",{children:"Run code snippets or files for most mainstream languages. For frontend web development, it saves you the hassle of opening a browser console and typing your code out."}),Object(p.jsxs)("p",{children:["You can manually select the language that you want it to run, but I normally code in typescript and needed to do a few tweaks to get it to work. It requires ",Object(p.jsx)("code",{children:"ts-node"})," to be installed globally and the following in your VS Code settings."]}),Object(p.jsx)("p",{children:Object(p.jsx)("code",{children:'"code-runner.executorMap": { "typescript": "ts-node -T" }'})}),Object(p.jsx)("p",{children:"This sets the transpile only flag on and turns off type checking so that you can run snippets without worrying about type or module errors."}),Object(p.jsx)("img",{src:a}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"4. ESLint"}),Object(p.jsx)("p",{children:"Integrates ESLint into VS Code. Enough said."}),Object(p.jsx)("p",{children:"Here are some of the linting rules that I add on top of the recommended ones, and some rationale behind them."}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Unused variables take up memory and leave dead code lying around. This coupled with ",Object(p.jsx)("code",{children:"ts-prune"})," helps clean things up."]}),Object(p.jsx)("li",{children:"Single or double quotes? Neither. Template literals with backticks were introduced in ES6 and nullify the debate of whether single quotes or double quotes are used more in text. Do you ever use backticks in your sentences? I guess not. With embedded expressions such a useful and common way of writing code nowadays, why go through the hassle of switching between different quotation marks anymore?"}),Object(p.jsxs)("li",{children:[Object(p.jsx)("code",{children:"import/order"})," and ",Object(p.jsx)("code",{children:"sort-imports"})," organise your imports nicely. The reason for using both is that they autofix different parts of the imports."]}),Object(p.jsx)("li",{children:"No. Console."}),Object(p.jsx)("li",{children:"Similar to the discussion on which quotation marks to use, I opted to simplify JSX props by using curly brace everywhere. Why complicate life with so many options and conditions? Just pick the most versatile option and stick to it."}),Object(p.jsx)("li",{children:"Probably not the most necessary linting rule, I just prefer the consistency of prop ordering on jsx elements so that it is easier to identify similar elements for potential reusability."})]}),Object(p.jsx)("img",{src:l}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"5. GitLens"}),Object(p.jsx)("p",{children:"Helps to visualize code history and authorship using Git. A tool that greatly increases accessibility in discovering whom, why and when a line or code block was changed. Extremely useful when working in teams to dive deeper into intentions of code blocks and collaboration. In other words, you can quickly find out who is responsible for that badly written line of code. ;)"}),Object(p.jsx)("img",{src:c}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"6. javascript console utils"}),Object(p.jsxs)("p",{children:["Log everything! This extension just makes logging a little faster in every way. Logging a variable without context usually makes it very difficult to read, and this extension automatically adds the variable name as a string in front of its value. On top of that, you can easily delete all of the"," ",Object(p.jsx)("code",{children:"console.log"})," statements in your file. I prefer this over the more popular ",Object(p.jsx)("code",{children:"Turbo Console Log"})," extension because the latter tries to be smart about its placement (attempts to place it outside of the function block) but sometimes fails miserably. This extension just places the console.log statement on the next line. Simple."]}),Object(p.jsx)("img",{src:m}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"7. Prettier"}),Object(p.jsx)("p",{children:"I don't think it is an understatement when I say that Prettier has saved countless hours, possibly days or even weeks of my life. If you care about how tidy your code is to the last detail (which I believe most programmers do), this extension takes care of most of the little things for you, from indentation to semicolons and trailing commas. And while we're on the topic of semicolons, no we don't need it."}),Object(p.jsx)("img",{src:d}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"8. Sort JSON objects"}),Object(p.jsx)("p",{children:"Alphabetically sorts the keys in selected JSON objects. Similar to how sorted imports make life easier for everyone (less merge conflicts and easily identify duplicates), JSON files can sometimes benefit from sorting, which is why this is probably better off as a manually triggered extension rather than a linting rule."}),Object(p.jsx)("img",{src:h}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=richie5um2.vscode-sort-json",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"9. stylelint"}),Object(p.jsxs)("p",{children:["Even though this extension works best with standalone ",Object(p.jsx)("code",{children:".css"})," or"," ",Object(p.jsx)("code",{children:".scss"})," files, it does still help css-in-js styling as it still shows linting errors but does not offer autofixes inside ",Object(p.jsx)("code",{children:".tsx"})," ","files. In short, what this library does for styling is similar to what ESlint does for javascript. Fantastic."]}),Object(p.jsx)("img",{src:u}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"10. vscode-styled-components"}),Object(p.jsx)("p",{children:"If you use Styled Components you probably already have this extension installed. Since Styled Components uses template literals, the styles that you write are technically just strings in javascript. And since Styled Components is just a library within javascript, it is very unlikely for built-in syntax highlighting to be introduced at all. So we will probably just have to rely on this extension to have our styles not just look like a very long string."}),Object(p.jsx)("img",{src:b}),Object(p.jsx)("a",{href:"https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components",rel:"noreferrer",target:"_blank",children:"\ud83d\udd17\xa0\xa0Link to extension in Visual Studio Marketplace"}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"While this is my current list of preferred extensions, the tools that you should use to code is highly dependent on the project that you're working on and your personal preference. On top of that, with the current pace of software development, half the extensions on this list might already be outdated by the time you are reading this! Rather than being a defining list of Visual Studio Code extensions, I hope that this can bring inspiration and more options to some that are looking for new tools to add to their arsenal. Happy coding!"})]})},Object(s.c)(o.a).withConfig({componentId:"sc-njww81-0"})(["padding-top:1rem;"]))}}]);
//# sourceMappingURL=8.c7f4623f.chunk.js.map