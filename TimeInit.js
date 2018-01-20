function Init() {
  var t,T,z='<h3>Labyrinthes: 2-Exploration exhaustive: Times</h3>';
  for (var n=0,c=4,l=4; n<=21; ++n) {
    var lby=new Laby(c,l),m;
    t=new Date().getTime(); lby.Explo(7); T=new Date().getTime();
    z+=c+'x'+l+' = '+(c*l)+', time = '+(T-t)+' ms.<br>';
    lby.Murs();
    if (n&1) l*=2; else c*=2;
  }
  document.body.innerHTML=z;
}