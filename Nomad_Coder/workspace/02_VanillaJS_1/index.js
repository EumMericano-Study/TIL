// DOM if else

const title = document.querySelector("#title")

// **  css의 요소는 css에서 다루고     **
// **  js 요소는 js에서만 다루도록 수정 **

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*
    // 클래스를 바꿔주면 기존의 클래스도 삭제된다.
    // 하여 기존의 커서를 pointer로 바꾸는 css도 반영되지 않는데.
    // classList 를 통해
    // class를 변경하지않고 추가하는 방법으로 제어하는게
    // 섹시하다.
    const currentClasses = title.classList;
    if(currentClasses.contains(CLICKED_CLASS)){
        title.classList.remove(CLICKED_CLASS)
    }else{
        title.classList.add(CLICKED_CLASS)
    }
    */
    // 위의 기능은 toggle이다. 한번에 하는게 더 섹시하다.
    // toggle은 해당 객체에 매개변수가 존재하면 add하고
    // 존재하지 않으면 remove 시킨다.
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    title.addEventListener("click", handleClick);
}

init();
