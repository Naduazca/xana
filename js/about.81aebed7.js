"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[443],{759:function(t,a,e){e.r(a),e.d(a,{default:function(){return C}});var l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"analisi"},[a("h2",{staticClass:"pb-2"},[t._v(" Anàlisis de somnis ")]),a("div",{staticClass:"container-md"},[a("b-card-group",{attrs:{deck:""}},t._l(t.proyectos,(function(t){return a("div",{key:t.id,attrs:{columns:""}},[a("Card2",{attrs:{autor:t.autor,srcimg:t.srcimg,alt:t.alt,titulo:t.titulo,texto:t.texto}})],1)})),0),a("div",[a("NavPages")],1)],1)])},s=[],r=function(){var t=this,a=t._self._c;return a("div",[a("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:t.titulo,"img-src":t.srcimg,"img-alt":t.alt,"img-top":"",footer:t.autor,tag:"proyecto"}},[a("b-card-text",[t._v(" "+t._s(t.texto)+" ")])],1)],1)},n=[],i={props:["id","autor","titulo","srcimg","alt","texto"]},o=i,u=e(1),c=(0,u.Z)(o,r,n,!1,null,null,null),d=c.exports,v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"overflow-auto"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"Algo.json"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}}),a("p",{staticClass:"mt-3"},[t._v("Current Page: "+t._s(t.currentPage))]),a("b-table",{attrs:{id:"Algo.json",items:t.items,"per-page":t.perPage,"current-page":t.currentPage,small:""}})],1)},m=[],p={data(){return{perPage:3,currentPage:1,items:[{id:1,Autor:"Cristina Bossacoma",Edat:"2.5 anys"},{id:2,Autor:"Solanghi Balderrama",Edat:" 2.5 anys"},{id:3,Autor:"Nadia Diaz",Edat:"3 anys"},{id:4,Autor:"Oriol Larroya",Edat:"3 anys"},{id:5,Autor:"Laia Cossío",Edat:"3 anys"},{id:6,Autor:"Xavier de Haro",Edat:"3 anys"},{id:7,Autor:"Judith Farré",Edat:"3 anys"},{id:8,Autor:"Javier Abella",Edat:"3 anys"},{id:9,Autor:" Ziggy Wouters",Edat:"3 anys"},{id:10,Autor:"Biel Griñó",Edat:"3 anys"},{id:11,Autor:"Maria Canela",Edat:"4 anys"}]}},computed:{rows(){return this.items.length}}},f=p,x=(0,u.Z)(f,v,m,!1,null,null,null),g=x.exports;const y="https://raw.githubusercontent.com/Naduazca/xana/main/Algo.json";var _={props:{name:{type:String,default:"Algo.json"}},components:{Card2:d,NavPages:g},data(){return{proyectos:[],githubPage:1,page:1,loading:!1,perPage:5}},mounted(){this.fetchData()},methods:{async fetchData(){const t=await fetch(y),a=await t.json();this.proyectos=a,console.log(a)}}},h=_,b=(0,u.Z)(h,l,s,!1,null,null,null),C=b.exports},617:function(t,a,e){e.r(a),e.d(a,{default:function(){return o}});var l=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about"},[a("h2",[t._v("Conclusions")]),a("p",{staticClass:"paragraf"},[t._v("Com podem veure, segons els estudis que hem realitzat, la majoria de la gent se'n recorda de la seva primera memòria o record al voltants dels tres anys d'edat. ")]),a("h3",{staticClass:"titol2"},[t._v("Què és la memòria autobiogràfica?")]),a("p",{staticClass:"paragraf"},[t._v("La memòria autobiogràfica conté els records dels esdeveniments passats en la vida d'una persona. Pot referir-se a tot el relacionat amb el que ha succeït al llarg de la seva vida, incloent des dels records més antics fins els més recents. ")]),a("h3",{staticClass:"titol2"},[t._v("Agraïments als participants:")]),a("p",{staticClass:"paragraf"},[t._v("Cristina Bossacoma, Judit Farré, Solanghi Balderrama, Biel Griñó, Oriol Larroya, Laia Cossío, Maria Canela, Xavier de Haro, Nadia Diaz, Javier Abella i Ziggy Wouters")])])}],r=e(1),n={},i=(0,r.Z)(n,l,s,!1,null,null,null),o=i.exports},799:function(t,a,e){e.r(a),e.d(a,{default:function(){return z}});var l=function(){var t=this,a=t._self._c;return a("div",[a("h2",{staticClass:"titolformulari"},[t._v(" Escriu el teu record!")]),a("div",{staticClass:"formulari"},[a("FormInput"),a("FormSelect"),a("TextArea"),t._v(" "),a("FormFile"),a("PopUp")],1)])},s=[],r=function(){var t=this,a=t._self._c;return a("div",[a("b-form-file",{staticClass:"mt-3",attrs:{plain:""},model:{value:t.file2,callback:function(a){t.file2=a},expression:"file2"}}),a("div",{staticClass:"mt-3"},[t._v(t._s(t.file2?t.file2.name:""))])],1)},n=[],i={data(){return{file2:null}}},o=i,u=e(1),c=(0,u.Z)(o,r,n,!1,null,null,null),d=c.exports,v=function(){var t=this,a=t._self._c;return a("div",[a("b-form-input",{attrs:{placeholder:"Escriu el teu nom"},model:{value:t.text,callback:function(a){t.text=a},expression:"text"}}),a("div",{staticClass:"mt-2"},[t._v(t._s(t.text))])],1)},m=[],p={data(){return{text:""}}},f=p,x=(0,u.Z)(f,v,m,!1,null,null,null),g=x.exports,y=function(){var t=this,a=t._self._c;return a("div",[a("b-form-select",{attrs:{options:t.options},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}})],1)},_=[],h={data(){return{selected:null,options:[{value:null,text:"Elegeix la teva edat"},{value:"a",text:"1 any"},{value:"b",text:"2 anys"},{value:"c",text:"3 anys"},{value:"d",text:"4 anys"},{value:"e",text:"5 anys"},{value:"f",text:"6 anys"},{value:"g",text:"7 anys"},{value:"h",text:"8 anys"},{value:"i",text:"9 anys"},{value:"j",text:"10 anys"}],text1:""}}},b=h,C=(0,u.Z)(b,y,_,!1,null,null,null),A=C.exports,E=function(){var t=this,a=t._self._c;return a("div",[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Escriu aquí el teu record...",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(a){t.text=a},expression:"text"}}),a("pre",{staticClass:"mt-3 mb-0"},[t._v(t._s(t.text))])],1)},P=[],w={data(){return{text:""}}},Z=w,k=(0,u.Z)(Z,E,P,!1,null,null,null),F=k.exports,j=function(){var t=this,a=t._self._c;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Enviar record")]),a("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"}},[a("p",{staticClass:"my-4"},[t._v("Segur que vols enviar el teu record?")])])],1)},B=[],S={},L=(0,u.Z)(S,j,B,!1,null,null,null),N=L.exports,q={components:{FormFile:d,FormInput:g,FormSelect:A,TextArea:F,PopUp:N},data(){return{file2:null,selected:null,options:[{value:null,text:"Elegeix la teva edat"},{value:"a",text:"1 any"},{value:"b",text:"2 anys"},{value:"c",text:"3 anys"},{value:"d",text:"4 anys"},{value:"e",text:"5 anys"},{value:"f",text:"6 anys"},{value:"g",text:"7 anys"},{value:"h",text:"8 anys"},{value:"i",text:"9 anys"},{value:"j",text:"10 anys"}],text1:""}}},D=q,J=(0,u.Z)(D,l,s,!1,null,null,null),z=J.exports}}]);
//# sourceMappingURL=about.81aebed7.js.map
