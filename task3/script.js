document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById('para').innerHTML;
    const regex = /(\S{9,})/g;
    const highlightedText = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    document.getElementById('para').innerHTML = highlightedText;
});