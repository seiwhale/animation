// setProperty 浏览器可能不支持，请使用babel
document.getElementById('btn').onmousemove = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  
  e.target.style.setProperty('--x', `${ x }px`);
  e.target.style.setProperty('--y', `${ y }px`);
}
