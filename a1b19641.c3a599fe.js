(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),r=(n(0),n(242)),o={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},c={id:"version-2.0.0/testing",title:"Testing with Jest",description:"Reanimated test mocks use web implementation of Reanimated2. Before you begin using Reanimated mocks you need some setup actions.",source:"@site/versioned_docs/version-2.0.0/testing.md",permalink:"/react-native-reanimated/docs/testing",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-2.0.0/testing.md",version:"2.0.0",sidebar_label:"Testing with Jest",sidebar:"version-2.0.0/docs",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/api/runOnJS"}},l=[{value:"Setup",id:"setup",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]},{value:"Recommended testing library",id:"recommended-testing-library",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Reanimated test mocks use web implementation of Reanimated2. Before you begin using Reanimated mocks you need some setup actions."),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"Add the following line to your ",Object(r.b)("inlineCode",{parentName:"p"},"jest-setup.js")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"require('./node_modules/react-native-reanimated/src/reanimated2/jestUtils').setUpTests();\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"setUpTests()")," can take optional config argument. Default config is ",Object(r.b)("inlineCode",{parentName:"p"},"{ fps: 60 }"),", setting framerate to 60fps."),Object(r.b)("p",null,"To be sure, check if your ",Object(r.b)("inlineCode",{parentName:"p"},"jest.config.js")," file contains:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"...\npreset: 'react-native',\nsetupFiles: ['./jest-setup.js'],\n...\n")),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h4",{id:"style-checker"},"Style checker"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Checking equality of selected styles with current component styles"),Object(r.b)("h4",Object(a.a)({parentName:"li"},{id:"expectcomponenttohaveanimatedstyleexpectedstyle"}),Object(r.b)("inlineCode",{parentName:"h4"},"expect(component).toHaveAnimatedStyle(expectedStyle)")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"component")," - tested component",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"expectedStyle")," - contains expected styles of testing component, for example ",Object(r.b)("inlineCode",{parentName:"p"},"{ width: 100 }"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Checking equality of all current component styles with expected styles"),Object(r.b)("h4",Object(a.a)({parentName:"li"},{id:"expectcomponenttohaveanimatedstyleexpectedstyle-exact-true"}),Object(r.b)("inlineCode",{parentName:"h4"},"expect(component).toHaveAnimatedStyle(expectedStyle, {exact: true})"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can get all styles of tested component by using ",Object(r.b)("inlineCode",{parentName:"p"},"getDefaultStyle")),Object(r.b)("h4",Object(a.a)({parentName:"li"},{id:"getdefaultstylecomponent"}),Object(r.b)("inlineCode",{parentName:"h4"},"getDefaultStyle(component)")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"component")," - tested component"))),Object(r.b)("h4",{id:"timers"},"Timers"),Object(r.b)("p",null,"You can use jest timers to control animation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"jest.useFakeTimers();\n// call animation\njest.runAllTimers();\n")),Object(r.b)("p",null,"If you want more control over animation, you can use Reanimated wrapper for timers:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"withReanimatedTimer(() => {\n  // call animation\n})\n")),Object(r.b)("p",null,"Inside of ",Object(r.b)("inlineCode",{parentName:"p"},"withReanimatedTimer")," you can use ",Object(r.b)("inlineCode",{parentName:"p"},"advanceAnimationByTime(timeInMs)")," or ",Object(r.b)("inlineCode",{parentName:"p"},"advanceAnimationByFrame(amountOfFrames)")," functions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Advance animation by a specified number of frames. You can specify the running duration of the animation and check the value of styles afterward.",Object(r.b)("h4",Object(a.a)({parentName:"li"},{id:"advanceanimationbytimetimeinms"}),Object(r.b)("inlineCode",{parentName:"h4"},"advanceAnimationByTime(timeInMs)")),Object(r.b)("inlineCode",{parentName:"li"},"timeInMs")," - the duration specifying for how long animation should be advanced forward. Should have an integer value."),Object(r.b)("li",{parentName:"ul"},"Advance animation by specific amount of animation frame.",Object(r.b)("h4",Object(a.a)({parentName:"li"},{id:"advanceanimationbyframenumberofframes"}),Object(r.b)("inlineCode",{parentName:"h4"},"advanceAnimationByFrame(numberOfFrames)")),Object(r.b)("inlineCode",{parentName:"li"},"numberOfFrames")," - number of animation frames to run. Should have an integer value.")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Timer:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"test('stop in a middle of animation', () => {\n  withReanimatedTimer(() => {\n    const style = { width: 0 };\n\n    const { getByTestId } = render(<AnimatedComponent />);\n    const view = getByTestId('view');\n    const button = getByTestId('button');\n\n    expect(view.props.style.width).toBe(0);\n    expect(view).toHaveAnimatedStyle(style);\n\n    fireEvent.press(button);\n    moveAnimationByTime(250); // if whole animation duration is a 500ms\n    style.width = 46.08; // value of component width after 250ms of animation\n    expect(view).toHaveAnimatedStyle(style);\n  });\n});\n")),Object(r.b)("p",null,"More example tests you can see in our repository"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-reanimated/tree/master/__tests__/SharedValue.test.js"}),"SharedValue.test.js")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-reanimated/tree/master/__tests__/Animation.test.js"}),"Animation.test.js"))),Object(r.b)("h2",{id:"recommended-testing-library"},"Recommended testing library"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://callstack.github.io/react-native-testing-library/"}),"@testing-library/react-native")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://react-hooks-testing-library.com/"}),"@testing-library/react-hooks")," - for dealing with hooks")))}m.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=m(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=m(n),u=a,d=b["".concat(o,".").concat(u)]||b[u]||p[u]||r;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);