const e={form:document.querySelector(".js-search-form"),list:document.querySelector(".js-gallery"),loadMoreBlock:document.querySelector(".more")},{form:s,list:r,loadMoreBlock:t}=e,a=new class{#e="https://api.unsplash.com/search/photos";#s="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";#r;#t;#a=new URLSearchParams({per_page:30,client_id:this.#s,color:"black",orientation:"portrait"});constructor(){this.#r=1,this.#t=""}async getImages(){const e=await fetch(`${this.#e}?query=${this.#t}&page=${this.#r}&${this.#a}`);if(!e.ok)throw new Error(e.statusText);return await e.json()}get page(){return this.#r}set page(e){this.#r=e}set searchQuery(e){this.#t=e}get searchQuery(){return this.#t}};let i=new IntersectionObserver((function(e,s){e.forEach((e=>{e.isIntersecting&&async function(){const e=await a.getImages();if(!e.results.length)return void t.classList.remove("is-visible");c=e.total_pages;const s=(n=e.results,n.map((({urls:e,alt_description:s})=>`<li class="gallery__item">\n        <img src="${e.small}" alt="${s}" class="gallery-img">\n    </li>`)).join(""));var n;if(r.insertAdjacentHTML("beforeend",s),a.page+=1,a.page>c)t.classList.remove("is-visible"),i.unobserve(t)}()}))}));let c=0;s.addEventListener("submit",(async function(e){e.preventDefault();const s=e.currentTarget.elements.query.value.trim();s&&(a.searchQuery=s,a.page=1,r.innerHTML="",t.classList.add("is-visible"),i.observe(t))}));
//# sourceMappingURL=infinite_scroll.c4438b11.js.map