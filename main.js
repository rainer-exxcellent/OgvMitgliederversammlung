import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/simple.css'
import 'reveal.js/plugin/highlight/zenburn.css'
import Reveal from 'reveal.js'
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'

import './ogv.css'


const deck = new Reveal()
deck.initialize({ hash: true, slideNumber: true, plugins: [ RevealHighlight, RevealMarkdown, RevealNotes, ] })