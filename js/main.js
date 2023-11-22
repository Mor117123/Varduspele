

        Sākt.onclick=()=>{
            sakt();
            let vards=sajauc(randomVards());
            document.getElementById("sajauktsVards").innerHTML = vards;
            
            document.getElementById("Burts1").innerHTML = vards[0];
            document.getElementById("Burts2").innerHTML = vards[1];
            document.getElementById("Burts3").innerHTML = vards[2];
            document.getElementById("Burts4").innerHTML = vards[3];
            document.getElementById("Burts5").innerHTML = vards[4];
            document.getElementById("Burts6").innerHTML = vards[5];
            document.getElementById("Burts7").innerHTML = vards[6];
            
            
            
        }
    
            
        var vardi=["SAULE", "PĒRKONS","DAUGAVA"];
        function randomVards(){
            let i=1;
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
            
            
            
            dragElement(document.getElementById("Burtia"));

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
            

