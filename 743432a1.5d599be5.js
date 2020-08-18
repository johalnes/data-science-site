(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(138)),c={},p={id:"test",title:"test",description:"Example Notebook",source:"@site/docs\\test.md",permalink:"/data-science-site/docs/test",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/test.md",sidebar:"someSidebar",previous:{title:"Single Premium - getting started (work in progress)",permalink:"/data-science-site/docs/demo-py-code"}},l=[],i={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"example-notebook"},"Example Notebook"),Object(o.b)("p",null,"This is an example notebook."),Object(o.b)("p",null,"Modify / remove any of the below as suited for your needs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Standard python packages\nimport os\nimport sys\n\n# Other package imports\nimport numpy as np\nimport pandas as pd\n# from matplotlib import pyplot as plt\n")),Object(o.b)("p",null,"Setup some global settings and configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"project_root = os.path.abspath(os.path.join(os.getcwd(), os.pardir))\ndata_folder = os.path.join(project_root, 'data')\ndata_folder_raw = os.path.join(data_folder, 'raw')\nsrc_folder = os.path.join(project_root, 'src')\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Importing data")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"filename='policy_data.xlsx'\ndf=pd.read_excel(os.path.join(data_folder_raw,filename))\n``\n\nAs we can see, the excelsheet contains birth day, gender and interest rate. The last two columns are the calculated premium intensity with coverage (here A for Alderspensjon/Age pension), contract start age and stop age. To more easily be able to calculate something from this data we need the data on flat format.\n\n\n```python\ndf=df.drop('Unnamed: 0', axis=1)\ndf_flat=df.melt(id_vars = df.columns[:3], value_vars=['A6499','A6799'], var_name='Coverage',value_name='Premium')\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"print(df_flat.head().to_markdown())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"|    | birth_day           | gender   |   interest_rate | Coverage   |   Premium |\n|---:|:--------------------|:---------|----------------:|:-----------|----------:|\n|  0 | 1975-03-27 04:53:04 | M        |            0.01 | A6499      |     15493 |\n|  1 | 1971-06-12 01:40:07 | M        |            0.01 | A6499      |     16338 |\n|  2 | 1976-08-09 17:48:01 | F        |            0.01 | A6499      |     21876 |\n|  3 | 1971-08-02 19:49:17 | F        |            0.04 | A6499      |     13469 |\n|  4 | 1973-05-17 17:45:32 | M        |            0.01 | A6499      |     23608 |\n")),Object(o.b)("p",null,"This can be easily ploted and we see (since this is mock up data) that the premium is splitted 50/50 on the two coverages"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"df_flat.groupby('Coverage')['Premium'].count().plot.bar(x='Coverage', y='Premium', stacked=True)\n")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"1-sketch-notebook_13_1.png",alt:"svg"}))),Object(o.b)("p",null,"Now we need the min and max age from the coverage column"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"df_flat['min_age'] = df_flat['Coverage'].str[1:3]\ndf_flat['max_age'] = df_flat['Coverage'].str[3:5]\nprint(df_flat.head().to_markdown())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"|    | birth_day           | gender   |   interest_rate | Coverage   |   Premium |   min_age |   max_age |\n|---:|:--------------------|:---------|----------------:|:-----------|----------:|----------:|----------:|\n|  0 | 1975-03-27 04:53:04 | M        |            0.01 | A6499      |     15493 |        64 |        99 |\n|  1 | 1971-06-12 01:40:07 | M        |            0.01 | A6499      |     16338 |        64 |        99 |\n|  2 | 1976-08-09 17:48:01 | F        |            0.01 | A6499      |     21876 |        64 |        99 |\n|  3 | 1971-08-02 19:49:17 | F        |            0.04 | A6499      |     13469 |        64 |        99 |\n|  4 | 1973-05-17 17:45:32 | M        |            0.01 | A6499      |     23608 |        64 |        99 |\n")),Object(o.b)("p",null,"The data is now in a form that is nice to work with and have all the data we need. Let's start with the actual model!"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"pd.__version__\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"'1.0.1'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"")))}s.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,p(p({ref:t},i),{},{components:n})):r.a.createElement(m,p({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);