//jquery 


$(document).ready(function () {
    // bouton de navigation pour mobile
    $('#menu-icon-open').click(function () {
        $(this).hide();
        $('#menu-icon-close').fadeIn(300)
        $('#main-menu-mobile').fadeIn(500)
    })

    $('#menu-icon-close').click(function () {
        $(this).hide();
        $('#menu-icon-open').fadeIn(300)
        $('#main-menu-mobile').fadeOut(500)
    })

})

//Js

//insertion des tiles

//liste des tiles
var tiles = [
    { "name": "mobile", "img": "fas fa-mobile-alt", "color": "rgb(36, 198, 160)" },
    { "name": "browser", "img": "fas fa-window-maximize", "color": "#de283c;" },
    { "name": "pencil", "img": "fas fa-pencil-alt", "color": "#54c432" }
]
var tiles2 = [
    { "name": "megaphone", "img": "fas fa-bullhorn", "color": "#9300bc" },
    { "name": "brush", "img": "fas fa-paint-brush", "color": "#faac00" },
    { "name": "video", "img": "fas fa-file-video", "color": "#575fec" }
]

//recuperation des tiles
function alltiles(array, id, revs = false) {
    codes = []

    for (let i = 0; i < array.length; i++) {
        secs = []

        var sec = '<section class="tile col-xs-6 col-sm-3 col-md-2">' +
            '<i style="color: ' + array[i].color + '" class="' + array[i].img + '"></i>' +
            '</section>'
        var sec2 = '<section style="background-color:' + array[i].color + ' " class="tile col-xs-6 col-sm-3 col-md-2">' +
            '<span>' + array[i].name + '<br>apps</span><div class="short-line-tile"></div>' +
            '</section> '
        secs = [sec, sec2]

        if (revs === true) {
            secs = secs.reverse()
        }

        codes.push(secs.join(" "))
    }

    document.getElementById(id).innerHTML = codes.join(" ")
}

//Affichage des tiles recuperer
alltiles(tiles, "tiles-lists")
alltiles(tiles2, "tiles-lists2", true)
