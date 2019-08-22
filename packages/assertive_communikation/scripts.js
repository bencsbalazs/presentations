Reveal.initialize({
    dependencies: [
        { src: 'plugin/markdown/marked.js' },
        { src: 'plugin/markdown/markdown.js' },
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/highlight/highlight.js', async: true }
    ],
    history: true
});
Reveal.addEventListener("communikationfails", function () {
    const fragments = document.getElementById('communikationfails').getElementsByClassName('fragment');
    for (var i = 0; i < fragments.length; i++) {
        fragments[i].style.margin = "0 " + (i + 4) + "%";
    }
});
Reveal.addKeyBinding( { keyCode: 84, key: 'T', description: 'Translation change' }, function() {
	url = ((window.location.href.indexOf('_en') > -1)?"index.html" : "index_en.html") + "#/"+Reveal.getIndices().h+"/"+Reveal.getIndices().v;
    location.replace(url);
});
