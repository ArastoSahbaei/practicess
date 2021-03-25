const books = [
    { id: 100, title: "Skärmhjärnan", author: "Anders Hansen", price: 59 },
    { id: 101, title: "Klubben", author: "Matilda Voss", price: 59 },
    { id: 102, title: "Det sista livet", author: "Peter Nyström", price: 49 },
    { id: 103, title: "Skytten", author: "Jonas Moström", price: 59 },
    { id: 104, title: "Franska fotografen", author: "Natasha Lester", price: 59 },
    { id: 105, title: "Ödemark", author: "Stina Jackson", price: 59 },
]

const cart = []

function hidePopup() {
    // todo: göm popupen
    document.getElementById("popup-itemadded").style.display = "none"
}

function addToCart(id) {
    cart.push(id)

    // todo: ta fram rätt bok
    const book = books.find(b => b.id === id)

    // todo: ta fram "book" eller "books"
    const bookOrBooks = cart.length === 1 ? "book" : "books"

    let s = `
    <p><b>${book.title}</b> added to the cart</p>
    <div class="buttons">
        <button>Show cart (${cart.length} ${bookOrBooks})</button>
        <button onclick="hidePopup()">Close</button>
        <button>Checkout</button>
    </div>
    `

    document.getElementById("popup-itemadded").innerHTML = s
    document.getElementById("popup-itemadded").style.display = "block"
}

function render() {

    let s = "";

    for (let book of books) {
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