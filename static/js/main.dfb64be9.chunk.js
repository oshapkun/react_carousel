(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(4),c=a(5),l=a(8),r=a(6),m=a(1),o=a.n(m),p=(a(13),a(7)),u=(a(14),a(0)),h=function(e){var t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,s=e.animationDuration,c=e.infinite,l=Object(m.useState)(0),r=Object(p.a)(l,2),o=r[0],h=r[1],d={width:"".concat(i*n,"px"),transitionDuration:"".concat(s,"ms")},b={width:"".concat(i*t.length,"px"),height:"".concat(i,"px"),transitionDuration:"".concat(s,"ms"),transform:"translateX(-".concat(o,"px)")},j={width:"".concat(i*n,"px")};return Object(u.jsx)("div",{className:"Carousel",style:d,children:Object(u.jsxs)("div",{className:"Carousel__wrapper",style:j,children:[Object(u.jsx)("ul",{className:"Carousel__list",style:b,children:t.map((function(e,t){return Object(u.jsx)("li",{className:"Carousel__item",children:Object(u.jsx)("img",{src:e,alt:"".concat(t),width:i,className:"Carousel__image"})},e)}))}),Object(u.jsxs)("div",{className:"Carousel__btns",children:[Object(u.jsx)("button",{className:"Carousel__btn",type:"button",onClick:function(){var e=o-i*a;h(c?e<0?(t.length-n)*i:e:Math.max(e,0))},disabled:!c&&0===o,children:"<"}),Object(u.jsx)("button",{className:"Carousel__btn",type:"button",onClick:function(){var e,s=t.length-Math.ceil(o/i);c?e=s<a||(e=o+i*a)>=t.length*i?0:e:(e=o+i*a,e=Math.min(e,(t.length-n)*i)),h(e)},"data-cy":"next",disabled:!c&&o>=i*(t.length-n),children:">"})]})]})})},d=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,infinite:!1},e.handleInputChange=function(t){switch(t.target.id){case"stepId":e.setState({step:+t.target.value});break;case"frameId":e.setState({frameSize:+t.target.value});break;case"itemId":e.setState({itemWidth:+t.target.value});break;case"animationDuration":e.setState({animationDuration:+t.target.value});break;case"infinite":e.setState((function(e){return{infinite:!e.infinite}}))}},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,s=e.animationDuration,c=e.infinite,l=this.handleInputChange;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(u.jsxs)("form",{action:"#",className:"App__form",children:[Object(u.jsxs)("label",{className:"App__label",htmlFor:"itemId",children:["Item Width",Object(u.jsx)("input",{type:"number",id:"itemId",name:"itemId",min:"50",max:"200",className:"App__input",step:"5",value:i,onChange:l})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"frameId",children:["Frame size",Object(u.jsx)("input",{type:"number",id:"frameId",name:"frameId",min:"1",max:"10",className:"App__input",value:n,onChange:l})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"stepId",children:["Step",Object(u.jsx)("input",{type:"number",id:"stepId",name:"stepId",min:"1",max:"9",className:"App__input",value:a,onChange:l})]}),Object(u.jsxs)("label",{className:"App__label",htmlFor:"animationDuration",children:["Animation duration",Object(u.jsx)("input",{type:"number",id:"animationDuration",name:"animationDuration",className:"App__input",value:s,onChange:l})]}),Object(u.jsxs)("label",{className:"App__label App__label--infinite",htmlFor:"infinite",children:["Infinite",Object(u.jsx)("input",{type:"checkbox",id:"infinite",name:"infinite",className:"App__input",defaultChecked:c,onChange:l})]})]}),Object(u.jsx)(h,{images:t,step:a,itemWidth:i,frameSize:n,animationDuration:s,infinite:c})]})}}]),a}(o.a.Component),b=d;i.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dfb64be9.chunk.js.map