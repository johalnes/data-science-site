/*! For license information please see fffdbda9.81869057.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(133)),i=a(146),c=a(145),s={id:"bestpractice-general",title:"General best practice"},l={id:"bestpractice-general",title:"General best practice",description:"Version control",source:"@site/docs\\bestpractice-general.mdx",permalink:"/data-science-site/docs/bestpractice-general",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/bestpractice-general.mdx",sidebar:"someSidebar",previous:{title:"Set up local",permalink:"/data-science-site/docs/onboarding-installation"},next:{title:"Powered by MDX",permalink:"/data-science-site/docs/mdx"}},d=[{value:"Version control",id:"version-control",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Project structure",id:"project-structure",children:[]}],u={rightToc:d};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"version-control"},"Version control"),Object(r.b)("p",null,"No matter how small or large the project is, it should be version controlled. Install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:""}),"Git"),", quickly read ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://guides.github.com/introduction/git-handbook/"}),"the Git Handbook"),", where there also is a lot of good resources, or see the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/githubguides"}),"youtube movies"),".\nFor a typically workflow see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://guides.github.com/introduction/flow/"}),"GitHub Flow"),"."),Object(r.b)("p",null,"Both ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.rstudio.com/hc/en-us/articles/200532077-Version-Control-with-Git-and-SVN"}),"Rstudio")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/versioncontrol"}),"VS Code")," have Git tools built-in, which makes Git easy!"),Object(r.b)("h3",{id:"documentation"},"Documentation"),Object(r.b)("p",null,"Every project needs a readme file as the bare minimum, with description of what problem is solved and how it's used. As code is changed over time, documentation should be as close to the code as possible and preferbly in the code.\nThis makes it more natural and less time consuming to update the documentation when the models are changed."),Object(r.b)(i.a,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"R",value:"r"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"python",mdxType:"TabItem"},Object(r.b)("p",null,"For Python use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@richdayandnight/a-simple-tutorial-on-how-to-document-your-python-project-using-sphinx-and-rinohtype-177c22a15b5b"}),"Sphinx"),". By using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.kpmg.no/jalnes/data-science-template"}),"data science template")," this is already configured. So by running"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd docs\\writeup\nmake html\n")),Object(r.b)("p",null,"from the commandline within the root folder will autogenerate a HTML page. Further, this should be published on GitHub as a webpage and linked to in the Git repository. "),Object(r.b)("p",null,"This is also activated by default in the data science template, so the documentation is always updated when something is pushed to master."),Object(r.b)("p",null,"Remember to update the index.rst with description of the project and a flow diagram of the overall arcitecture is always a good idea. Sphinx have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://build-me-the-docs-please.readthedocs.io/en/latest/Using_Sphinx/UsingGraphicsAndDiagramsInSphinx.html"}),"Graphviz included")," which can create diagrams from code, and by building piplines with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.prefect.io/core/advanced_tutorials/etl.html"}),"Prefect")," you'll get a constantly updated visiualization in addition to other benefits."),Object(r.b)("p",null,'To get the documentation from the code, add the filenames under "autosummary" in the file api-',Object(r.b)("strong",{parentName:"p"},"project name"),".rst."),Object(r.b)("p",null,"When first creating documentation within your code, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring"}),"VS code has a plugin")," that can make it even easier. Just remember to have it on Google style! ")),Object(r.b)(c.a,{value:"r",mdxType:"TabItem"},"R studio have autodocumentation built in, but it's required that you build a package.",Object(r.b)("p",null,"When starting a new project choose New Package instead of new Project. Then one also can initialize Git from the very begining.\nRstudio creates some folders and files for you automatically. Except these additionall files, there is no difference between creating project and folder."),Object(r.b)("p",null,"In addition to the default folders, it's strongly recommended to also have a data folder. See Project structure below for more details."),Object(r.b)("p",null,"The documentation system is built with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://support.rstudio.com/hc/en-us/articles/200532317-Writing-Package-Documentation"}),"Roxygen"),'\nand there is shortcut under code - "Insert roxygen skeleton" to get the parameters and form automatically. See the reference above for more details.'))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Whatever choice of programming language there is a good idea to connect the documentation with version control. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages")," or Gitlab Pages makes this easy!"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"project-structure"},"Project structure"),Object(r.b)("p",null,"All projects should start by thinking out what the end product should be like, and essiensial modules/building blocks to group functions.\nBy drawing and ensuring a modular design one makes it much easier to expand code with new models and develop the existing function to become even better.\nThinking in individual modules on will ensure that this can be done without changing or impact the complete code."),Object(r.b)("p",null,"This thinking should also affect code and file structure. For instance having the models completly seperated by the dataflow is important in order to make more flexisble code and make the code reusable in other projects.\nIf one have all files in the same folder you quickly end up with this"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"\u251c\u2500\u2500 data1.xlsx\n\u251c\u2500\u2500 data2.xlsx\n\u251c\u2500\u2500 datafinal.xlsx\n\u251c\u2500\u2500 model.R\n\u251c\u2500\u2500 model description.docx\n\u251c\u2500\u2500 model description final.docx\n\u251c\u2500\u2500 model description final.ppt\n")),Object(r.b)("p",null,"By using version control and documentation desribed above one ensure that all documentation is up to date with the code, and previous versions are in Git. And how did one get to datafinal in this structure? Within the model or is it manual work with copy/paste from the input?"),Object(r.b)("p",null,"By using a default project strurcture one can easily get more organized projects, which supports and makes best practice easy. Read more ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://drivendata.github.io/cookiecutter-data-science/#getting-started"}),"here in the data driven blog")," together with a lots of other tips and tricks. The below should be in all projects and here is the complete ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.kpmg.no/jalnes/data-science-template"}),"template for Insurance risk"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"\u2502\n\u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 processed            <- The final, canonical data sets for modeling.\n\u2502   \u2514\u2500\u2500 raw                  <- The original, immutable data dump.\n\u251c\u2500\u2500 docs                     <- Documentation, preferably made from the code.\n\u251c\u2500\u2500 scripts                  <- Standalone scripts, including data prepperation\n\u251c\u2500\u2500 src                      <- Code for use in this project. Mostly models\n")))}p.isMDXComponent=!0},133:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||r;return a?o.a.createElement(h,c(c({ref:t},l),{},{components:a})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},135:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},140:function(e,t,a){"use strict";var n=a(0);const o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=o},145:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},146:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(140);var i=function(){return Object(n.useContext)(r.a)},c=a(135),s=a.n(c),l=a(94),d=a.n(l);const u=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:r,values:c,groupId:l}=e,{tabGroupChoices:b,setTabGroupChoices:h}=i(),[m,f]=Object(n.useState)(r);if(null!=l){const e=b[l];null!=e&&e!==m&&f(e)}const g=e=>{f(e),null!=l&&h(l,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:s()("tabs__item",d.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===m)[0]))}}}]);