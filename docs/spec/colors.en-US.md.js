webpackJsonp([84,220],{1291:function(e,t,o){e.exports={content:["article",{},["h2","Color Palettes"],["p","Ant Design's color palettes consist of 10 shallow-to-deep color swatches, and default palettes are defined for certain hues. Users can select a swatch from the color scheme using keywords. In theory, all colors used in the design should be taken from a color palette."],["p","After careful tuning by designers and programmers, our ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/734beb84ffc3f0469fbae1566aa8450f966cb261/components/style/color/colorPalette.less"},"palette generation algorithm"]," uses a combination of color plus Bezier curves and different rotation angles for cold and warm colors to generate new palettes (replacing our original tint / shade color system). This algorithm can be used to generate new palettes based on an input color that you specify."],["p","Ant Design's default theme consists of eight basic colors, each of which is derived from the above algorithm."],["blockquote",["p","Note: In these shallow-to-deep palettes, the 6th color cell ",["a",{title:null,href:"https://leaverou.github.io/contrast-ratio/"},"generally satisfies WCAG 2.0"],"'s 4.5:1 minimum contrast ratio (AA level), and is used as the default for the palette."]],function(){function e(e){return e&&e.__esModule?e:{"default":e}}var t=o(1),a=(o(2),o(183)),i=e(a);return t.createElement(i["default"],null)},["p","In order to provide contrast against different background shades, we chose ",["code","White #FFFFFF"]," and ",["code","Black #000000"]," with varying transparency to distinguish foreground text. For details, please see ",["a",{title:null,href:"/docs/spec/font#font-color"},"font color"],"."],["h3","Palette Generation Tool"],["p","If the above palettes do not meet your needs, you can choose a main color below, and Ant Design's color generation algorithm will generate a palette for you."],function(){function e(e){return e&&e.__esModule?e:{"default":e}}var t=o(1),a=(o(2),o(182)),i=e(a);return t.createElement(i["default"],null)},["hr"],["h2","Color application"],["h3","Brand color application"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/lVKfKMuLmaTlnTDitPEJ.png",alt:"Ant Design's commonly used brand color values"}]],["p","The brand color is one of the most intuitive visual elements used that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. Taking the default styles of an Ant Design web component as an example, the brand color is mainly reflected in key actions and when highlighting important information."],["blockquote",["p","Note: Images and logos can not automatically adhere to the color palette, but should be compatible."]],["h3","Neutral color application"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/AmXwsVOWrLxDfwLNlyvL.png",alt:"Ant Design's neutral color values"}]],["p","Gray as a neutral color is used extensively in Ant Design's web design, and its use facilitates the targeting and functional guidance of key content. This color is mainly seen in the navigation frame, backgrounds, secondary operations, and so on."],["h3","Functional color application"],["p",["img",{"class":"preview-img no-padding",align:"right",src:"https://zos.alipayobjects.com/rmsportal/mewwdThVwyTQzpZQtYXw.png",alt:"Ant Design's functional color card"}]],["p","Functional colors are colors that are used to convey state. These are mainly used in notifications, form validations, status messages, etc. Green indicates success, yellow indicates alerts / warnings, red indicates errors, gray indicates skipped / disabled."],["h3","Visual hierarchy"],["p",["img",{"class":"preview-img no-padding good",align:"right",src:"https://zos.alipayobjects.com/rmsportal/ADUfVlZwjziJRUQSMbMt.png",alt:"Good example",description:"Guide the user's line of sight through brand color"}]],["p","Use the brand color to convey important information or to highlight important actions while surrounding it with large areas of neutral color. This allows users to focus more on the task itself, improving efficiency."],["p",["br"]],["p",["img",{"class":"preview-img no-padding bad",align:"right",src:"https://zos.alipayobjects.com/rmsportal/RmSDSeAAYphuiDFszIMa.png",alt:"Bad example",description:"Avoid using too many colors or colors in large areas"}]],["blockquote",["p","Note: We suggest using no more than three colors in the user interface (except for within data charts and graphic illustrations)"]],["h3","Color contrast"],["p",["img",{"class":"preview-img no-padding good",align:"right",src:"https://zos.alipayobjects.com/rmsportal/jeyvhMIQgoPUotNerRGy.png",alt:"Good example"}],"\n",["img",{"class":"preview-img no-padding bad",align:"right",src:"https://zos.alipayobjects.com/rmsportal/ppdlrVnFCsYVicjDrnzi.png",alt:"Bad example",description:"When the contrast is less than 3:1, it becomes difficult to read"}]],["p","Ant Design's color palette conforms to the WCAG 2.0 standard. The foreground and background colors should always meet the minimum standard of a 3:1 contrast ratio."],["ul",["li",["p",["a",{title:null,href:"https://leaverou.github.io/contrast-ratio/#%23454545-on-%23fff"},"Contrast ratio tool"]]]]],meta:{order:3,title:"Colors",filename:"docs/spec/colors.en-US.md"},description:["section",["p","Not only is color an effective way to create brand recognition, but it also plays an important role in conveying information, providing interactive feedback, and bringing attention to a particular element. Ant Design makes using color simple and practical through an emphasis on efficiency, clarity, and user experience. Please note the following three points when choosing colors:"],["ul",["li",["p","Color usage and positioning should respect cognitive psychology (stay user-focused)"]],["li",["p","Visual hierarchy should be clear-cut, and color should establish visual continuity"]],["li",["p","Color usage should be in compliance with the ",["a",{title:"Web Content Accessibility Guidelines",href:"https://www.w3.org/WAI/WCAG20/glance/"},"WCAG 2.0 standards"]," by using sufficient contrast to ensure accessibility"]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Color-Palettes",title:"Color Palettes"},"Color Palettes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Color-application",title:"Color application"},"Color application"]]]}}});