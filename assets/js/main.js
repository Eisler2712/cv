/*==================== THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

// Restore the theme chosen on a previous visit
if (localStorage.getItem('selected-theme') === 'dark') {
    document.body.classList.add(darkTheme)
}

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        localStorage.setItem(
            'selected-theme',
            document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        )
    })
}

/*==================== EXPORT TO PDF ====================*/
/* Uses the browser's native print-to-PDF rather than html2pdf (html2canvas).
   html2canvas rasterised the whole CV into one image: a multi-megabyte file with
   text no ATS could parse, sliced across pages at arbitrary heights. The print
   path renders real text and honours the page setup in @media print. */
const printButton = document.getElementById('print-button')

if (printButton) {
    printButton.addEventListener('click', () => window.print())
}
