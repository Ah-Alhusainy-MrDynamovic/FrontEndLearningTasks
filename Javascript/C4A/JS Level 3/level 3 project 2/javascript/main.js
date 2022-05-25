// level3 lesson3 vide0 #1
// setInterval VS setTimeout

// let i = 1;
// const testFun = () => {
//   website.innerText = i;
//   i++;
// };

// const stopFun = setInterval(testFun, 1000);

// sec.addEventListener("click", (eo) => {
//   clearInterval(stopFun);
// });


// level3 lesson3 vide0 #2
//  JavaScript Auto writing Task

// let counter = 1;
// const autoWriting = () => {
//   const title = "Courses4Arab";
//   website.innerText = title.slice(0, counter);
//
//   counter++;
//
//   if (title.length < counter) {
//     counter = 1;
//   }
// };
//
// const stopAutoFun = setInterval(autoWriting, 300);

let i = 1
const hasonaWriting = () => {
  const text = " GIS Over-Flow , Courses4Arab "
  website.innerText = text.slice(0, i)
  i++
  if (text.length < i) {
    // clearInterval(stopFunc)
    i = 1;
  }
}
const stopFunc = setInterval(hasonaWriting, 300);









// =======================================================================

// level3 lesson4 video #2
// random youtube videos from Array

