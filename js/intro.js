
'use stric';

(function () {

    var e1 = document.querySelector('.js-baffle-1'),
        e2 = document.querySelector('.js-baffle-2');

    var characters = [
        "█", "▓", "▒", "░", "█", "▓", "▒", "░",
        "█", "▓", "▒", "░", "<", ">", "/"
    ];

    var bE1 = baffle(e1),
        bE2 = baffle(e2);

    [bE1, bE2].forEach(function (b) {
        b.set({
            characters: characters,
        });
    });

    var hide = function (elem) {
        elem.classList.add('hidden');
    };
    var show = function (elem) {
        elem.classList.remove('hidden');
    };

    var animate = function(elemShown, elemHidden) {
        show(elemShown.node);
        hide(elemHidden.node);

        elemShown.baffle.start();
        elemShown.baffle.reveal(5000);

        setTimeout(function () {
            animate(elemHidden, elemShown);
        }, 10000);
    };

    animate({ node: e1, baffle: bE1 }, { node: e2, baffle: bE2 });

}());
