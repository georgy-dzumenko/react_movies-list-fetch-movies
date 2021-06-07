(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(5),c=a.n(l),r=(a(17),a(10)),o=a(6),m=a(7),s=a(11),d=a(9),u=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,c=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))},p=a(3),v=(a(21),function(e){var t=e.addMovie,a=e.isAlreadyAdded,l=Object(i.useState)(""),c=Object(p.a)(l,2),r=c[0],o=c[1],m=Object(i.useState)({}),s=Object(p.a)(m,2),d=s[0],h=s[1],v=Object(i.useState)(""),g=Object(p.a)(v,2),b=g[0],f=g[1];return Object(i.useEffect)((function(){f("")}),[r]),n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{value:r,onChange:function(e){o(e.target.value)},type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(b?"is-danger":"")})),n.a.createElement("p",{className:"help is-danger"},b)),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){var e;(e=r,fetch("".concat("https://www.omdbapi.com/?apikey=1aef6206","&t=").concat(e)).then((function(e){return e.json()})).then((function(e){return{error:e.Error,movie:{title:e.Title,description:e.Plot,imgUrl:e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID,"/"),imdbId:e.imdbID}}}))).then((function(e){h(e.movie),f(e.error)}))}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{disabled:"False"===d.Response||a(d)||!d.title,active:!1,type:"button",className:"button is-primary",onClick:function(){t(d),o(""),h({})}},"Add to the list")))),!b&&d.title?n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),n.a.createElement(u,d)):"")}),g=a(8),b=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:g},e.isAlreadyAdded=function(t){return!!e.state.movies.find((function(e){return e.imdbId===t.imdbId}))},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(v,{isAlreadyAdded:this.isAlreadyAdded,addMovie:this.addMovie})))}}]),a}(i.Component);c.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.894fa7a1.chunk.js.map