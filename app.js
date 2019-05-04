document.addEventListener('DOMContentLoaded', function() {
  // console.log(document.querySelectorAll('[bag="first-bag"]'));
  setTimeout(() => {
    init();

  })
});

const init = () => {
  const bags = document.querySelectorAll('[bag="first-bag"]');
  
  const dragstartEvent = () => console.log('start')
  const dragoverEvent = () => console.log('dragover')
  const cancel = e => e.preventDefault()
  const dropEvent = (e) => { e.preventDefault(); console.log('drop') }
  bags.forEach(b => b.addEventListener('dragstart', dragstartEvent));
  // bags.forEach(b => b.addEventListener('dragover', dragoverEvent));
  bags.forEach(b => b.addEventListener('dragover', cancel));
  bags.forEach(b => b.addEventListener('drop', dropEvent));

};


// TODO: drop 이벤트 안되는것 부터 시작
// DROP Should be canceld on dragoevr
// https://stackoverflow.com/questions/21339924/drop-event-not-firing-in-chrome
  // prevent default to allow drop