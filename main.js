console.log('Online')
const card = document.getElementById('quote-container')
const quote = document.getElementById('quote')
const author = document.getElementById('author')
const sadEmoji = document.createElement('i')
sadEmoji.setAttribute('class', 'far fa-frown')

async function getQuote() {
	const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
	const proxyUrl = 'https://cors-anywhere.herokuapp.com'
	const data = await fetch(proxyUrl + apiUrl).then(r=> r.json())
	console.log(data.quote)
	if (data.quote === undefined) {
		quote.innerText = 'Oops please try again'
		author.innerText = ''
	}else{
		quote.innerText = data.quote.quoteText
		if (data.quote.quoteAuthor === '') {
			author.innerText = '- Unknown'
		}else{
			author.innerText = `- ${data.quote.quoteAuthor}`
		}
		// if (data.quote.quoteText.length > 50) {
		// 	console.log('long text')
		// 	quote.classList.add('long-quote')
		// }else{
		// 	quote.classList.remove('long-quote')
		// }
	}
}

function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, '_blank')
}
getQuote()

card.addEventListener('click', (e)=>{
	if (e.target.id === 'new-quote') {
		getQuote()
	}
	if (e.target.id === 'twitter' || e.target.nodeName === 'I') {
		tweetQuote()
	}
})
