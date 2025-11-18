const cartItems = JSON.parse(localStorage.getItem('cartItems'))
displayData(cartItems)

function displayData (data)
{
	document.getElementById("main").textContent=''
	console.log(data)
	data.forEach((v, i) => {
		const pDiv = document.createElement("div")
		pDiv.classList.add("card")
		const img = document.createElement("img")
		img.src = v.thumbnail
		img.alt = v.title
		img.classList.add("card-img-top")
		const title = document.createElement("h2")
		title.textContent = v.title
		title.classList.add("card-title")
		const price = document.createElement("p")
		price.textContent = "$" + v.price
		price.classList.add("card-text")
		const removeCart = document.createElement("button")
		removeCart.textContent = "remove"
		removeCart.classList.add("btn", "btn-outline-success")
		removeCart.addEventListener("click", () => removeCartFun(i))
		pDiv.append(img, title, price, removeCart)
		document.getElementById('main').appendChild(pDiv)
	})
}
function removeCartFun (i)
{
	cartItems.splice(i, 1);
	localStorage.setItem('cartItems', cartItems)
	displayData(cartItems)
}