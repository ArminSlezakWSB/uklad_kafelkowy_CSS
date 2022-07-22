window.onload=layout();

function layout()
{
  header=["strony bankowe", "serwisy społecznościowe", "poczta elektroniczna", "filmy", "sklepy internetowe", "sztuki walki", "elektronika", "nauka", "zawód", "transport"]
  var divesId = [];
  divesId[0] = ["cradit-agiricole", "ipko",];
  divesId[1] = ["nk", "fb", "twitt", "insta", "snap", "gg"];
  divesId[2] = ["wp", "interia", "onet"];
  divesId[3] = ["yt", "cda", "zalukaj"];
  divesId[4] = ["karate-kyokushin", "krav-maga", "aikido"];
  divesId[5] = ["ceneo", "allegro", "empik"];
  divesId[6] = ["media-markt", "saturn"];
  divesId[7] = ["ezn"];
  divesId[8] = ["egzamin-informatyk", "w3schools"];
  divesId[9] = ["polbus", "tarnowscy"];

  var divesStyleBg = [];
  divesStyleBg[0] = ["ca.jpg", "pko.png"];
  divesStyleBg[1] = ["nk.jpg", "fb.png", "tw.png", "insta1.png", "snap.png ", "gg.png"];
  divesStyleBg[2] = ["wp.png", "interia.png", "onet.jpg"];
  divesStyleBg[3] = ["yt.jpg", "cda.jpg", "zalukaj.jpg"];
  divesStyleBg[4] = ["ceneo.png", "allegro.png", "empik.jpg"];
  divesStyleBg[5] = ["karate.png", "km.jpg", "aikido.jpg"];
  divesStyleBg[6] = ["mm.jpg", "saturn.jpg"];
  divesStyleBg[7] = ["ezn.png"];
  divesStyleBg[8] = ["", "w3s.png"];
  divesStyleBg[9] = ["polbus.jpg", "tarnowscy.png"];

  var divesLink = [];
  divesLink[0] = ["www.credit-agricole.pl", "www.ipko.pl"];
  divesLink[1] = ["nk.pl", "pl-pl.facebook.com", "twitter.com/?lang=pl", "instagram.com", "snapchat.com", "gg.pl"];
  divesLink[2] = ["www.wp.pl", "www.interia.pl", "www.onet.pl"];
  divesLink[3] = ["www.youtube.com", "www.cda.pl", "zalukaj.com"];
  divesLink[4] = ["www.cene.pl", "allegro.pl", "www.empik.com"];
  divesLink[5] = ["www.karate-wroclaw.pl", "www.kravmaga.wroclaw.pl", "www.wroclawaikikai.pl/"];
  divesLink[6] = ["mediamarkt.pl", "saturn.pl"];
  divesLink[7] = ["archiwum.ezn.edu.pl"];
  divesLink[8] = ["egzamin-informatyk.pl", "www.w3schools.com"];
  divesLink[9] = ["polbus.pl", "www.tarnowscy.pl"];


  var divesSize = [];
  divesSize[0] = ["125", "150"];
  divesSize[1] = ["130", "140", "60", "", "125", ""];
  divesSize[2] = ["100", "", "100"];
  divesSize[3] = ["135", "", "110"];
  divesSize[4] = ["100", "", ""];
  divesSize[5] = ["60", "80", "80"];
  divesSize[6] = ["100", ""];
  divesSize[7] = ["105",];
  divesSize[8] = ["100", "95"];
  divesSize[9] = ["100", "110"];

  var divesRepeat = [];
  divesRepeat[0] = [""];
  divesRepeat[1] = ["no-", "no-", "no-"];
  divesRepeat[2] = ["", "", "no-"];
  divesRepeat[3] = ["", "no-"];
  divesRepeat[4] = [""];
  divesRepeat[5] = ["no-", "no-", "no-"];
  divesRepeat[6] = [""];
  divesRepeat[7] = [""];
  divesRepeat[8] = ["", "no-"];
  divesRepeat[9] = ["", "no-"];

  var divesColor = [];
  divesColor[0] = [""];
  divesColor[1] = ["", "3b5998", "0cb9ee", "", "", "fff"];
  divesColor[2] = ["no-", "fff", "fff"];
  divesColor[3] = ["", "b5410c"];
  divesColor[4] = ["fff", "000", "fff"];
  divesColor[5] = ["fff", "000", "fff"];
  divesColor[6] = [""];
  divesColor[7] = [""];
  divesColor[8] = ["", "fff"];
  divesColor[9] = ["", "fff"];

  var divesTitle = [];
  divesTitle[0] = ["credit agiricole", "ipko - bank polski",];
  divesTitle[1] = ["nasza klasa", "facebook", "twitter", "instagram", "snapchat", "gadu gadu"];
  divesTitle[2] = ["wirtualna polska", "interia", "onet"];
  divesTitle[3] = ["you tube", "cda", "zalukaj"];
  divesTitle[4] = ["ceneo", "allegro", "empik"];
  divesTitle[5] = ["karate kyokushin wrocław", "krav maga wrocław", "aikido wrocław - klub aikikai"];
  divesTitle[6] = ["media markt", "saturn"];
  divesTitle[7] = ["elektroniczne zakłady naukowe"];
  divesTitle[8] = ["egzamin informatyk", "w3schools"];
  divesTitle[9] = ["polbus", "tarnowscy taxi bus"];

  var text=" ";
  for(i=0; i<10; i++)
  {
    text = text + '<section><header id="header'+i+'">'+header[i]+'<div class="triangle"></div></header><article id="article'+i+'">';
    for(j=0; j<divesId[i].length; j++)
    {
      text+= '<a href="http://'+divesLink[i][j]+'" target="_blank"><div id="'+divesId[i][j]+'" class="dives" style="background-image: url(img/'+divesStyleBg[i][j]+'); background-size:'+divesSize[i][j]+'%; background-repeat:'+divesRepeat[i][j]+'repeat; background-color:#'+divesColor[i][j]+';"><div class="title">'+divesTitle[i][j]+'</div></div></a>' ;
    };
    text = text + '</article></section>';
  }
  document.getElementById("main").innerHTML = text;

  $(document).ready(function()
  {
    $("article").hide();
      var show = true;

  $("#header0").click(function()
  {
          $("#article0").show(1000);
      
  });
  $("#header0").dblclick(function()
  {
    $("#article0").hide(1000);
  });

  $("#header1").click(function()
  {
    $("#article1").show(1000);
  });
  $("#header1").dblclick(function()
  {
    $("#article1").hide(1000);
  });

  $("#header2").click(function()
  {
    $("#article2").show(1000);
  });
  $("#header2").dblclick(function()
  {
    $("#article2").hide(1000);
  });

  $("#header3").click(function()
  {
    $("#article3").show(1000);
  });
  $("#header3").dblclick(function()
  {
    $("#article3").hide(1000);
  });

  $("#header4").click(function()
  {
    $("#article4").show(1000);
  });
  $("#header4").dblclick(function()
  {
    $("#article4").hide(1000);
  });

  $("#header5").click(function()
  {
    $("#article5").show(1000);
  });
  $("#header5").dblclick(function()
  {
    $("#article5").hide(1000);
  });

  $("#header6").click(function()
  {
    $("#article6").show(1000);
  });
  $("#header6").dblclick(function()
  {
    $("#article6").hide(1000);
  });

  $("#header7").click(function()
  {
    $("#article7").show(1000);
  });
  $("#header7").dblclick(function()
  {
    $("#article7").hide(1000);
  });

  $("#header8").click(function()
  {
    $("#article8").show(1000);
  });
  $("#header8").dblclick(function()
  {
    $("#article8").hide(1000);
  });
  $("#header9").click(function()
{
  $("#article9").show(1000);
});
  $("#header9").dblclick(function()
{
  $("#article9").hide(1000);
});
});
}
