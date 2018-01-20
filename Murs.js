Laby.prototype.Murs=function() {
  var e,l,c,m=0,nl=this.Nl,nc=this.Nc;
  for (l=1,e=0; l<nl; ++l)
    for (var c=0; c<nc; ++c) m+=this.Sud[e++];
  for (l=0,e=0; l<nl; ++l,++e)
    for (c=1; c<nc; ++c) m+=this.Est[e++];
  if (m!=(nc-1)*(nl-1)) alert('Murs incorrects: '+m);
}