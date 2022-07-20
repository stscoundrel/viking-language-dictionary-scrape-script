const words = []

document.querySelectorAll('.has-small-font-size').forEach(wordLine => {
    const headword = wordLine.querySelectorAll('strong')[0].innerHTML
    const word = {
        headword: headword.replace(/<[^>]*>?/gm, ''),
        definition: wordLine.innerHTML.replace(headword, '').replace(/<[^>]*>?/gm, '').replace('', '').replace('&lt;', '<').replace('&gt;', '>').trim(),
        isCommon: wordLine.innerHTML.includes('')
    }

    words.push(word)
})

console.log(words)