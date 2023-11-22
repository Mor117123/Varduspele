


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


