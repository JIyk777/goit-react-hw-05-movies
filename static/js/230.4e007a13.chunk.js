"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[230],{61:function(n,t,e){e.d(t,{S:function(){return r}});var r="5a1111e9d2c7100474f9cf656ec9c27e"},54:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(444),a=e(407),i=(0,r.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.cp,a.AF,a.Cg)},230:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,i,c,o=e(885),u=e(791),s=e(731),p=e(689),l=e(54),f=e(168),x=e(444),d=x.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=x.ZP.ul(a||(a=(0,f.Z)(["\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  gap: 25px;\n  list-style: none;\n  flex-wrap: wrap;\n  padding: 30px;\n"]))),g=x.ZP.img(i||(i=(0,f.Z)(["\n  width: 100%;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),m=(0,x.ZP)(s.rU)(c||(c=(0,f.Z)(["\n  text-decoration: none;\n  text-align: center;\n  color: black;\n  width: calc((100% - 100px) / 5);\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),b=e(61),v=e(184),_=function(){var n,t=(0,u.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],i=(0,s.lr)(),c=(0,o.Z)(i,2),f=c[0],x=c[1],_=(0,p.TH)(),j=null!==(n=f.get("name"))&&void 0!==n?n:"";(0,u.useEffect)((function(){var n;""!==j&&(n=j,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(b.S,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.json()}))).then((function(n){return a(n)}))}),[j]);return(0,v.jsxs)(l.x,{width:"1280px",marginLeft:"auto",marginRight:"auto",children:[(0,v.jsxs)(d,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.name.value;x(""!==t?{name:t}:{})},children:[(0,v.jsx)("input",{type:"text",name:"name"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),0!==r.length&&(0,v.jsx)(h,{children:r.results.map((function(n){return(0,v.jsx)(m,{to:"".concat(n.id),state:{from:_},children:(0,v.jsxs)("li",{children:[(0,v.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),width:"300"}),n.original_title]})},n.id)}))})]})}}}]);
//# sourceMappingURL=230.4e007a13.chunk.js.map