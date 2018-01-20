Laby.prototype.Explo=function(e) {
  var nc=this.Nc,nl=this.Nl,ne=nc*nl,sud=this.Sud,est=this.Est;
  var K=[],p=0,P=new Uint32Array(ne),U=new Uint8Array(ne);

  est.fill(1); sud.fill(1); U.fill(1); U[e]=0; P[0]=e; // init
  do {
    var nv=0,l=Math.floor(e/nc),c=e-l*nc;
    if (c && U[e- 1]) K[nv++]=0; // ◄
    if ((c<nc-1) && U[e+ 1]) K[nv++]=1; // ►
    if (l && U[e-nc]) K[nv++]=2; // ▲
    if ((l<nl-1) && U[e+nc]) K[nv++]=3; // ▼
    if (nv==0) {if (p) {e=P[--p]; continue;} else return;} // cul-de-sac
    var r=K[(nv==1)?0:Math.floor(nv*Math.random())]; // choix: ◄,►,▲,▼
    if (r<2) {if (r) {est[e]=0; U[e+= 1]=0;} else est[e-= 1]=U[e]=0;}
    else   {if (r>2) {sud[e]=0; U[e+=nc]=0;} else sud[e-=nc]=U[e]=0;}
    if (nv==1) P[p]=e; else P[++p]=e;
  } while (p>=0);
} // William VOIROL, Switzerland, Dec 2016