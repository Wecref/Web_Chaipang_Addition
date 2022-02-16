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

export function InitMenu(targets){
    for (var i = 0; i < targets.length; i++){
        targets[i].addEventListener("click", (event)=>{
            ClickCss(event, targets);

            if (event.target.dataset.href != null)
            {
                window.open("/".concat(event.target.dataset.href), "_self");
            }
        });
    }
    targets[0].classList.add("clicked");

}

export function InitLanguage(isKorea, targets) {
    if (isKorea)
    {
        targets[0].classList.add("clicked");
    } 
    else
    {
        targets[1].classList.add("clicked");
    }
    for (var i = 0; i < targets.length; i++){
        targets[i].addEventListener("click", (event)=>{
            ClickCss(event, targets);

            
        })
    }
}