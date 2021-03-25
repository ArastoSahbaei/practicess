// todo: lägg till de två sista böckerna
// id=104, Franska fotografen, Natasha Lester, 59kr
// id=105, Ödemark, Stina Jackson, 59kr
const books = [
    { id: 100, title: "Skärmhjärnan", author: "Anders Hansen", price: 59 },
    { id: 101, title: "Klubben", author: "Matilda Voss", price: 59 },
    { id: 102, title: "Det sista livet", author: "Peter Nyström", price: 49 },
    { id: 103, title: "Skytten", author: "Jonas Moström", price: 59 },
    { id: 104, title: "Franska fotografen", author: "Natasha Lester", price: 59 },
    { id: 105, title: "Ödemark", author: "Stina Jackson", price: 59 },
]


function addToCart(id) {
    // todo: visa en alertruta (t.ex "You wan't to add book 103 to cart")
    alert(`You wan't to add book ${id} to cart`)
}

function render() {

    let s = "";

    for (let book of books) {
        // todo: lägg in titeln
        s += `
            <article>
                <div class="image">
                </div>
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>${book.price} kr</p>
                <button onclick=addToCart(${book.id})>Buy</button>
            </article>
        `
    }

    const fullRows = books.length % 4 === 0

    if (!fullRows) {
        const extraEmptyBooks = 4 - books.length % 4
        for (let i = 0; i < extraEmptyBooks; i++) {
            s += `
                <article style="visibility: hidden;">
                </article>
            `
        }

    }


    document.getElementById("booklist").innerHTML = s
}

render()