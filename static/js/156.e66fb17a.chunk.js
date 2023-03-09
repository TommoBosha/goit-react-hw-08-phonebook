"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[156],{2156:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,i,a,o,s,c,d,p=t(9439),u=t(2791),x=t(9434),l=t(8174),h=(t(5462),t(1921)),f=function(n){return n.contacts.filter},m=function(n){return n.contacts.contacts.filter((function(e){return e.name.toLowerCase().includes(n.contacts.filter)}))},g=function(n){return n.contacts.contacts},b=t(168),Z=t(6444),j=Z.ZP.form(r||(r=(0,b.Z)(["\ndisplay: flex;\nflex-direction: column;\npadding: 0 20px;\nborder: 2px solid gray;\nborder-radius: 10px;\nbackground-color: beige;\n"]))),v=Z.ZP.label(i||(i=(0,b.Z)(["\nmargin-top:10px;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.25;\n"]))),w=Z.ZP.input(a||(a=(0,b.Z)(["\n    margin-top:10px;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.25;\n  border-radius: 5px;\n  height: 30px;\n"]))),y=Z.ZP.button(o||(o=(0,b.Z)(["\nmargin: 15px auto ;\n    padding:10px;\n    width: 150px;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.25;\n  background-color: skyblue;\n  border:none;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  }\n"]))),k=t(184);function P(){var n=(0,u.useState)(""),e=(0,p.Z)(n,2),t=e[0],r=e[1],i=(0,u.useState)(""),a=(0,p.Z)(i,2),o=a[0],s=a[1],c=(0,x.v9)(g),d=(0,x.I0)(),f=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"name":r(i);break;case"number":s(i);break;default:return}},m=function(){r(""),s("")};return(0,k.jsxs)(j,{onSubmit:function(n){n.preventDefault();var e={name:t,number:o},r=c.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}));r?l.Am.success("".concat(e.name," is alredy in contacts")):d((0,h.uK)(e)),m()},autoComplete:"off",children:[(0,k.jsx)(v,{htmlFor:"contact_name",children:"Name"}),(0,k.jsx)(w,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:f}),(0,k.jsx)(v,{htmlFor:"contact_number",children:"Number"}),(0,k.jsx)(w,{value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:f}),(0,k.jsx)(y,{type:"submit",children:" Add contact"}),(0,k.jsx)(l.Ix,{})]})}var C,z,_,A,F,I=Z.ZP.li(s||(s=(0,b.Z)(["\n   display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    padding: 10px 20px;\n    /* &:not(:last-child) {\n        margin-bottom: 30px;\n    } */\n   \n"]))),K=Z.ZP.a(c||(c=(0,b.Z)(["\n  width: 50%;\n    text-decoration: none;\n    font-size: 16px;\n    color: #000;\n    &:hover {\n    color: grey;\n    text-decoration: underline;\n  }\n    \n"]))),L=Z.ZP.button(d||(d=(0,b.Z)(["\n \n    padding:10px;\n    width: 100px;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.25;\n  background-color: skyblue;\n  border:none;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  }\n  \n"]))),N=function(n){var e=n.id,t=n.name,r=n.number,i=(0,x.I0)();return(0,k.jsxs)(I,{children:[(0,k.jsxs)("p",{children:[t,":"]}),(0,k.jsx)(K,{href:"tel:"+r,children:r}),(0,k.jsx)(L,{type:"button",onClick:function(){return function(n){i((0,h.GK)(n))}(e)},children:"Delete"})]},e)},S=Z.ZP.ul(C||(C=(0,b.Z)(["\n  /* display: flex;\n  flex-direction: column;\n  padding: 0 15px;\n  width: 360px; */\n\n   margin: 0 auto;\n  border: 2px solid gray;\n  border-radius: 6px;\n  overflow: hidden;\n"]))),q=function(){var n=(0,x.I0)(),e=(0,x.v9)(m);return(0,u.useEffect)((function(){n((0,h.K2)())}),[n]),(0,k.jsx)(S,{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,k.jsx)(N,{id:e,name:t,number:r},e)}))})},D=Z.ZP.label(z||(z=(0,b.Z)(["\n   display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto 0;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.25;\n"]))),E=Z.ZP.input(_||(_=(0,b.Z)(["\n   margin:20px;\n    width: 250px;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.25;\n  border-radius: 5px;\n  height: 25px;\n"]))),B=t(6769),G=function(){var n=(0,x.v9)(f),e=(0,x.I0)();return(0,k.jsxs)(D,{children:["Find contacts by name",(0,k.jsx)(E,{type:"text",name:"filter",value:n,onChange:function(n){return function(n){e((0,B.x)(n))}(n.target.value)},placeholder:"Enter search name"})]})},J=Z.ZP.div(A||(A=(0,b.Z)(["\n    padding: 20px;\n    margin: 0 auto;\n    "]))),M=Z.ZP.h2(F||(F=(0,b.Z)(["\n      margin-bottom: 20px;\n    text-align: center;\n    font-size: 24px;\n"]))),$=function(n){var e=n.title,t=n.children;return(0,k.jsxs)(J,{children:[(0,k.jsx)(M,{children:e}),t]})},H=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)($,{title:"Phonebook",children:(0,k.jsx)(P,{})}),(0,k.jsxs)($,{title:"Contacts",children:[(0,k.jsx)(G,{}),(0,k.jsx)(q,{})]})]})}}}]);
//# sourceMappingURL=156.e66fb17a.chunk.js.map