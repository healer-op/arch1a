class PSPXMB {

constructor(){

this.games = []
this.filtered = []

this.categories = ["All","Action","Racing","Fighting","RPG"]
this.activeCategory = "All"

this.load()

}

async load(){

const r = await fetch("games.json")
this.games = await r.json()

this.filtered = this.games

this.renderCategories()
this.renderGames()
this.setupSearch()

}

setupSearch(){

const search = document.getElementById("search")

search.addEventListener("input", e => {

const q = e.target.value.toLowerCase()

this.filtered = this.games.filter(g =>
g.name.toLowerCase().includes(q)
)

this.renderGames()

})

}

renderCategories(){

const el = document.getElementById("categories")

el.innerHTML = this.categories.map(c=>`

<div class="category ${c==this.activeCategory?"active":""}"
onclick="app.selectCategory('${c}')">

${c}

</div>

`).join("")

}

selectCategory(cat){

this.activeCategory = cat

if(cat=="All"){

this.filtered = this.games

}else{

this.filtered = this.games.filter(g =>
g.name.toLowerCase().includes(cat.toLowerCase())
)

}

this.renderCategories()
this.renderGames()

}

renderGames(){

const el = document.getElementById("games")

el.innerHTML = this.filtered.map(g=>`

<div class="game">

<div>${g.name}</div>

<button class="download-btn"
onclick="app.download('${g.download}','${g.name}')">

Download

</button>

</div>

`).join("")

}

download(url,name){

const bar = document.getElementById("downloadBar")

bar.innerText = "Downloading: "+name

const a = document.createElement("a")

a.href = url
a.download = name

document.body.appendChild(a)

a.click()

a.remove()

bar.innerText = "Download started 🎮"

}

}

const app = new PSPXMB()