function playingSomeSound(genre){
    SC.get('/tracks',{
        genres:genre,
        bpm:{
            from:100
        }
    }, function(tracks){
        var random = Math.floor(Math.random()*49);
        SC.oEmbed(tracks[random].uri,{auto_play:true},document.getElementById('target'));
    
        
        });
    }

window.onload=function(){
    SC.initialize({
        client_id: "55aa4f5c9de01a3bfa0571c07c9ef9dd",
        
});
    var menuLinks = document.getElementsByClassName('genre');
    for(var i=0; i<menuLinks.length; i++){
        var menuLink = menuLinks[i];
        menuLink.onclick = function(e){
            e.preventDefault();
            playingSomeSound(menuLink.innerHTML);
        };
    };
};
