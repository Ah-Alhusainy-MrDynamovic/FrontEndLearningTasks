const h1 = document.getElementById("test");

const myfunc = () => {
  const now = new Date();

  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = now.getUTCHours()+2;

  if (hour < 10) {
    hour = ` 0${hour}`;
  }

  if (min < 10) {
    min = ` 0${min}`;
  }
  if (sec < 10) {
    sec = ` 0${sec}`;
  }

  h1.innerHTML = `
    <span> ${hour}    </span>:
    <span> ${min}   </span>:
    <span> ${sec}   </span>
    
    `;
};

setInterval(myfunc, 1000);
