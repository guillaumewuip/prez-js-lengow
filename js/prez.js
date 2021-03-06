
'use strict';

(function () {

    Reveal.initialize({
        controls:    false,
        progress:    true,
        history:     true,
        center:      true,
        slideNumber: 'c/t',

        transition: 'none',

        width: '100%',     // 16/10
        height: '100%',

        margin: 0,

        backgroundTransition: 'none',

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
                src: 'plugin/zoom-js/zoom.js',
                async: true
            },
            {
                src: 'plugin/notes/notes.js',
                async: true
            },
            //{
            //    src: 'lib/socket.io.js',
            //    async: true,
            //},
            //{
            //    src: 'plugin/notes-server/client.js',
            //    async: true,
            //},
        ]
    });



}());