let video= 0;
randomvideo.addEventListener("click", (eo) => {
    const videoArr = [
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/rC6blQtakzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/tZLDEUFtnX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/8x4E8kzYNSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/10wsbG9IsAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/ZJknc9iqiYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/nceUSuYjNXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Ckj9V74HrY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        `<iframe id="myiframe" width="560" height="315" src="https://www.youtube.com/embed/Cbk980jV7Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    ];

    // containeriframe.innerHTML =  videoArr[Math.floor(Math.random() * videoArr.length  )]

    containeriframe.innerHTML = videoArr[video];
    video++;

    if (video == videoArr.length) {
        video = 0;
    }
});




// level3 lesson4 video #3
// random quotes videos from Array

let index = 0;
randomquote.addEventListener("click", (eo) => {
	randomHeart()
    const quoteArr = [

        `<blockquote lang="ar" dir="rtl" class="sidekick">
    لا تُبرر أخطائك بل إجلطهم بالمزيد
    &#128127; &#128514;
    <br>
    <cite>    شخص عادى </cite>
  </blockquote> `,




        `<blockquote lang="ar" dir="rtl" class="sidekick">
  لا تتعلق بأحد فالناس ليست أشجاراً وانت لست قرداً
  &#128514;
  
  <br>
  <cite>  انسان مجروح  </cite>
</blockquote> `,



        `<blockquote lang="ar" dir="rtl" class="sidekick">

الحياة ليست سباق  ف إهدى كده و relax  يا صاحبى
&#128526;

<br>
<cite> شخص رايق  </cite>
</blockquote> `,





        `<blockquote lang="ar" dir="rtl" class="sidekick">

الحياة إما مغامرة جريئة أو لا شي
&#129505; &#128170;
<br>
<cite> شخص مغامر </cite>
</blockquote> `,



        `<blockquote lang="ar" dir="rtl" class="sidekick">
اللى ملوش قلب ملوش رزق
&#129505; &#128170;
<br>
<cite> شخص شجاع</cite>
</blockquote> `,






        `<blockquote lang="ar" dir="rtl" class="sidekick">
الثقة بالنفس تصنع المُعجزات
&#128521;
<br>
<cite>   شخص عارف قيمة نفسة  </cite>
</blockquote> `,
        

        
        `<blockquote lang="ar" dir="rtl" class="sidekick">
انت مش بطل العالم في الاحزان , انت ولا حاجة فوق لنفسك وعيش  عيشة اهلك 
&#128521;
<br>
<cite>  حسونة </cite>
</blockquote> ` ,
        
        
        
        `<blockquote lang="ar" dir="rtl" class="sidekick">
مهما كان حزنك فهو هيكون اصعب لو نسيت ان دوام الحال من المحال , وفي اختلاف الليل والنهار لايات  لأولي الالباب
&#128521;
<br>
<cite>   أحمد طارق الحسيني   </cite>
</blockquote> `





    ];

    // containeriframe.innerHTML =  videoArr[Math.floor(Math.random() * videoArr.length  )]

    parentquote.innerHTML = quoteArr[index];
    index++;

    if (index == quoteArr.length) {
        index = 0;
    }
});

// Congratulation Heart section
// Variables
const randomHearts= document.getElementById("randomhearts")
const containerHeart= document.getElementById("containerheart")

// Functions
const randomHeart = () => {
	const parentHeart= document.createElement("div")
	containerHeart.append(parentHeart)
	
	
{	const createRandomHeart= setInterval(() => {
		const heart= document.createElement("div")
		heart.classList.add("heart")
		heart.innerHTML= "&#129505;"
		heart.style.left=`${Math.random()*100}%`
		heart.style.animationDuration=`${(Math.random()+0.5)*1.5}s   `
		parentHeart.append(heart)	
	}, 20);	}
	
	{	const createRandomHeart= setInterval(() => {
		const heart2= document.createElement("div")
		heart2.classList.add("heart")
		heart2.innerHTML= "&#128156; &#128159;"
		heart2.style.left=`${Math.random()*100}%`
		heart2.style.animationDuration=`${(Math.random()+0.5)*1.5}s   `
		parentHeart.append(heart2)	
	}, 20);	}
	{	const createRandomHeart= setInterval(() => {
		const heart3= document.createElement("div")
		heart3.classList.add("heart")
		heart3.innerHTML= "&#128159;"
		heart3.style.left=`${Math.random()*100}%`
		heart3.style.animationDuration=`${(Math.random()+0.5)*1.5}s   `
		parentHeart.append(heart3)	
	}, 20);	}
	setTimeout(() => {
		clearInterval(createRandomHeart)
	}, 3000);
	
	setTimeout(() => {
		parentHeart.remove()
	}, 4000);
}
randomHearts.addEventListener("click",(eo) => {
	randomHeart()
})



// Accoding section

const plusList= document.querySelectorAll(".plus")

plusList.forEach(plus => {
	plus.addEventListener("click", (eo) => {
		
		const content= eo.target.parentElement.parentElement.getElementsByClassName("content")[0]
		content.classList.toggle("activecontent")
		if (content.classList.contains("activecontent")) {
			content.style.height= ` ${content.scrollHeight}px `
			eo.target.innerHTML=`-`
		}
		else {
			eo.target.innerHTML=`+`
			content.style.height= `0px`
			
		}
	// content.style.display="none"	
	

	})
	
});


// Digital CLock Section

const digitalClock = () => {
	let now= new Date();
	let sec= now.getSeconds()
	let min= now.getMinutes()
	let hours= now.getHours()
	let date2= now.getDay()
	let date= now.toDateString()
	let pmAm= "PM"
	
	//  Clock Formatting Check
{	if (hours> 12) {
		hours=hours-12	
		
	}
	else { 
		pmAm="AM"
	}
	if (hours==0) {
		hours="12"
		
	}
	if (min<10) {
		min=`0${min}`
		
	}
	if (sec<10) {
		sec=`0${sec}`
		
	}
	}
	
	const clock= `
				<div class="date">
				${date} 
				</div>
				<div class="time">
					
					${hours} : ${min} : ${sec} ${pmAm}
				</div>
				
	`
	clockcontainer.innerHTML= clock
	
}
setInterval(() => {
	digitalClock()
}, 1000);




// Slider Section
let arrImgIndex= 0
const arrImg= [
	`<img src="img/0.png" alt="" class="img-slider">`,
	`<img src="img/1.png" alt="" class="img-slider">`,
	`<img src="img/2.png" alt="" class="img-slider">`,
	`<img src="img/3.png" alt="" class="img-slider">`,
	`<img src="img/4.png" alt="" class="img-slider">`,
	`<img src="img/5.png" alt="" class="img-slider">`,
	`<img src="img/6.png" alt="" class="img-slider">`,
	`<img src="img/7.png" alt="" class="img-slider">`,
	`<img src="img/8.png" alt="" class="img-slider">`,
	`<img src="img/9.png" alt="" class="img-slider">`,
	`<img src="img/10.png" alt="" class="img-slider">`
]
sildercontainer.innerHTML+= arrImg[arrImgIndex]
sildercontainer.innerHTML+= `<p> Slide #${arrImgIndex+1} of ${arrImg.length} </p>`
pre.setAttribute("disabled","")
next.addEventListener("click", (eo) => {
	
	pre.removeAttribute("disabled")
	arrImgIndex++
	sildercontainer.innerHTML+= arrImg[arrImgIndex]
	sildercontainer.innerHTML+= `<p> Slide #${arrImgIndex+1} of ${arrImg.length} </p>`
	if (arrImgIndex == arrImg.length-1) {
next.setAttribute("disabled","")
	}
	
	// remove for active number and class for ccurrent item => add active to target elemnt of click
	parentNumber.getElementsByClassName("active-num")[0].classList.remove("active-num")
	parentNumber.getElementsByTagName("button")[arrImgIndex].classList.add("active-num")
	
		
	
})

pre.addEventListener ("click", (eo) => {
	next.removeAttribute("disabled")
	arrImgIndex	
	sildercontainer.innerHTML+= `<p> Slide #${arrImgIndex} of ${arrImg.length} </p>`
	sildercontainer.innerHTML+= arrImg[arrImgIndex]
	arrImgIndex--
	if (arrImgIndex == 0) {
pre.setAttribute("disabled","")
		
	}
		// remove for active number and class for ccurrent item => add active to target elemnt of click
		parentNumber.getElementsByClassName("active-num")[0].classList.remove("active-num")
		parentNumber.getElementsByTagName("button")[arrImgIndex].classList.add("active-num")
		
			
	
	
})
 const allButtons= document.querySelectorAll(".mynumber")
 const parentNumber= document.getElementsByClassName("numbers")[0]
 console.log('allButtons: ', allButtons);
 
 allButtons.forEach((btn,index) => {
	 btn.addEventListener("click", (eo) => {
		//  uncomment my method 1
// {
// 	for (let i of allButtons) {
// 		if ( i.classList.contains("active-num")) {
// 			i.classList.remove("active-num")
// 		}
// 	}
// 	 btn.classList.add("active-num")
// 	 let btnValue= btn.innerText
// 	 console.log('btnValue: ', btnValue);
// 	 sildercontainer.innerHTML+= `<p> Slide #${btnValue} of ${arrImg.length} </p>`
// 	 sildercontainer.innerHTML+= arrImg[btnValue]
// }

// remove for active number and class for ccurrent item => add active to target elemnt of click
parentNumber.getElementsByClassName("active-num")[0].classList.remove("active-num")
btn.classList.add("active-num")


sildercontainer.innerHTML+= arrImg[index]
sildercontainer.innerHTML+= `<p> Slide #${index+1} of ${arrImg.length} </p>`
// we notice when we press on next btn , it always starts at i= 0 , 
// we need to modifiy this enable next btn whenever pressing on btnS of numbers [1,2,3,4,5]

arrImgIndex=index
// last index
	if (index==arrImg.length-1) {
		next.setAttribute("disabled","")
		pre.removeAttribute("disabled")
	}
	// First index
	else if ( index== 0   )	{
		pre.setAttribute("disabled","")
		next.removeAttribute("disabled")
		
	}
	// between first and last 
	else {
		next.removeAttribute("disabled")
		pre.removeAttribute("disabled")
		
		
	}
	 })
 });
 
//  Toggle Tabs 
const alltabs = document.querySelectorAll(".mybtn:not(#createacccount)")
const parentOfButtons = document.querySelector(".alltabs")
const parentOfArticles = document.querySelector(".parent-of-article")



alltabs.forEach(   (item, index) => {

    
    item.addEventListener("click", (eo) => {
       

          // toggle between buttons
        parentOfButtons.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
        eo.target.classList.add("active-btn")
        // toggle between articles
        parentOfArticles.getElementsByClassName("active-article")[0].classList.remove("active-article")
        parentOfArticles.getElementsByClassName("fun-facts")[index].classList.add("active-article")
		let parentarticleHeight= parentOfArticles.getElementsByClassName("fun-facts")[index].parentElement
		let articleHeight= parentOfArticles.getElementsByClassName("fun-facts")[index]
		console.log('articleHeight: ', articleHeight);
		parentarticleHeight.style.height=` ${articleHeight.scrollHeight}px `

	})
});
// Form Validation 


const activeReg = () => {
	
if (username.classList.contains("success") && email.classList.contains("success") && psw.classList.contains("success") && pswrepeat.classList.contains("success") ) {
	regbtn.removeAttribute("disabled")
}
else {
	regbtn.setAttribute("disabled")
}
}

username.addEventListener("keyup",(eo) => {
	username.classList.add("error")
	usermessage.style.display="block"
	if (username.value.length >= 3) {
	// username.classList.remove("error")
	username.classList.add("success")
	usermessage.style.display="none"
	username.nextElementSibling.style.opacity="1"
	}
	else {
	username.classList.remove("success")
	username.nextElementSibling.style.opacity="0"
	usermessage.style.display="block"
	}
	activeReg()
})

email.addEventListener("keyup", (eo) => {
	email.classList.add("error")
	emailmessage.style.display="block"
	const regEmail=
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	console.log(regEmail.test(email.value))
	if (regEmail.test(email.value)) {
		email.classList.add("success")
	emailmessage.style.display="none"
	email.nextElementSibling.style.opacity="1"
	}
	else {
		email.classList.remove("success")
		emailmessage.style.display="block"
		email.nextElementSibling.style.opacity="0"
	}
	
	activeReg()
})
// repeatPasswordMessage
// "psw-repeat
psw.addEventListener("keyup",(eo) => {
	psw.classList.add("error")
	passwordMessage.style.display="block"
	const regPassword=
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	if (regPassword.test(psw.value)) {
		psw.classList.add("success")
		passwordMessage.style.display="none"
		psw.nextElementSibling.style.opacity="1"
	}
	else {
		
		psw.classList.remove("success")
		passwordMessage.style.display="block"
		psw.nextElementSibling.style.opacity="0"
	}
	activeReg()
})
pswrepeat.addEventListener("keyup",(eo) => {
	pswrepeat.classList.add("error")
	repeatPasswordMessage.style.display="block"
	if (pswrepeat.value === psw.value ) {
		pswrepeat.classList.add("success")
		repeatPasswordMessage.style.display="none"
		pswrepeat.nextElementSibling.style.opacity="1"
	} 
	else {
		pswrepeat.classList.remove("success")
		repeatPasswordMessage.style.display="block"
		pswrepeat.nextElementSibling.style.opacity="0"
		
	}
	
	activeReg()
	
})


// When clikd on Btn to change style of parent- of form , container
// zoom effect 
createacccount.addEventListener("click",    (eo) => {
	parentofform.style.display="flex"
		setTimeout(() => {
	form.style.transform="scale(1)"
			
		}, 30);	
	
} )
const close=document.getElementById("close")
close.addEventListener("click",   (eo) => {
	setTimeout(() => {
		parentofform.style.display="none"	
	}, 400);
	form.style.transform="scale(0)"
	
	
	
})


// HasonaStrap 
const allCopybtns= document.querySelectorAll(".copy")
console.log('allCopybtns: ', allCopybtns);

allCopybtns.forEach(btn => {
	btn.addEventListener("click",(eo) => {
		btn.innerText= "Copied!"
	navigator.clipboard.writeText( btn.nextElementSibling.innerText  )
	setTimeout(() => {
		btn.innerText= "Copy"
		
	}, 1000);
		
	})

});
		


