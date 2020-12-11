(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),r=(n(0),n(138)),i={title:"Set up local"},c={id:"onboarding-installation",title:"Set up local",description:"Insurance risk uses mostly Python for analytical procjets, data treatment and scripting.",source:"@site/docs\\onboarding-installation.md",permalink:"/data-science-site/docs/onboarding-installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/onboarding-installation.md",lastUpdatedAt:1592207265,sidebar:"someSidebar",next:{title:"What characterizes a good project?",permalink:"/data-science-site/docs/bestpractice-introduction"}},l=[{value:"Anaconda",id:"anaconda",children:[{value:"Jupyter Notebooks",id:"jupyter-notebooks",children:[]}]},{value:"GIT",id:"git",children:[]},{value:"VS Code",id:"vs-code",children:[]},{value:"R",id:"r",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Insurance risk uses mostly Python for analytical procjets, data treatment and scripting.")),Object(r.b)("p",null,"Julia, R and other tools can be used if they fit the task better, for instance Julia in high performence computing and R for visualization. But Python is starting point by default."),Object(r.b)("h2",{id:"anaconda"},"Anaconda"),Object(r.b)("p",null,"Start by downloading the 64-bit version of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.anaconda.com/products/individual#Downloads"}),"Anaconda"),'. Anaconda can be installed without admin right, by choosing "local user" in the installation wizard.'),Object(r.b)("p",null,"Anaconda comes with most packages you'll need to start working with analytics in Python, but a update could be neccessary and VS runtime is needed for many packages. "),Object(r.b)("p",null,'Choose "Anaconda prompt" from start menu and copy the following in the terminal'),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"conda init\nconda update conda -y\nconda update --all -y\nconda install -c conda-forge jupyter_contrib_nbextensions -y\nconda install -c conda-forge jupyter_nbextensions_configurator -y \njupyter nbextension enable python-markdown/main \n")),Object(r.b)("h3",{id:"jupyter-notebooks"},"Jupyter Notebooks"),Object(r.b)("p",null,'Anaconda comes with Jupyter Notebook installed. Just choose "Jupyter Notebook" from the start menu. '),Object(r.b)("p",null,'It\'s also possible to install Jupyter Lab in order to get multiple notebooks or files within the same browser tab. Install by opening "Anaconda prompt" and type ',Object(r.b)("inlineCode",{parentName:"p"},"conda install -c conda-forge jupyterlab"),'. Now run by type "Jupyter Lab" in the Anaconda prompt.'),Object(r.b)("h2",{id:"git"},"GIT"),Object(r.b)("p",null,"Version controlling is a important part of every project, and all code should be managed in GitLab. So ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://git-scm.com/downloads"}),"install GIT")," (admin rights not needed), and send request for GitLab user in serivce now. "),Object(r.b)("p",null,"When downloaded one need to configure identification. Set your name with ",Object(r.b)("inlineCode",{parentName:"p"},'git config --global user.name "John Doe"')," and your KPMG email with ",Object(r.b)("inlineCode",{parentName:"p"},"git config --global user.email johndoe@kpmg.no")),Object(r.b)("h2",{id:"vs-code"},"VS Code"),Object(r.b)("p",null,"When working with more demanding scripts, an regular text editor is often preffered. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"VS Code")," is a solid choice with a nice set of features! This can also be used to edit notebooks when the Jupyter extension is installed."),Object(r.b)("p",null,"Install the Pyhton, Jupyter and Python Docstring Generator extensions, and install pylint when asked so it automatically checks the code for errors."),Object(r.b)("p",null,"Preview is also a nice extension, which gives continously updated preview when working with documents like markdown, HTML and RST. "),Object(r.b)("h2",{id:"r"},"R"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cran.r-project.org/bin/windows/base/"}),"R"),"\nand ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://rstudio.com/products/rstudio/download/"}),"R Studio")," can be installed, but one need to contact Servce Desk in order to get them installed since they need admin rights."))}d.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);