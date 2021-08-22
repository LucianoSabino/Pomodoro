        let minutes = 5;
        let seconds = 00;
        let five = 15;
        let quiz = 25;
        let thirty = 35;
        let forty = 40;
        let counterInterval = undefined

        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const fiver = document.getElementById('five');
        const quizEl = document.getElementById('quiz');
        const thirtyEl = document.getElementById('thirty');
        const fortyEl = document.getElementById('forty');

        updatCounterEl();

        function updatCounterEl() {
            //< 10 ? `0${minutes}` : minutes; isso fazer com que receba os dois 00 para não fica um só
            minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
            secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        }

        function startCounter() {
            if(counterInterval) return;
            counterInterval = setInterval( () => {
                if(seconds === 0) {
                    if(minutes === 0) {
                        destroyInterval()
                    } else {
                        //aqui ele vai entra um vez 
                        seconds = 59; 
                        --minutes;
                    }
                } else {
                    //depos vem para car
                    --seconds;
                }

                updatCounterEl();

            }, 1000);
        }

        function fiveCounter() {
            if(counterInterval) return;
            minutes = five
            counterInterval = setInterval( () => {
                if(seconds === 0) {
                    if(minutes === 0) {
                        destroyInterval()
                    } else {
                        seconds = 59; 
                        --minutes;
                    }
                } else {
                    --seconds;
                }

                updatCounterEl();

            }, 1000);
        }

        function thirtyCounter() {
            if(counterInterval) return;
            minutes = thirty
            counterInterval = setInterval( () => {
                if(seconds === 0) {
                    if(minutes === 0) {
                        destroyInterval()
                    } else {
                        seconds = 59; 
                        --minutes;
                    }
                } else {
                    --seconds;
                }

                updatCounterEl();

            }, 1000);
        }

        function quizCounter() {
            if(counterInterval) return;
            minutes = quiz
            counterInterval = setInterval( () => {
                if(seconds === 0) {
                    if(minutes === 0) {
                        destroyInterval()
                    } else {
                        seconds = 59; 
                        --minutes;
                    }
                } else {
                    --seconds;
                }

                updatCounterEl(); 
            }, 1000);
        }
        
        function fortyCounter() {
            if(counterInterval) return;
            minutes = forty
            counterInterval = setInterval( () => {
                if(seconds === 0) {
                    if(minutes === 0) {
                        destroyInterval()
                    } else {
                        seconds = 59; 
                        --minutes;
                    }
                } else {
                    --seconds;
                }

                updatCounterEl(); 
            }, 1000);
        }

        function pauseCounter() {
            clearInterval(counterInterval)
        }

        function destroyInterval() {
            counterInterval = undefined;
            clearInterval(counterInterval);
        }

        function resetCounter() {
            destroyInterval();
            minutes = 5;
            seconds = 00;

            updatCounterEl();
        }

        feather.replace()