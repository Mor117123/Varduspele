

        document.getElementById("Sakt").onclick=()=>{
            sakt();
            let number = document.getElementById("number").value;
            generateButtons(number);
            
            let vards=sajauc(randomVards());
            document.getElementById("sajauktsVards").innerHTML = vards;
            
            document.getElementById("Burts1").innerHTML = vards[0];
            document.getElementById("Burts2").innerHTML = vards[1];
            document.getElementById("Burts3").innerHTML = vards[2];
            document.getElementById("Burts4").innerHTML = vards[3];
            document.getElementById("Burts5").innerHTML = vards[4];
            //document.getElementById("Burts6").innerHTML = vards[5];
            //document.getElementById("Burts7").innerHTML = vards[6];
            
            
            
        }
        function generateButtons(number){
            for (let i=0; i<number; i++){
                let node = document.createElement("div");

                //let textnode = document.createTextNode("Burts"+(i+1));

                node.id="Burts"+(i+1);

                document.getElementById("Burti").appendChild(node);
                dragElement(document.getElementById("Burts"+(i+1)));

            }
        }
        document.getElementById("Check").onclick=()=>{
            let number = document.getElementById("number").value;
            
            let position = document.getElementById("Burts1").offsetLeft;
            
            var burtsPos=[{"position":position, "letter": document.getElementById("Burts1").innerHTML}];
            
            for (let i=1; i<number; i++){
                
                let position = document.getElementById("Burts"+(i+1)).offsetLeft;
                let burtsPos1 = {"position":position, "letter": document.getElementById("Burts"+(i+1)).innerHTML};
                burtsPos.push(burtsPos1);
                
            }
            burtsPos.sort((a, b) => {return a.position - b.position;});
                
            var sakartots = "";
            for (let i=0; i<number; i++){
                
                var sakartots=sakartots+burtsPos[i].letter;
            }
            alert(sakartots);
            
            if(sakartots===nesajaukts){
                alert("True");
            }else{
                alert("False");
            }
            
            
        }
    
            
        var vardi=["SAULE", "PĒRKONS","DAUGAVA"];
        function randomVards(){
            let i=0;
            return vardi[i];
        }
        
        function sajauc(vards){
            let randomPairs=[];
            for(let i=0;i<vards.length;i++){
                let nr=Math.floor(Math.random()*100);
                randomPairs[i]={"index":i,"random":nr};
            }
            randomPairs.sort(function(a,b){return a.random-b.random});
            let sajaukts="";
            for(let i=0;i<vards.length;i++){
                sajaukts+=vards.charAt(randomPairs[i]["index"]);
            }
            return sajaukts;
        }

        
        // no https://www.w3schools.com/howto/howto_js_countdown.asp 
            var countDownDate, spele;
            function sakt() {
                countDownDate = new Date().getTime();
                spele = setInterval(skaita, 1000);
            }
        // Update the count down every 1 second
            function skaita() {
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = now - countDownDate;

                // Time calculations for days, hours, minutes and seconds
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (distance > 5000) {
                    clearInterval(spele);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }
            
            
            
            //dragElement(document.getElementById("Burti"));

            function dragElement(elmnt) {
                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                if (document.getElementById(elmnt.id + "header")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
                } else {
                    // otherwise, move the DIV from anywhere inside the DIV:
                    elmnt.onmousedown = dragMouseDown;
                }
                
                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }

                function closeDragElement() {
                    // stop moving when mouse button is released:
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
            

