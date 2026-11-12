document.addEventListener('DOMContentLoaded',()=>{
 const f=document.getElementById('form-produto'),v=document.getElementById('voltagem');
 if(f&&v)f.addEventListener('submit',e=>{if(v.value==='220v'&&!confirm('Atenção: o frete terá acréscimo de R$ 15,00. Deseja continuar?'))e.preventDefault()});
 const p=document.getElementById('pagamento');
 if(p)p.addEventListener('submit',e=>{e.preventDefault();localStorage.setItem('pedidoDemo',JSON.stringify({pagamento:document.querySelector('[name=pay]:checked').value,endereco:document.getElementById('endereco').value,codigo:'BR'+Math.floor(100000000+Math.random()*900000000)}));location.href='pedidos.html'});
 const area=document.getElementById('pedido'),o=JSON.parse(localStorage.getItem('pedidoDemo')||'null');
 if(area&&o)area.innerHTML='<h2>Pedido confirmado</h2><p>Pagamento: '+o.pagamento+'</p><p>Entrega: '+o.endereco+'</p><p>Código: <strong>'+o.codigo+'</strong></p>';
});