(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(25),n(10)),s=n(4),l=n(5),u=n(7),h=n(6),d=(n(26),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.handleChange=function(t){e.setState({search:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.search),e.setState({search:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.search,name:"search",onChange:this.handleChange})]})})}}]),n}(a.Component),g=n(19),f=n.n(g),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return f()("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22368183-bf812a4cdd1e1ebd2a0bd646c&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=(n(46),function(e){var t=e.fetchImages,n=e.amountImg;return Object(d.jsx)("div",{className:" btnWrap",children:12===n?Object(d.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more..."}):null})}),j=(n(47),document.querySelector("#modal-root")),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).backdropRef=Object(a.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){e.backdropRef.current&&t.target!==e.backdropRef.current||e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.children;return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",ref:this.backdropRef,onClick:this.props.onClose,role:"presentation",children:Object(d.jsx)("div",{className:"Modal",children:e})}),j)}}]),n}(a.Component),v=(n(48),function(e){var t=e.image,n=e.openModal,a=t.webformatURL,r=t.tags;return Object(d.jsx)("li",{id:t.id,onClick:n,className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:a,alt:r,className:"ImageGalleryItem-image"})})}),y=(n(49),function(e){var t=e.images,n=e.openModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(v,{openModal:n,image:e},e.id)}))})}),I=n(20),S=n.n(I),x=(n(70),function(){return Object(d.jsx)("div",{className:"loaderWrap",children:Object(d.jsx)(S.a,{type:"ThreeDots",color:"#3f51b5",height:50,width:120,timeout:3e3})})}),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],pageNumber:1,search:"",error:"",isLoading:!1,isModalOpen:!1,largeImageId:null,largeImage:[]},e.onSearch=function(t){e.setState({search:t,images:[],pageNumber:1})},e.fetchImagesWithScroll=function(){e.fetchImages(!0)},e.fetchImages=function(t){e.setState({isLoading:!0});var n=e.state,a=n.search,r=n.pageNumber;p(a,r).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),pageNumber:e.pageNumber+1}})),t[0]})).catch((function(t){e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})})).then((function(e){if(t){var n=e.id,a=document.getElementById(n).getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:a,behavior:"smooth"})}}))},e.findImg=function(){return e.state.images.find((function(t){return t.id===e.state.largeImageId}))},e.openModal=function(t){e.setState({isModalOpen:!0,largeImageId:Number(t.currentTarget.id)})},e.closeModal=function(){return e.setState({isModalOpen:!1})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchImages(!1)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.images,a=e.isModalOpen,r=e.largeImageId;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{onSubmit:this.onSearch}),Object(d.jsx)(y,{openModal:this.openModal,images:n}),t&&Object(d.jsx)(x,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3}),n.length>0&&Object(d.jsx)(b,{fetchImages:this.fetchImagesWithScroll,amountImg:n.length}),a&&Object(d.jsx)(O,{largeImageId:r,onClose:this.closeModal,children:Object(d.jsx)("img",{src:this.findImg().largeImageURL,alt:this.findImg().tags})})]})}}]),n}(a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b9cd11ea.chunk.js.map