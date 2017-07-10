		


		var Perguntas = [
			'1 - Qual tag é utilizada para incluir uma estilização CSS dentro de um documento HTML?',
			'2 - Qual a linguagem responsável por deixar o HTML mais dinânimo?',
			'3 - Qual a linguagem responsável por estilizar o HTML?',
			'4 - Qual a primeira coisa que é carregada na página HTML?',
			'5 - Para que serve a tag body?',
			'6 - Qual o tipo da tag input em que o usuário pode marcar somente uma opção?',
			'7 - Qual o tipo da tag input em que o usuário tem somente duas opções (true ou false) ?',
			'8 - Qual o servidor mais usado para sites HTML?',
			'9 -  Questão 9',
			'10 - Questão 10'
		];

		var Respostas = [
			'Style',
			'JavaScript',
			'CSS',
			'A tag head',
			'A tag body é o corpo da página',
			'Radio',
			'CheckBox',
			'Apache',
			'',
			'Resposta10'
		];

		var Alternativas = [
			['CSS','Style','Head','Meta','Script'],
			['Style','JavaScript','CSS','PHP','HTML'],
			['JavaScript','PHP','CSS','HTML','SQL'],
			['A tag body','A tag title','A tag html','A tag meta','A tag head'],
			['A tag body é o corpo da página','22','23','24','25'],
			['26','27','28','29','Radio'],
			['31','32','CheckBox','34','35'],
			['36','37','38','Apache','40'],
			['41','42','43','44','45'],
			['46','Resposta10','48','49','50']
		];

		var Progresso = 0;
		var Acertos = 0;
		var RespostaEncontrada = true;
		var Tamanho = 0;

		function AnimacaoBotaoInset(){
			document.getElementById("Botao").style.background = '#4c5648';
			document.getElementById("Botao").style.border = 'inset 6px #302c2c';
		}

		function AnimacaoBotaoOutset(){
			document.getElementById("Botao").style.background = '#8d968a';
			document.getElementById("Botao").style.border = 'outset 6px #302c2c';
		}

		function Enviar(){

			var Radios = document.getElementsByName("Resposta");

			document.getElementById("ProgressoTexto").style.color = '#00991d';
			document.getElementById("Questao").style.color = 'black';
			document.getElementById("Botao").innerHTML = 'Avançar';

			if(Progresso != 10){

				for (var i = 0; i < 5; i++) {

					if (Radios[i].checked == true){
						RespostaEncontrada = true;
					}

				}

			}

			if(RespostaEncontrada){

				Tamanho = Tamanho + 2;
				RespostaEncontrada = false;

				document.getElementById("Botao").innerHTML = 'Avançar';

				for (var i = 0; i < 5; i++) {

					if (Radios[i].checked == true){

						if((Radios[i].value) == (Respostas[Progresso - 1])){
							Acertos++;
						}

						document.getElementById("AcertoTexto").innerHTML = ("Acertos:" + Acertos);
					}

					document.getElementById("Alternativa" + (i+1)).style.visibility = 'visible';
					document.getElementById("Alternativa" + (i+1)).innerHTML = ('<input type="radio" value=" <br/>' + Alternativas[Progresso][i] + '" name="Resposta"/>' + ' - ' + Alternativas[Progresso][i]);
				}

				if(Progresso == 9){

					document.getElementById("Barra").style.width = (Tamanho + '%');
					document.getElementById("Questao").innerHTML = Perguntas[Progresso];
					document.getElementById("Botao").innerHTML = 'Concluir';
					Progresso++;
					document.getElementById("ProgressoTexto").innerHTML = ("Pergunta " + Progresso + " de 10.");

				}else{

					document.getElementById("Barra").style.width = (Tamanho + '%');
					document.getElementById("Questao").innerHTML = Perguntas[Progresso];
					Progresso++;
					document.getElementById("ProgressoTexto").innerHTML = ("Pergunta " + Progresso + " de 10.");

				}

			}else if(Progresso == 10){

				document.getElementById("Botao").innerHTML = 'Tentar Novamente';

				for (var i = 1; i < 6; i++) {

					document.getElementById("Alternativa" + i).style.visibility = 'hidden';

				}

				if(Acertos > 7 ){
				
					document.getElementById("Questao").style.color = 'green';
					document.getElementById("Questao").innerHTML = 'Uau! Você parece dominar o assunto! ^^';
				
				}else if(Acertos > 4 && Acertos < 8){
				
					document.getElementById("Questao").style.color = 'yellow';
					document.getElementById("Questao").innerHTML = 'Parabéns! Acertou várias! Estude mais e melhore seus resultados :)';
				
				}else if(Acertos > 1 && Acertos < 5){
				
					document.getElementById("Questao").style.color = 'orange';
					document.getElementById("Questao").innerHTML = 'Você tem potencial! Mas é preciso estudar mais para superar suas dificuldades! ;)';
				
				}else{

					document.getElementById("Questao").style.color = '#ff4949';
					document.getElementById("Questao").innerHTML = 'Você pode não ter tido um bom desempenho dessa vez mas não desista! Persevere nos estudos! :*';
				
				}

				document.getElementById("ProgressoTexto").innerHTML = ("Completado!");
				Progresso = 0;
				Tamanho = 0;

			}else{
				document.getElementById("ProgressoTexto").innerHTML = 'Selecione uma resposta!';
				document.getElementById("ProgressoTexto").style.color = 'red';
			}


		}
