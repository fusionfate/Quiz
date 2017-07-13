		


		var Perguntas = [
			'1 - Qual tag é utilizada para incluir uma estilização CSS dentro de um documento HTML?',
			'2 - Qual a linguagem responsável por deixar o HTML mais dinâmico?',
			'3 - Qual a linguagem responsável por estilizar o HTML?',
			'4 - Qual a primeira coisa que é carregada na página HTML?',
			'5 - Para que serve a tag body?',
			'6 - Qual o tipo da tag input em que o usuário pode marcar somente uma opção?',
			'7 - Qual o tipo da tag input em que o usuário tem somente duas opções (true ou false) ?',
			'8 - Qual o servidor mais usado para sites HTML?',
			'9 - Em qual a versão da Web nos Encontramos? ',
			'10 - Um código HTML possuia a Tag <!DOCTYPE HTML>. Sobre essa tag podemos afirmar que:'
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
			'2.0',
			'Ela diz ao navegador o tipo de documento HTML que ele vai renderizar'
		];

		var Alternativas = [
		
			['CSS',
			'Style',
			'Head',
			'Meta',
			'Script'],

			['Style',
			'JavaScript',
			'CSS',
			'PHP',
			'HTML'],

			['JavaScript',
			'PHP',
			'CSS',
			'HTML',
			'XML'],

			['A tag body',
			'A tag title',
			'A tag html',
			'A tag meta',
			'A tag head'],

			['A tag body é o corpo da página',
			'Body se refere ao cabeçalho',
			'A tag Body não existe',
			'a tag Body adiciona uma linha em uma tabela',
			'A tag Body cria uma tabela'],

			['Perguntar aos Universitários',
			'Div',
			'CheckBox',
			'Button',
			'Radio'],

			['Selection',
			'Text Area',
			'CheckBox',
			'T/F',
			'Booleanic'],

			['Público',
			'Privado',
			'Pirata',
			'Apache',
			'IIS'],

			['1.5',
			'2.0',
			'7.9',
			'3.0',
			'4.0'],

			['Ela não faz nada',
			'Ela diz ao navegador o tipo de documento HTML que ele vai renderizar',
			'Identifica a extensão .doc',
			'Deve vir sempre após as tags',
			'Define o nome do Arquivo']

		];

		var Escolha = [10];
		var Progresso = 0;
		var Acertos = 0;
		var RespostaEncontrada = true;
		var Tamanho = 0;
		var cor;

		function Imprimir_Resultado(){

			if(Acertos > 7 ){
				
					document.getElementById("Questao").style.color = '#28a315';
					document.getElementById("Questao").innerHTML = 'Uau! Você parece dominar o assunto! ^^';

					cor = '#28a315';
				
				}else if(Acertos > 4 && Acertos < 8){
				
					document.getElementById("Questao").style.color = '#ede912';
					document.getElementById("Questao").innerHTML = 'Parabéns! Acertou várias! Estude mais e melhore seus resultados :)';

					cor = '#ede912';
				
				}else if(Acertos > 1 && Acertos < 5){
				
					document.getElementById("Questao").style.color = '#ffaa0c';
					document.getElementById("Questao").innerHTML = 'Você tem potencial! Mas é preciso estudar mais para superar suas dificuldades! ;)';

					cor = '#ffaa0c';
				
				}else {

					document.getElementById("Questao").style.color = '#fc2020';
					document.getElementById("Questao").innerHTML = 'Você pode não ter tido um bom desempenho dessa vez mas não desista! Persevere nos estudos! :*';

					cor = '#fc2020';

			}

			document.getElementById("DivTabela").innerHTML = ("<table> <tr> <th border=\"2px black solid\"> Questão </th> <th> Resposta </th> <th> Alternativa Escolhida </th> </tr>");

			for (var i = 0; i < 10; i++) {
				
				document.getElementById("DivTabela").innerHTML = (document.getElementById("DivTabela").innerHTML + '<tr> <td>' + Perguntas[i] + '</td> <td>' + Respostas[i] + '</td> <td>' + Escolha[i] + '</td> </tr>' );

			}

			document.getElementById("DivTabela").innerHTML = (document.getElementById("DivTabela").innerHTML + '</table>');

			document.getElementById("DivTabela").style.border = '2px ' + cor + ' solid ';

		}

		function AnimacaoBotaoInset(){
			document.getElementById("Botao").style.background = '#ef9e07';/*
			document.getElementById("Botao").style.border = 'inset 6px #302c2c';*/
		}

		function AnimacaoBotaoOutset(){
			document.getElementById("Botao").style.background = '#ffaa0c';/*
			document.getElementById("Botao").style.border = 'outset 6px #302c2c';*/
		}



		function Enviar(){

			console.log(document.getElementById("ProgressoTexto").style.color);

			var Radios = document.getElementsByName("Resposta");

			document.getElementById("DivTabela").innerHTML = '';
			document.getElementById("DivTabela").style.border = 'none';
			document.getElementById("ProgressoTexto").style.color = '#00991d';
			document.getElementById("Questao").style.color = 'black';
			document.getElementById("Botao").innerHTML = 'Avançar';
			document.getElementById("AcertoTexto").innerHTML = ("Acertos:" + Acertos);

			for (var i = 0; i < 5; i++) {

				if (Radios[i].checked == true){

					if(Radios[i].value == Respostas[Progresso - 1]){
						Acertos++;
						document.getElementById("AcertoTexto").innerHTML = ("Acertos:" + Acertos);
					}

					Escolha[Progresso - 1] = Radios[i].value; 
					RespostaEncontrada = true;

				}

			}

				
			if(RespostaEncontrada == true){

				Tamanho = Tamanho + 10;
				RespostaEncontrada = false;

				if(Progresso == 10){

					document.getElementById("Botao").innerHTML = 'Tentar Novamente';

					for (var i = 1; i < 6; i++) {

						document.getElementById("Alternativa" + i).style.visibility = 'hidden';

					}

					Imprimir_Resultado(Acertos);

					document.getElementById("ProgressoTexto").innerHTML = ("Finalizado!");

					Progresso = 0;
					Tamanho = 0;
					Acertos = 0;
				
				}else{

					for (var i = 0; i < 5; i++) {

						document.getElementById("Alternativa" + (i+1)).style.visibility = 'visible';
						document.getElementById("Alternativa" + (i+1)).innerHTML = ('<input type="radio" value="' + Alternativas[Progresso][i] + '" name="Resposta"/>' + ' - ' + Alternativas[Progresso][i]);
				
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

				}

			}else{

				document.getElementById("ProgressoTexto").innerHTML = 'Você deve selecionar uma resposta!';
				document.getElementById("ProgressoTexto").style.color = 'red';

			}

			


		}
			