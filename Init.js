var cnv,ctx,dx,dy,w,lby;

function Init() {
  var nc=70,nl=50; // à adapter
  lby=new Laby(nc,nl);
  dx=12,dy=12,w=2; // à adapter
  cnv=document.getElementById('Cnv'),ctx=cnv.getContext('2d');
  cnv.width=nc*dx+2*w; cnv.height=nl*dy+2*w;
  ctx.transform(1,0,0,1,w,w);
  Click();
}
function Click() {lby.Explo(17); lby.Draw(ctx,dx,dy,w);}