function ClickCss(event, targets){
    // console.log(event.target);
    // console.log(event.target.classList);
    // console.log(event.target.dataset.href);
    // console.log(event.target.innerText);    
    if (event.target.classList[1] === "clicked") 
    {
        event.target.classList.remove("clicked");
    }  
    else 
    {
        for (var i = 0; i < targets.length; i++) {
            targets[i].classList.remove("clicked");
        }
        event.target.classList.add("clicked");
    }
}
function OpenMenu(event){

}

export function InitMenu(targets){
    for (var i = 0; i < targets.length; i++){
        targets[i].addEventListener("click", (event)=>{
            ClickCss(event, targets);

            if (event.target.dataset.href != null)
            {
                // window.open("/".concat(event.target.dataset.href), "_self");
                window.open("".concat(event.target.dataset.href), "_self");
            }
        });
    }
    targets[0].classList.add("clicked");

}

export function InitLanguage(isKorea, targets) {
    // isKorea = false;
    if (isKorea)
    {
        targets[0].classList.add("clicked");
        // window.location.replace("korea.html");
    } 
    else
    {
        targets[1].classList.add("clicked");
        // window.location.replace("english.html");
    }

    for (var i = 0; i < targets.length; i++){
        targets[i].addEventListener("click", (event)=>{
            ClickCss(event, targets);

            
        })
    }
}

export function InitMenuIcon(icon, layout){
    icon.addEventListener("click", (event) => {
        layout.classList.toggle("active");
    });
}