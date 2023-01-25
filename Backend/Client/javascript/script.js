play = () =>{
    
    let boxes = document.getElementsByClassName("selectable");
    let win = document.querySelector("#win");
    let c_info = document.querySelector("#c_play");
    let reset = document.querySelector("#reset");
    let b1 = document.querySelector(".box2");
    let b2 = document.querySelector(".box3");
    let b3 = document.querySelector(".box4");
    let b4 = document.querySelector(".box5");
    let b5 = document.querySelector(".box6");
    let b6 = document.querySelector(".box7");
    let b7 = document.querySelector(".box8");
    let b8 = document.querySelector(".box9");
    let b9 = document.querySelector(".box10");

    let n_boxes = Array.from(boxes);

    n_boxes.forEach(function(box){
        box.addEventListener("click", ()=>{
            let b = box.querySelector("h2");
            console.log(box.classList.contains("active"));
            if(c_info.innerText==="1" && b.innerText === "" && box.classList.contains("active")){
                b.innerText = "X";
                c_info.innerText = "2";
            } 
            if(c_info.innerText === "2" && b.innerText === "" && box.classList.contains("active") ){
                b.innerText = "O";
                b.classList.add("wrap");
                c_info.innerText = "1";
            }
            if(c_info.innerText === "1" && b.innerText === "X" && box.classList.contains("active")){
                return;
            }
            if(c_info.innerText === "2" && b.innerText === "O" && box.classList.contains("active")){
                return;
            }
        })
    })

    //Diagonal left-1
    if(b1.querySelector("h2").innerText==="X" && b5.querySelector("h2").innerText==="X" && b9.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1"; 
        b2.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }
    if(b1.querySelector("h2").innerText==="O" && b5.querySelector("h2").innerText==="O" && b9.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2";
        b2.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }

    //Column 1
    if(b1.querySelector("h2").innerText==="X" && b2.querySelector("h2").innerText==="X" && b3.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1";
        b4.classList.remove("active");
        b5.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }
    
    if (b1.querySelector("h2").innerText==="O" && b2.querySelector("h2").innerText==="O" && b3.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2"; 
        b4.classList.remove("active");
        b5.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }

    //Row 1
    if(b1.querySelector("h2").innerText==="X" && b6.querySelector("h2").innerText==="X" && b7.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1";
        b2.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b5.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }
    
    if (b1.querySelector("h2").innerText==="O" && b6.querySelector("h2").innerText==="O" && b7.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2"; 
        b2.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b5.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }

    //Column 2
    if(b4.querySelector("h2").innerText==="X" && b5.querySelector("h2").innerText==="X" && b6.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1";
        b1.classList.remove("active");
        b2.classList.remove("active");
        b3.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }
    
    if (b4.querySelector("h2").innerText==="O" && b5.querySelector("h2").innerText==="O" && b6.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2"; 
        b1.classList.remove("active");
        b2.classList.remove("active");
        b3.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }

    //Column 3
    if(b7.querySelector("h2").innerText==="X" && b8.querySelector("h2").innerText==="X" && b9.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1";
        b1.classList.remove("active");
        b2.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b5.classList.remove("active");
        b6.classList.remove("active");
    }
    
    if (b7.querySelector("h2").innerText==="O" && b8.querySelector("h2").innerText==="O" && b9.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2"; 
        b1.classList.remove("active");
        b2.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b5.classList.remove("active");
        b6.classList.remove("active");
    }

    //Row 2
    if(b2.querySelector("h2").innerText==="X" && b5.querySelector("h2").innerText==="X" && b8.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1";
        b1.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b9.classList.remove("active");
    }
    
    if (b2.querySelector("h2").innerText==="O" && b5.querySelector("h2").innerText==="O" && b8.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2"; 
        b1.classList.remove("active");
        b3.classList.remove("active");
        b4.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b9.classList.remove("active");
    }

    //Row 3
    if(b3.querySelector("h2").innerText==="X" && b4.querySelector("h2").innerText==="X" && b9.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1";
        b1.classList.remove("active");
        b2.classList.remove("active");
        b5.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
    }
    
    if (b3.querySelector("h2").innerText==="O" && b4.querySelector("h2").innerText==="O" && b9.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2"; 
        b1.classList.remove("active");
        b2.classList.remove("active");
        b5.classList.remove("active");
        b6.classList.remove("active");
        b7.classList.remove("active");
        b8.classList.remove("active");
    }
    
    //Diagonal Right-3
    if(b3.querySelector("h2").innerText==="X" && b5.querySelector("h2").innerText==="X" && b7.querySelector("h2").innerText==="X" && c_info.innerText === "2"){
        win.innerText = "Player 1"; 
        b1.classList.remove("active");
        b2.classList.remove("active");
        b4.classList.remove("active");
        b6.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }
    if(b3.querySelector("h2").innerText==="O" && b5.querySelector("h2").innerText==="O" && b7.querySelector("h2").innerText==="O" && c_info.innerText === "1"){
        win.innerText = "Player 2";
        b1.classList.remove("active");
        b2.classList.remove("active");
        b4.classList.remove("active");
        b6.classList.remove("active");
        b8.classList.remove("active");
        b9.classList.remove("active");
    }

    reset.addEventListener("click", () =>{
        location.reload(); 
    })

    

}


setInterval(play, 700);