    //variaveis responsaveis por guardar os valores de horas,minutos e segundos
        var horas = 0; 
        var minutos = 0;
        var segundos = 0;
        var status = '';
        //Valor que equivale a 1s utilizada no metodo start()
        var time = 1000;

        var cronometro;

        

        //Função responsavel por iniciar nosso cronometro
        function start() {
            status = 'start';
            if(status == 'pause' || status == 'stop' || status == 'start'){
                cronometro = setInterval(() => { timer(); },time);
            }
            
        }
        //Para nosso cronometro
        function pause() {
            status = 'pause';
            clearInterval(cronometro);
        }
        //Para nosso cronometro e limpa seus valores
        function stop() {
            status = 'stop';
            clearInterval(cronometro);
            horas = 0;
            minutos = 0;
            segundos = 0;

            document.getElementById('counter').innerHTML = '00:00:00';
        }

        function timer() {
            segundos++;

            if(segundos == 60){
                segundos = 0;
                minutos++;
                

                if(minutos == 60){
                    minutos = 0;
                    horas++;
                }
            }

            var format = (horas < 10 ? '0' + horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
            document.getElementById('counter').innerText = format;

            return format;
        }







        
// var hh = 0;
// var mm = 0;
// var ss = 0;

// var tempo = 1000;//Quantos milésimos valem 1 segundo?
// var cron;

// //Inicia o temporizador
// function start() {
//     cron = setInterval(() => { timer(); }, tempo);
// }

// //Para o temporizador mas não limpa as variáveis
// function pause() {
//     clearInterval(cron);
// }

// //Para o temporizador e limpa as variáveis
// function stop() {
//     clearInterval(cron);
//     hh = 0;
//     mm = 0;
//     ss = 0;

//     document.getElementById('counter').innerText = '00:00:00';
// }

// //Faz a contagem do tempo e exibição
// function timer() {
//     ss++; //Incrementa +1 na variável ss

//     if (ss == 59) { //Verifica se deu 59 segundos
//         ss = 0; //Volta os segundos para 0
//         mm++; //Adiciona +1 na variável mm

//         if (mm == 59) { //Verifica se deu 59 minutos
//             mm = 0;//Volta os minutos para 0
//             hh++;//Adiciona +1 na variável hora
//         }
//     }

//     //Cria uma variável com o valor tratado HH:MM:SS
//     var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
//     //Insere o valor tratado no elemento counter
//     document.getElementById('counter').innerText = format;

//     //Retorna o valor tratado
//     return format;
// }