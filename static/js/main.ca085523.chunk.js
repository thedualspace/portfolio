(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(18).concat([function(e,n,t){e.exports=t.p+"static/media/HyperloopLarge.235a9480.png"},,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/Mandelbrot_wide.9ae93ee4.png"},function(e,n,t){e.exports=t.p+"static/media/icon-arrow-down.e06dd0c4.svg"},,,,function(e,n,t){e.exports=t.p+"static/media/Jammming1.adb28710.png"},function(e,n,t){e.exports=t.p+"static/media/Jammming2.af11aa67.png"},,function(e,n,t){e.exports=t.p+"static/media/WebLearn1.20f88e2f.png"},function(e,n,t){e.exports=t.p+"static/media/WebLearn2.5e00ace7.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotBloodCell.bc8377ae.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotIcicles.38223771.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotInferno.b7d435f7.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotLightning.4b52f411.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotNormal.ce953658.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotOctopus.edd390f4.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotPsychadelic.a92d244e.png"},function(e,n,t){e.exports=t.p+"static/media/mandelbrotSnowstorm.97cc16e2.png"},function(e,n,t){e.exports=t.p+"static/media/HyperloopSmall.55f8ef95.png"},function(e,n,t){e.exports=t.p+"static/media/FSLarge.a9b93ed7.png"},function(e,n,t){e.exports=t.p+"static/media/FSSmall.40c34b03.png"},function(e,n,t){e.exports=t(64)},,,,,function(e,n,t){},,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(13),o=t.n(i),c=(t(53),t(22)),l=t(7),s=t(8),u=t(12),m=t(10),p=t(9),d=t(1),f=t(2),g=t(27),h=t.n(g),v=t(28),b=t.n(v);function x(){var e=Object(d.a)(["\n.splash {\n  overflow: hidden;\n  position: relative;\n  height: 100vh;\n  box-shadow: inset 0 -40px 50px 0px rgba(0,0,0,.5);\n}\n\n.text {\n  position: absolute;\n  top: 18%;\n  left: 18.5%;\n  color: white;\n  letter-spacing: 0.15em;\n  z-index: 10;\n\n  @media (max-width: 960px) {\n    text-shadow: 2px 2px 4px black;\n    margin: auto ;\n  }\n}\n\n.overlay {\n  \n}\n\nh1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 36px;\n}\n\np {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: 0.34em;\n}\n\n/* This positioning looks silly \nbut it is done to keep the \noversized background image centred \nfor any viewport size */\n.mandel {\n  position: absolute;\n  top: -9999px;\n  bottom: -9999px;\n  left: -9999px;\n  right: -9999px;\n  margin: auto;\n  max-height: 100%;\n  z-index: -10;\n}\n\n.arrow {\n  position: absolute;\n  left: 50%;\n  bottom: 20px;\n  z-index: 10;\n  height: 18px;\n  width: 36px;\n  background-image: url(",");\n  animation: hintDown 2s infinite;\n}\n\n.arrow:hover {\n  cursor: pointer;\n}\n\n\n@keyframes hintDown {\n  0%, 15%, 90%, 100% {\n    transform: translateY(0);\n    opacity: 0.5;\n  }\n  45% 55% {\n    transform: scale(1);\n  }\n  50% {\n    transform: translateY(20%) scale(1.05);\n    opacity: 1;\n  }\n}\n"]);return x=function(){return e},e}var E=f.a.div(x(),b.a),w=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,"ANDREW."),r.a.createElement("p",null,"WEB DEVELOPER"))),r.a.createElement("img",{className:"mandel",src:h.a}),r.a.createElement("a",{onClick:this.props.scrollToProjects,className:"arrow"})))}}]),t}(r.a.Component);function y(){var e=Object(d.a)(["\n.navbar {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  height: 56px;\n  width: 100vw;\n  padding: 0;\n  z-index: 100;\n  background-color: white;\n  opacity: 1;\n  transition: opacity 0.25s;\n  box-shadow:  0 4px 5px -2px rgba(0,0,0,.2);\n}\n\n.hidden{\n  opacity: 0;\n}\n.navbar-content {\n  display: flex;\n  justify-content: space-between;\n  width: 1025px; \n}\n\n.navbar-title {\n  FONT-WEIGHT: bold;\n  font-size: 20px; \n  display: flex;\n  margin: 10px;\n  margin-left: 25px;\n\n  @media (max-width: 960px) {\n    margin: 12px;\n    font-size: 18px;\n  }\n}\n\n.navbar-links {\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 25px;\n\n  @media (max-width: 960px) {\n    margin-right: 12px;\n  }\n}\n\na {\n  border: 1px transparent;\n  border-radius: 16px;\n  padding: 4px 8px;\n  margin: 10px 5px;\n  \n  @media (max-width: 960px) {\n    margin: 13px 2px;\n    padding: 2px 6px;\n    font-size: 14px;\n  }\n}\n\na:hover, a:active {\n  background-color: #F4F4F4;\n  cursor: pointer;\n}\n"]);return y=function(){return e},e}var j=f.a.div(y()),k=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement("div",{className:"navbar "+this.props.displayStatus},r.a.createElement("div",{className:"navbar-content"},r.a.createElement("div",{className:"navbar-title"},"ANDREW."),r.a.createElement("div",{className:"navbar-links"},r.a.createElement("a",{onClick:this.props.scrollToProjects},"Projects"),r.a.createElement("a",{onClick:this.props.scrollToAchievements},"Achievements"),r.a.createElement("a",{onClick:this.props.scrollToContact},"Contact")))))}}]),t}(r.a.Component),I=t(19);function O(){var e=Object(d.a)(["\n.footer {\n  padding: 80px 0;\n  font-size: 14px;\n  color: #FFF;\n  background-color: #000;\n  text-align: center;\n}\n\n.social {\n  display: flex;\n  justify-content: center;\n}\n\np {\n  margin: 0 auto;\n}\n"]);return O=function(){return e},e}var S=f.a.div(O()),C=function(){return r.a.createElement(S,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"social"},r.a.createElement(I.SocialIcon,{url:"https://www.linkedin.com/in/andrewboland95/",bgColor:"#000",fgColor:"#FFF"}),r.a.createElement(I.SocialIcon,{url:"https://github.com/thedualspace",bgColor:"#000",fgColor:"#FFF"}),r.a.createElement(I.SocialIcon,{url:"mailto:contact@andrewboland.dev",bgColor:"#000",fgColor:"#FFF"})),r.a.createElement("div",{className:"text"},r.a.createElement("br",null),r.a.createElement("p",null,"Copyright \xa9 2020 Andrew Boland"),r.a.createElement("p",null,"Made with <3 in Dublin, Ireland"))))};function T(){var e=Object(d.a)(["\n.container {\n    margin: 80px auto;\n    text-align: center;\n}\n\n.title {\n  font-size: 32px;\n  font-weight: 600;\n  margin: 45px auto;\n  max-width: 560px;\n}\n\n.text {\n    max-width: 940px;\n    margin: auto;\n}\n\np {\n}\n"]);return T=function(){return e},e}var N=f.a.div(T()),D=function(){return r.a.createElement(N,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"title"},"Scientific Thinker with a Passion For Good Design and Great Code."),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,"I'm an aspiring full-stack developer from Dublin, Ireland \u2618\ufe0f with a passion for creating highly engaging front-end experiences."),r.a.createElement("p",null,"From my undergraduate degree in Theoretical Physics \ud83c\udf0c I learned how to think critically and solve difficult, often abstract problems. From the scientific process I learned the value of criticism, and how it is essential for personal growth, something I welcome from my peers on every new project I work on! I also learned how to communicate complex ideas in simple terms during my time as a Lab Demonstrator and Teaching Assistant."),r.a.createElement("p",null,"Outside college I worked on large engineering projects, designing racing vehicles and taking on leading universities around the world at SpaceX \ud83d\ude80. Here I had adapt very quickly to completely new areas of problem solving, and figure out how to digest a huge amount of technical information under time-constraints, a skill I found very useful when diving into the nebulous ecosystem of modern web technologies!"))))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Capstone project from the Codeacademy React Web Development course."),r.a.createElement("p",null,"Allows users to search Spotify's library, create a playlist, and save it to their Spotify account."),r.a.createElement("p",null,"Authorization performed using OAuth, utilises Spotify's Web API."))},P=t(32),z=t.n(P),L=t(33),A=t.n(L),M=t(24);function R(){var e=Object(d.a)(["\n    max-width: 100%;\n    grid-column: 2;\n    grid-column-end: 3;\n"]);return R=function(){return e},e}function W(){var e=Object(d.a)(["\n    .carousel-fade .carousel-item {\n       transition-timing-function: linear;\n       transition-duration: 0.4s;\n       transition-delay: 0s;\n    }\n"]);return W=function(){return e},e}var J=f.a.div(W()),B=f.a.img(R()),H=function(e){var n=e.carouselItems,t=void 0===n?[]:n;return r.a.createElement(J,null,r.a.createElement(M.a,{indicators:!1,controls:!1,fade:!0,keyboard:!1},t.map((function(e,n){return r.a.createElement(M.a.Item,{key:"".concat(e.src).concat(n)},e.link&&r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(B,{src:e.src,alt:e.alt})),!e.link&&r.a.createElement(B,{src:e.src,alt:e.alt}))}))))},_=t(34);function U(){var e=Object(d.a)(["\n    ","\n"]);return U=function(){return e},e}function Q(){var e=Object(d.a)(["\n    margin: 0px 8px 15px 0px;\n    font-size: 14px;\n    font-weight: 500;\n"]);return Q=function(){return e},e}var V={React:"primary",JavaScript:"warning","Node.js":"success",MySQL:"info",Python3:"success",CUDA:"warning","HTML & CSS":"danger"},G=Object(f.a)(_.a)(Q()),Y=f.a.div(U(),(function(e){if("center"===e.direction)return"\n                display: flex;\n                justify-content: center;\n                margin: 0.3em 0;\n            "})),q=function(e){var n=e.languages,t=void 0===n?[]:n,a=e.direction;return r.a.createElement(Y,{direction:a},t.map((function(e,n){return r.a.createElement(G,{key:"".concat(e).concat(n),className:"big-badge",variant:V[e]},e)})))},X=t(17);function Z(){var e=Object(d.a)(["\n    padding: 0.375rem 2.25rem;\n    margin: 0 8px;\n    letter-spacing: 0.05rem;\n    font-weight: 500;\n"]);return Z=function(){return e},e}function K(){var e=Object(d.a)(["\n    text-align: center;\n"]);return K=function(){return e},e}function $(){var e=Object(d.a)(["\n    font-size: 32px;\n    font-weight: 600;\n    ","\n"]);return $=function(){return e},e}function ee(){var e=Object(d.a)(["\n    list-style-type: none;\n    margin-top: 8px;\n    ","\n    ","\n    ",";\n    ","\n"]);return ee=function(){return e},e}function ne(){var e=Object(d.a)(["\n    text-align: left;\n    ","\n"]);return ne=function(){return e},e}var te=f.a.div(ne(),(function(e){return"left"===e.direction?"":"grid-column: 1;"})),ae=f.a.div(ee(),(function(e){return"center"===e.direction?"max-width: 540px;":""}),(function(e){return"center"===e.direction?"margin: auto;":""}),(function(e){return"center"===e.direction?"padding: 0 30px;":""}),(function(e){return"center"===e.direction?"margin-top: 1em;":""})),re=f.a.div($(),(function(e){return"center"===e.direction?"text-align: center;":""})),ie=f.a.div(K()),oe=Object(f.a)(X.a)(Z()),ce=function(e){var n=e.languages,t=e.title,a=e.Description,i=e.direction,o=e.links,c=e.carouselItems,l=void 0===c?[]:c;return r.a.createElement(te,{direction:i},r.a.createElement(re,{direction:i},t),r.a.createElement(q,{languages:n,direction:i}),"center"===i&&l&&r.a.createElement(H,{carouselItems:l}),r.a.createElement(ae,{direction:i},r.a.createElement(a,null)),r.a.createElement(ie,null,r.a.createElement("a",{href:o[0].link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(oe,{variant:"light"},o[0].text)),r.a.createElement("a",{href:o[1].link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(oe,{variant:"light"},o[1].text))))};function le(){var e=Object(d.a)(["\n    ",";\n    margin: 75px auto 75px;\n    max-width: 960px;\n    ","\n    ","\n    text-align: center;\n"]);return le=function(){return e},e}var se=f.a.div(le(),(function(e){return"center"===e.direction?"":"display: grid;"}),(function(e){var n=e.direction;return"center"===n?"":"grid-template-columns: ".concat("left"===n?"1.25fr 0.75fr":"0.75fr 1.25fr",";")}),(function(e){return"center"===e.direction?"":"column-gap: 40px;"})),ue=function(e){var n=e.languages,t=e.title,a=e.Description,i=e.direction,o=void 0===i?"left":i,c=e.links,l=e.carouselItems;return"center"===o||window.innerWidth<960?r.a.createElement(se,{direction:"center"},r.a.createElement(ce,{languages:n,title:t,Description:a,direction:"center",links:c,carouselItems:l})):"left"===o?r.a.createElement(se,{direction:o},r.a.createElement(H,{carouselItems:l}),r.a.createElement(ce,{languages:n,title:t,Description:a,direction:o,links:c})):r.a.createElement(se,{direction:o},r.a.createElement(ce,{languages:n,title:t,Description:a,direction:o,links:c}),r.a.createElement(H,{carouselItems:l}))},me=function(){return r.a.createElement(ue,{languages:["React","JavaScript","HTML & CSS"],title:"Jamming",Description:F,links:[{link:"https://jammming-app.herokuapp.com/",text:"Live"},{link:"https://github.com/thedualspace/jammming",text:"Code"}],carouselItems:[{link:"https://jammming-app.herokuapp.com/",src:z.a,alt:"Jammming Login"},{link:"https://jammming-app.herokuapp.com/",src:A.a,alt:"Jammming Interface"}],direction:"left"})},pe=t(35),de=t.n(pe),fe=t(36),ge=t.n(fe),he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Proof-of-concept Online Learning platform with automated serverside MCQ test correction."),r.a.createElement("p",null,"Hashed and salted user passwords stored in MySQL database using Passport.js"),r.a.createElement("p",null,"Modular codebase specifically designed for easy expansion of subjects and customisable courses."))},ve=function(){return r.a.createElement(ue,{languages:["React","JavaScript","Node.js","MySQL"],title:"WebLearn",Description:he,links:[{link:"https://weblearn-app.herokuapp.com/login",text:"Live"},{link:"https://github.com/thedualspace/WebLearn",text:"Code"}],carouselItems:[{link:"https://weblearn-app.herokuapp.com/login",src:de.a,alt:"WebLearn Login"},{link:"https://weblearn-app.herokuapp.com/login",src:ge.a,alt:"WebLearn Interface"}],direction:"left"})},be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Exploration of the famous Mandelbrot Set using python and the open-source JIT compiler Numba."),r.a.createElement("p",null,"Featured mutiple color-maps and rendering algorithms to compare efficiency and quality, including writing CUDA-based code."),r.a.createElement("p",null,"The curiosity-led project which stoked my interest in digital visualisation and coding at a professional level."))},xe=t(37),Ee=t.n(xe),we=t(38),ye=t.n(we),je=t(39),ke=t.n(je),Ie=t(40),Oe=t.n(Ie),Se=t(41),Ce=t.n(Se),Te=t(42),Ne=t.n(Te),De=t(43),Fe=t.n(De),Pe=t(44),ze=t.n(Pe),Le=function(){return r.a.createElement(ue,{languages:["Python3","CUDA"],title:"Mandelbrot",Description:be,links:[{link:"https://www.youtube.com/playlist?list=PLJsrSpdT9jKOawbrIZByNnJZqIVfpCigs",text:"Media"},{link:"https://github.com/thedualspace/mandelbrot",text:"Code"}],carouselItems:[{src:ke.a,alt:"Mandelbrot inferno"},{src:Ne.a,alt:"Mandelbrot octopus"},{src:Fe.a,alt:"Mandelbrot psychadelic"},{src:Ce.a,alt:"Mandelbrot normal"},{src:Ee.a,alt:"Mandelbrot bloodcell"},{src:ye.a,alt:"Mandelbrot icicles"},{src:ze.a,alt:"Mandelbrot snowstorm"},{src:Oe.a,alt:"Mandelbrot lightning"}],direction:"center"})};function Ae(){var e=Object(d.a)(["\n.projects-title {\n  padding-top: 60px;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 600;\n}\n\np {\n  font-size: 16px;\n  font-weight: 400;\n}\n"]);return Ae=function(){return e},e}var Me=f.a.div(Ae()),Re=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Me,{ref:this.props.refProp},r.a.createElement("div",{className:"projects-title"},"Projects.",r.a.createElement("p",null,"Some things I've worked on.")),r.a.createElement("div",{className:"project-list"},r.a.createElement(ve,null),r.a.createElement(Le,null),r.a.createElement(me,null)))}}]),t}(r.a.Component),We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"One of only 20 teams from over 1000 invited to finals at ",r.a.createElement("a",{href:"https://youtu.be/VYStvnepo40",target:"_blank",rel:"noopener noreferrer"},"SpaceX HQ")," in California. One of only 3 teams to receive an Innovators Award."),r.a.createElement("p",null,"I was primarily responsible for building mathematical models of pod behavior during rapid acceleration and high velocity phases."))},Je=t(18),Be=t.n(Je),He=t(45),_e=t.n(He);function Ue(){var e=Object(d.a)(["\n  max-width: 100%;\n  clip-path: inset( 100% 0% 0% 0% );\n"]);return Ue=function(){return e},e}function Qe(){var e=Object(d.a)(["\n  overflow: hidden;\n  max-width: 75%;\n  "," \n  ","\n  ","\n  "," \n  ","\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(d.a)(["\n  width: 100%;\n  clip-path: inset( 100% 0% 0% 0% );\n"]);return Ve=function(){return e},e}function Ge(){var e=Object(d.a)(["\n  overflow: hidden;\n  margin: 0 0 auto 0;\n  ","\n  ","\n  "," \n"]);return Ge=function(){return e},e}function Ye(){var e=Object(d.a)(["\n  position: relative;\n  margin: auto 0;\n  margin-top: 8px;\n  ","\n  ","\n  ",";\n  ","\n  ","\n"]);return Ye=function(){return e},e}function qe(){var e=Object(d.a)(["\n  font-size: 32px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  ","\n"]);return qe=function(){return e},e}function Xe(){var e=Object(d.a)(["\n{\n  margin: 75px auto 75px;\n  max-width: 960px;\n  ","\n  ","\n  ","\n  ","\n}\n\n.animated {\n  animation: 2s inset forwards;\n}\n@keyframes inset {\n  0% {\n    clip-path: inset( 100% 0% 0% 0% );\n    transform: scale(1.1);\n  }\n  100% {\n    clip-path: inset( 0% 0% 0% 0% );\n    transform: scale(1);\n  }\n}\n"]);return Xe=function(){return e},e}var Ze=f.a.div(Xe(),(function(e){return"center"===e.direction?"":"display: grid;"}),(function(e){var n=e.direction;return"center"===n?"":"grid-template-columns: ".concat("left"===n?"1fr 1.25fr":"1.25fr 1fr",";")}),(function(e){return"center"===e.direction?"":"grid-template-rows: repeat(2, 1fr);"}),(function(e){return"center"===e.direction?"":"column-gap: 140px;"})),Ke=f.a.div(qe(),(function(e){return"center"===e.direction?"text-align: center;":""})),$e=f.a.div(Ye(),(function(e){return"center"===e.direction?"max-width: 540px;":""}),(function(e){return"center"===e.direction?"margin: auto;":""}),(function(e){return"center"===e.direction?"padding: 0 30px;":""}),(function(e){var n=e.direction;return"center"===n?"":"grid-column: ".concat("left"===n?"1":"2",";")}),(function(e){return"center"===e.direction?"":"grid-row: 1;"})),en=f.a.div(Ge(),(function(e){var n=e.direction;return"center"===n?"":"grid-column: ".concat("left"===n?"2":"1",";")}),(function(e){return"center"===e.direction?"":"grid-row-start: 1;"}),(function(e){return"center"===e.direction?"":"grid-row-end: 3;"})),nn=f.a.img(Ve()),tn=f.a.div(Qe(),(function(e){return"center"===e.direction?"display: none;":""}),(function(e){var n=e.direction;return"center"===n?"":"margin: ".concat("left"===n?"0 0 0 auto;":"",";")}),(function(e){var n=e.direction;return"center"===n?"":"grid-column: ".concat("left"===n?"1":"2",";")}),(function(e){return"center"===e.direction?"":"grid-column-end: 2;"}),(function(e){return"center"===e.direction?"":" grid-row: 2;"})),an=f.a.img(Ue()),rn=function(e){var n=e.title,t=e.Description,a=e.largeImage,i=e.smallImage,o=e.direction,c=e.animate1,l=e.animate2;return r.a.createElement(Ze,{direction:o},r.a.createElement($e,{direction:o},r.a.createElement(Ke,{direction:o},n),r.a.createElement(t,null)),r.a.createElement(en,{direction:o},r.a.createElement(nn,{src:a.src,className:"project-image large-image "+c,alt:a.alt})),r.a.createElement(tn,{direction:o},r.a.createElement(an,{src:i.src,className:"project-image small-image "+l,alt:i.alt})))},on=function(e){var n=e.animate1,t=e.animate2;return r.a.createElement(rn,{title:"SpaceX Hyperloop",Description:We,largeImage:{src:Be.a,alt:"Team \xc9irloop receiving their Innovators Award"},smallImage:{src:_e.a,alt:"Inside the Hyperloop Chamber"},direction:window.innerWidth<960?"center":"left",animate1:n,animate2:t})},cn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://youtu.be/xTLn_G9DQz4",target:"_blank",rel:"noopener noreferrer"},"International engineering competition")," where students design and manufacture high performance racing vehicles. Entrants compete at Silverstone Circuit over a number of days. "),r.a.createElement("p",null,"Suspension Team Lead for University College Dublin's ",r.a.createElement("a",{href:"https://www.ucdfs.ie/",target:"_blank",rel:"noopener noreferrer"},"Formula Student Team")," (UCDFS), working on a full car re-design for 2021."))},ln=t(46),sn=t.n(ln),un=t(47),mn=t.n(un),pn=function(e){var n=e.animate1,t=e.animate2;return r.a.createElement(rn,{title:"Formula Student",Description:cn,largeImage:{src:sn.a,alt:"UCDFS at Silverstone Circuit"},smallImage:{src:mn.a,alt:"Double A-arm Suspension Assembly"},direction:window.innerWidth<960?"center":"right",animate1:n,animate2:t})};function dn(){var e=Object(d.a)(["\n.achievements-title {\n  padding-top: 60px;\n  text-align: center;\n  font-size: 40px;\n  font-weight: 600;\n}\n\np {\n  font-size: 16px;\n  font-weight: 400;\n}\n"]);return dn=function(){return e},e}var fn=f.a.div(dn()),gn=function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(fn,{ref:this.props.refProp},r.a.createElement("div",{className:"achievements-title"},"Achievements.",r.a.createElement("p",null,"Team projects from my time in college.")),r.a.createElement("div",{className:"project-list"},r.a.createElement(on,{animate1:this.props.popIn1,animate2:this.props.popIn2}),r.a.createElement(pn,{animate1:this.props.popIn3,animate2:this.props.popIn4})))}}]),t}(r.a.Component);function hn(){var e=Object(d.a)(["\n  font-weight: 500; \n  font-size: 20px;\n"]);return hn=function(){return e},e}function vn(){var e=Object(d.a)(["\n.contact {\n  display: absolute;\n  margin: 80px auto;\n  text-align: center;\n  \n}\n\n.contact-button {\n  margin: auto;\n}\n\n.tagline {\n  font-size: 40px;\n  font-weight: 500;\n}\n"]);return vn=function(){return e},e}var bn=f.a.div(vn()),xn=Object(f.a)(X.a)(hn()),En=function(e){return r.a.createElement(bn,{ref:e.refProp},r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"tagline"},r.a.createElement("p",null,"Interested?")),r.a.createElement("div",{className:"contact-button"},r.a.createElement(xn,{variant:"dark",href:"mailto:contact@andrewboland.dev"},"Contact Me"))))};t(63);function wn(){var e=Object(d.a)(["\n.project {\n  margin: 75px auto 75px;\n  max-width: 960px;\n}\n.large-image-container {\n  overflow: hidden;\n  grid-column: 2;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  margin: 0 0 auto 0;\n}\n.large-image {\n  width: 100%;\n  clip-path: inset( 100% 0% 0% 0% );\n}\n.text-box {\n  position: relative;\n  margin: auto 0;\n  text-align: left;\n}\n.title {\n  text-align: center;\n  font-size: 32px;\n  font-weight: 600;\n  margin: 20px;\n}\n.statement {\n  margin-top: 20px;\n  font-size: 16px;\n  padding: 0 20px;\n}\n.animated {\n  animation: 3s inset forwards;\n}\n@keyframes inset {\n  0% {\n    clip-path: inset( 100% 0% 0% 0% );\n    transform: scale(1.1);\n  }\n  100% {\n    clip-path: inset( 0% 0% 0% 0% );\n    transform: scale(1);\n  }\n}\n"]);return wn=function(){return e},e}var yn=f.a.div(wn()),jn=(r.a.Component,function(e){Object(m.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={navBarDisplayStatus:"hidden"},a.projectsRef=r.a.createRef(),a.achievementsRef=r.a.createRef(),a.contactRef=r.a.createRef(),a.scrollToProjects=a.scrollToProjects.bind(Object(u.a)(a)),a.scrollToAchievements=a.scrollToAchievements.bind(Object(u.a)(a)),a.scrollToContact=a.scrollToContact.bind(Object(u.a)(a)),a.handleScroll=a.handleScroll.bind(Object(u.a)(a)),a}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.scrollY>0?this.setState({navBarDisplayStatus:""}):this.setState({navBarDisplayStatus:"hidden"});for(var e=document.getElementsByClassName("project-image"),n=0;n<e.length;n++){e[n].getBoundingClientRect().top-window.innerHeight<0?this.setState(Object(c.a)({},"popIn".concat(n+1),"animated")):this.setState(Object(c.a)({},"popIn".concat(n+1),""))}}},{key:"scrollToProjects",value:function(){this.projectsRef.current.scrollIntoView({behavior:"smooth"})}},{key:"scrollToAchievements",value:function(){this.achievementsRef.current.scrollIntoView({behavior:"smooth"})}},{key:"scrollToContact",value:function(){this.contactRef.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,{scrollToProjects:this.scrollToProjects,scrollToAchievements:this.scrollToAchievements,scrollToContact:this.scrollToContact,displayStatus:this.state.navBarDisplayStatus}),r.a.createElement(w,{scrollToProjects:this.scrollToProjects}),r.a.createElement(D,null),r.a.createElement(Re,{refProp:this.projectsRef}),r.a.createElement(gn,{refProp:this.achievementsRef,popIn1:this.state.popIn1,popIn2:this.state.popIn2,popIn3:this.state.popIn3,popIn4:this.state.popIn4}),r.a.createElement(En,{refProp:this.contactRef}),r.a.createElement(C,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(jn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[48,1,2]]]);
//# sourceMappingURL=main.ca085523.chunk.js.map