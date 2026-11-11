
(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b&&m){b.addEventListener('click',function(){
    var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);
    b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');});}
  var qs=document.querySelectorAll('.quiz .q');
  if(qs.length){
    var done=0,pts=0,out=document.getElementById('score');
    qs.forEach(function(q){
      var ans=q.getAttribute('data-answer');
      q.querySelectorAll('button.opt').forEach(function(btn){
        btn.addEventListener('click',function(){
          if(q.getAttribute('data-done'))return;
          q.setAttribute('data-done','1');
          var ok=btn.getAttribute('data-v')===ans;
          var fb=q.querySelector('.fb');
          fb.classList.add('show',ok?'right':'wrong');
          fb.innerHTML=(ok?'Correcto. ':'Não é bem assim. ')+q.getAttribute('data-explain');
          done++;if(ok)pts++;
          if(out)out.textContent='Pontuação: '+pts+' de '+qs.length+(done===qs.length?' – terminaste!':'');
        });
      });
    });
  }
  var rs=document.getElementById('reset');
  if(rs){rs.addEventListener('click',function(){location.reload();});}
})();
