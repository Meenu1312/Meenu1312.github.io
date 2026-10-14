// Gentle reveal on scroll. Without JS (or with reduced motion) everything stays visible.
(function(){
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.documentElement.classList.add('js');
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){o.observe(el)});
})();
