Labyrinthes: 2-Exploration exhaustive-------------------------------------
Url     : http://codes-sources.commentcamarche.net/source/101810-labyrinthes-2-exploration-exhaustiveAuteur  : William VOIROLDate    : 14/01/2017
Licence :
=========

Ce document intitul� � Labyrinthes: 2-Exploration exhaustive � issu de CommentCaMarche
(codes-sources.commentcamarche.net) est mis � disposition sous les termes de
la licence Creative Commons. Vous pouvez copier, modifier des copies de cette
source, dans les conditions fix�es par la licence, tant que cette note
appara�t clairement.

Description :
=============

Bonjour,
<br />
<br />La génération de labyrinthes parfaits (ni boucles ni i
lots) peut se faire rapidement avec l'algorithme d'exploration exhaustive.
<br 
/>
<br />Il génère moins de bifurcations que &quot;1-Fusion aléatoire de che
mins&quot;.
<br />Les tronçons (entre bifurcations) seront donc plus longs.
<
br />
<br /><b>Description de la méthode</b>:
<br />a) Au début, tous les mu
rs intérieurs sont présents (est.fill(1); sud.fill(1);)
<br />b) On initialis
e à non visité (unused) un array sur tous les éléments (U.fill(1);).
<br />
c) L'élément de départ e est marqué used (U[e]=0;) et mis dans la pile (P[0]
=e;).
<br />d) Tant qu'il y a des éléments dans la pile:
<br />d1) Pour la c
ellule <b>e</b>, on compte le nombre <b>nv</b> de voisins non visités.
<br />d
10) Si nv=0, on est arrivé à une impasse: on recule dans la pile.
<br />d11) 
Si nv=1, on abat le mur et on remplace <b>e</b> par le voisin <b>v</b>.
<br />d
12) Si nv&gt;1, on choisit au hasard un voisin <b>v</b>, on abat le mur et on em
pile <b>e=v</b>.
<br /> . . . [pour d11) et d12), on marque aussi <b>v</b> comm
e visité]
<br />
<br />Dans le code du fichier <b>Explo.js</b>, la pile <b>P<
/b> est gérée explicitement:
<br /><pre class="code" data-mode="js">
Laby.pro
totype.Explo=function(e) {
  var nc=this.Nc,nl=this.Nl,ne=nc*nl,sud=this.Sud,est
=this.Est;
  var K=[],p=0,P=new Uint32Array(ne),U=new Uint8Array(ne);

  est.fil
l(1); sud.fill(1); U.fill(1); U[e]=0; P[0]=e; // init
  do {
    var nv=0,l=Math
.floor(e/nc),c=e-l*nc;
    if (c && U[e- 1]) K[nv++]=0; // ◄
    if ((c&lt;nc-
1) && U[e+ 1]) K[nv++]=1; // ►
    if (l && U[e-nc]) K[nv++]=2; // ▲
    if 
((l&lt;nl-1) && U[e+nc]) K[nv++]=3; // ▼
    if (nv==0) {if (p) {e=P[--p]; con
tinue;} else return;} // cul-de-sac
    var r=K[(nv==1)?0:Math.floor(nv*Math.ran
dom())]; // choix: ◄,►,▲,▼
    if (r&lt;2) {if (r) {est[e]=0; U[e+= 1]=0
;} else est[e-= 1]=U[e]=0;}
    else   {if (r&gt;2) {sud[e]=0; U[e+=nc]=0;} else
 sud[e-=nc]=U[e]=0;}
    if (nv==1) P[p]=e; else P[++p]=e;
  } while (p&gt;=0);

} // William VOIROL, Switzerland, Dec 2016</pre>On pourrait éviter la gestion d
e la pile en utilisant une fonction récursive.
<br />
<br />Double-cliquez su
r <b>Explo.html</b> pour voir instantanément des labyrinthes parfaits.
<br />

<br />Le programme <b>TimeExplo.html</b> montre quelques temps d'exécution:
<
br /><pre class="code" data-mode="js">
Labyrinthes: 2-Exploration exhaustive: Ti
mes

4x4 = 16, time = 0 ms.
8x4 = 32, time = 0 ms.
8x8 = 64, time = 1 ms.
16x8 =
 128, time = 0 ms.
16x16 = 256, time = 1 ms.
32x16 = 512, time = 1 ms.
32x32 = 1
024, time = 1 ms.
64x32 = 2048, time = 0 ms.
64x64 = 4096, time = 0 ms.
128x64 =
 8192, time = 1 ms.
128x128 = 16384, time = 4 ms.
256x128 = 32768, time = 3 ms.

256x256 = 65536, time = 8 ms.
512x256 = 131072, time = 11 ms.
512x512 = 262144, 
time = 20 ms.
1024x512 = 524288, time = 32 ms.
1024x1024 = 1048576, time = 63 ms
.
2048x1024 = 2097152, time = 127 ms.
2048x2048 = 4194304, time = 247 ms.
4096x2
048 = 8388608, time = 487 ms.
4096x4096 = 16777216, time = 973 ms.
8192x4096 = 3
3554432, time = 1972 ms.</pre>Le temps de calcul est à peu près proportionnel 
au nombre d'éléments.
<br />
<br />Mon laptop I7/2.5GHz peut donc générer 
en moins d'une seconde un labyrinthe parfait avec 16 millions de cellules !
<br
 />
<br /><b>Liens</b>:
<br /><a href='http://codes-sources.commentcamarche.ne
t/source/101792-labyrinthes-0-bases-et-affichage'>CodeS-SourceS: Labyrinthes: 0-
Bases et affichage</a>
<br /><a href='http://codes-sources.commentcamarche.net/
source/101800-labyrinthes-1-fusion-aleatoire-de-chemins'>CodeS-SourceS:  Labyrin
thes: 1-Fusion aléatoire de chemins</a>
<br />
<br /><b>Prochains articles</b
>:
<br />- Labyrinthes: 3-Algorithme randomisé de Prim
<br />- Labyrinthes: ?
-Recursive division method
<br />- ...
<br />- Labyrinthes: ?-Représentation 
en arbre
<br />- Labyrinthes: ?-Recherche de chemin
<br />- ...
<br />
<br /
>Bonne lecture ...
