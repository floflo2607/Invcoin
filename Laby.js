var Laby=function(nc,nl) { // objet labyrinthe
  this.Nc=nc; // nombre de colonnes
  this.Nl=nl; // nombre de lignes
  this.Sud=new Uint8Array(nc*nl); // murs intérieurs horizontaux
  this.Est=new Uint8Array(nc*nl); // murs intérieurs verticaux
}