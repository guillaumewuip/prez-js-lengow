
'use strict';

(function () {

    Reveal.initialize({
        controls:    false,
        progress:    true,
        history:     true,
        center:      true,
        slideNumber: true,

        transition: 'none',

        width: 960,     // 16/10
        height: 600,

        dependencies: [
            {
                src: 'lib/js/classList.js',
                condition: function() {
                    return !document.body.classList;
                }
            },
            {
                src: 'plugin/markdown/marked.js',
                condition: function() {
                    return !!document.querySelector('[data-markdown]');
                }
            },
            {
                src: 'plugin/markdown/markdown.js',
                condition: function() {
                    return !!document.querySelector('[data-markdown]');
                }
            },
            {
                src: 'plugin/highlight/highlight.js',
                async: true,
                callback: function() {
                    hljs.initHighlightingOnLoad();
                }
            },
            {
                src: 'plugin/zoom-js/zoom.js',
                async: true
            },
            {
                src: 'plugin/notes/notes.js',
                async: true
            },
        ]
    });

}());
