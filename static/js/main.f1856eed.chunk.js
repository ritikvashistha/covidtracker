(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{103:function(e,a,t){e.exports=t(223)},223:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),l=t(7),s=t.n(l),u=t(12),i=t(84),d=t(85),m=t(95),p=t(94),f=t(248),v=t(249),h=t(250),y=t(247),E=t(246),b=t(256),g=t(251),_=t(258),x=t(86),C=t.n(x);function w(e){var a=e.children,t=Object(E.a)({target:void 0});return r.a.createElement(_.a,{appear:!1,direction:"down",in:!t},a)}function O(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null),r.a.createElement(w,e,r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,{variant:"h6"},"Coronavirus Tracker App")))),r.a.createElement(v.a,null),r.a.createElement(g.a,null,r.a.createElement(b.a,null," ",r.a.createElement("div",{className:C.a.sp},r.a.createElement("b",null,"Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency. To prevent the spread of COVID-19:")),r.a.createElement("ul",null,r.a.createElement("li",null,"Clean your hands often. Use soap and water, or an alcohol-based hand rub."),r.a.createElement("li",null," ","Maintain a safe distance from anyone who is coughing or sneezing. Don\u2019t touch your eyes, nose or mouth."),r.a.createElement("li",null," ","Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze."),r.a.createElement("li",null," Stay home if you feel unwell."),r.a.createElement("li",null,"If you have a fever, a cough and difficulty breathing, seek medical attention. Call in advance.")),"Follow the directions of your local health authority. Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.")))}var k=t(252),N=t(253),j=t(254),S=t(43),D=t.n(S),I=t(44),A=t.n(I),V=t(8),B=t.n(V),T=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement("div",{className:B.a.container},r.a.createElement(k.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(k.a,{item:!0,component:N.a,xs:12,md:3,className:A()(B.a.card,B.a.infected,B.a.containers)},r.a.createElement(j.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0}," ","Infected"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(D.a,{start:0,end:t.value,duration:3,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of active cases of COVID-19"," "),r.a.createElement(j.a,{className:B.a.overlay},r.a.createElement(h.a,{variant:"body2",className:B.a.text},"StayHome")))),r.a.createElement(k.a,{item:!0,component:N.a,xs:12,md:3,className:A()(B.a.card,B.a.recovered,B.a.containers)},r.a.createElement(j.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0}," ","Recovered"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(D.a,{start:0,end:n.value,duration:3,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of recoveries cases of COVID-19"," "),r.a.createElement(j.a,{className:B.a.overlay},r.a.createElement(h.a,{variant:"body2",className:B.a.text},"Immunity wins")))),r.a.createElement(k.a,{item:!0,component:N.a,xs:12,md:3,className:A()(B.a.card,B.a.deaths,B.a.containers)},r.a.createElement(j.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(D.a,{start:0,end:c.value,duration:3,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of deaths caused by COVID-19"," "),r.a.createElement(j.a,{className:B.a.overlay},r.a.createElement(h.a,{variant:"body2",className:B.a.text},"StaySafe")))))):"Loading...."},U=t(42),z=t(45),F=t.n(z),L="https://covid19.mathdro.id/api",P=function(){var e=Object(u.a)(s.a.mark((function e(a){var t,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L,a&&(t="".concat(L,"/countries/").concat(a)),e.prev=2,e.next=5,F.a.get(t);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(a){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(L,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(L,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=t(57),H=t(91),J=t.n(H),M=function(e){var a=e.data,t=a.confirmed,c=a.deaths,o=a.recovered,l=e.country,i=Object(n.useState)([]),d=Object(U.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,R();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.map.length?r.a.createElement(G.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"purple",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(225,0,0,0.5)",fill:!0}]}}):null,v=t?r.a.createElement(G.a,{data:{labels:["Infected","recovered","deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state  in ".concat(l)}}}):null;return r.a.createElement("div",{className:J.a.container},l?v:f)},K=t(260),X=t(257),Z=t(92),q=t.n(Z),Q=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(U.a)(t,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,Y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(K.a,{className:q.a.formControl},r.a.createElement(X.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},W=t(46),$=t.n(W),ee=t(93),ae=t.n(ee),te=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var a=Object(u.a)(s.a.mark((function a(t){var n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return r.a.createElement("div",{className:$.a.body},r.a.createElement(O,null),r.a.createElement("div",{className:$.a.container},r.a.createElement("img",{className:$.a.image,src:ae.a,alt:"covid imge"}),r.a.createElement(T,{data:a}),r.a.createElement(Q,{handleCountryChange:this.handleCountryChange})),r.a.createElement(M,{data:a,country:t}),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(te,null),document.getElementById("root"))},46:function(e,a,t){e.exports={body:"App_body__1cE_v",container:"App_container__3r88O",image:"App_image__LmnwY"}},8:function(e,a,t){e.exports={container:"Cards_container__3Hg_4",containers:"Cards_containers__1zgDT",overlay:"Cards_overlay__2A95K",text:"Cards_text__3GcYT",card:"Cards_card__2DRkb",infected:"Cards_infected__2ElfL",recovered:"Cards_recovered__3mcSE",deaths:"Cards_deaths__1pjxr"}},86:function(e,a,t){e.exports={sp:"Navbar_sp__3NPYm"}},91:function(e,a,t){e.exports={container:"Charts_container__39wR0"}},92:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__3ZxuX"}},93:function(e,a,t){e.exports=t.p+"static/media/image.d7265326.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.f1856eed.chunk.js.map