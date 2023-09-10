

const $PokedexContainer = document.getElementById("Pokedex");




function getUniqueType(array){
    const types = [];
    
    for (const pokemon of pokedex) {
    for (const type of pokemon.type) {
        if (!types .includes(type)) {
            types.push(type);
        }
    }
}

types.sort()
    return types;

}

// Filter the pokedex array by the given type

function filterTypes(pokedex, type) {
    const filterPokedex = pokedex.filter(pokemon => pokemon.type.includes(type));

// Sort the filtered array alphabetically by name

    filterPokedex.sort((a,b) => a.name.localeCompare(b.name));

return filterPokedex;

}


function creatPokemonBox(pokemon) {
    const $box = document.createElement('div');
    $box.classList.add('box');

    const $link = document.createElement('a')

    const $name = document.createElement('h2');
    $name.classList.add('name')
    $name.textContent = pokemon.name;
    $box.appendChild($name);

    const $img = document.createElement('img');
    $img.classList.add('pics')
    $img.src = pokemon.sprite;
    $img.alt = pokemon.name;
    $link.href = pokemon.url;
    $link.target = '_blank'
    $link.appendChild($img);
    $box.appendChild($link);

    const $stats = document.createElement('div');
    $stats.classList.add('stats')

    const $hp = document.createElement('p');
    $hp.textContent = `HP: ${pokemon.base.HP}`;
    $stats.appendChild($hp);

    const $attack = document.createElement('p');
    $attack.textContent = `Attack: ${pokemon.base.Attack}`;
    $stats.appendChild($attack);

    const $defense = document.createElement('p');
    $defense.textContent = `Defense: ${pokemon.base.Defense}`;
    $stats.appendChild($defense);

    const $spAttack = document.createElement('p');
    $spAttack.textContent = `Sp. Attack: ${pokemon.base['Sp. Attack']}`;
    $stats.appendChild($spAttack);

    const $spDefense = document.createElement('p');
    $spDefense.textContent = `Sp. Defense: ${pokemon.base['Sp. Defense']}`;
    $stats.appendChild($spDefense);

    const $speed = document.createElement('p');
    $speed.textContent = `Speed: ${pokemon.base.Speed}`;
    $stats.appendChild($speed);

    $box.appendChild($stats)

    return $box;

}

// $PokedexContainer.append(creatPokemonBox(pokedex[0]))

// All pokemons
// for (const pokemon of pokedex) {
//     $PokedexContainer.append(creatPokemonBox(pokemon))
// }

// Create sections by type of pokemon

getUniqueType(pokedex).forEach(type => {
    const $section = document.createElement('div')
    const $gallery = document.createElement('div')
    const $header = document.createElement('div')
    const $title = document.createElement('h1')
    const $home = document.createElement('a')

    $gallery.classList.add('gallery')
    $header.classList.add('header')  
    $home.setAttribute('href', '#home')
    $home.textContent = 'Home'

   
    $section.setAttribute('id', type)
    // put pokemons inside loop
    $PokedexContainer.append($section)

    filterTypes(pokedex, type).forEach(pokemon => {
        $gallery.append(creatPokemonBox(pokemon))
    })

    const $totals = document.createElement('h2')
    $totals.textContent = `Total HP: ${totalStat(filterTypes(pokedex, type), 'HP')} || Total Attack:${totalStat(filterTypes(pokedex, type), 'Attack')}`
    $title.textContent = `${type} (${countPokemon(filterTypes(pokedex, type))})`
    $header.append($title, $totals,$home)
    $section.append($header, $gallery);

    // const $pokemonCount = 
    



})

function totalStat(array, stat) {
    return array.reduce((total, value) => {
        return total += value.base[stat]
    }, 0)
}

function countPokemon(array) {
    return array.reduce(total => {
        return total += 1
    }, 0)
}

// Create navbar that goes to each type
// create a div with class navbar
// inside the div put <a> </a>
// inside the <a> </a> put the type
// repeat for all types
// prepend to $pokedexContainer

const $navbar = document.createElement('div')
$navbar.setAttribute('id', 'home')
$navbar.classList.add('bar')
getUniqueType(pokedex).forEach(type => {
    const $navitem = document.createElement('a')
    $navitem.textContent = type;
    $navitem.setAttribute('href','#'+type)
    $navbar.append($navitem)
})
$PokedexContainer.prepend($navbar)

const $pageTitle = document.createElement('h1')
$pageTitle.textContent ='Pokedex'
$pageTitle.classList.add('pageTitle')

$PokedexContainer.prepend($pageTitle)



// In the title display total HP, total Attack, pokemon count


 
// Format with css
