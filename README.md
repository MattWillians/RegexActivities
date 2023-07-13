# RegexActivities

<h3>O que é Regex?</h3>
- > Regex, ou "Expressão regular, é definido como um método de identificar padrões em um texto".

<h3>Onde nós encontramos expressões regulares?</h3>
- > As expressões regulares podem ser encontradas em todos os lugars
- Linguagens de Programação
- Editores de texto
- IDE's
- E outros aplicativos em seu computador, fazem uso de expressões regulares em seus métodos de pesquisa

** REGEX PODE SER USADO EM QUALQUER LINGUAGEM DE PROGRAMAÇÃO**

<h3>Flags de Regex (Expressões Regulares)</h3>

<h5>Sem flags</h5>
Quando não usamos Flags, o metodo para ao encontrar a primeira ocorrencia do item.

Exemplo: a letra "r" na palavra "Carro" retorna "r". Veja, que foi retornado apenas UM dos r's

<h5>Flag g (Global)</h5>
A flag global, representa literalmente tudo. Ou seja, ao usar a flag "g" em suas buscas, o método ira buscar por (TODOS) os caractéres que batam com o descrito.

Exemplo: procurando pela letra "a" na palavra "Banana", será retornado "a, a, a", porem, se buscarmos por "A" não sera retornado nada.

<h5>Flag i (Ignoring Case / Insensitive)</h5>
A flag de Ignoring case / Insensitive, busca por qualquer ocorrencia desejada, não importa sua condição (Seja upper ou lower case)

Exemplo: procurando pela letra "c" na palavra "Caraca" (perceba que há diferenças entre as letras C e c), será retornado "C, c", ou seja, todas as ocorrencias ignorando suas diferenças.


<h3>Os Meta-caracteres</h3>
      
| Meta-Caractere | Nome            | Definição                                                       |
|----------------|-----------------|-----------------------------------------------------------------|
| text . text    | Ponto           | Pega 2 valores e UM UNICO CARACTERE no meio                     |
| []             | Conjunto        | Conjunto de caracteres permitidos                               |
| [^]            | Conjunto Negado | Conjunto de caracteres Não Permitidos                           |
| ?              | Interrogação    | Zero ou Um                                                      |
| *              | Asterisco       | Zero ou Mais                                                    |
| +              | Mais            | Um ou Mais                                                      |
| {N,M}          | Chaves          | De N até M                                                      |
| ^              | Circunflexo     | Inicio da Linha                                                 |
| $              | Cifrão          | Fim da Linha                                                    |
| \b             | Borda           | Inicio ou fim de uma palavra                                    |
| \              | Escape          | Uso de um meta-caractere como literal                           |
| \|             | Ou              | Operação de Ou                                                  |
| ()             | Grupo           | Define um grupo de caracteres                                   |
| \1...\9        | Retrovisor      | Resgata grupos já definidos                                     |
| \u             | Unicode         | Usado para localizar unicodes em regex                          |
| \d             | Digito          | Usado para localizar digitos                                    |
| \D             | Não-Digito      | Usado para localizar TUDO MENOS: digitos                        |
| \w             | Caracteres      | Usado para localizar caracteres de: [ a-z, A-Z, 0-9 e _ ]       |
| \W             | Não-Caractere   | Usado para localizar caracteres fora de: [ a-z, A-Z, 0-9 e _ ]  |
| \s             | Espaço          | Usado para localizar espaços [\s, \t, ' '...]                   |
| \S             | Não-Espaço      | Localiza tudo, menos espaço                                     |


<h3>Exemplos de QUANTIFICADORES</h3>

| Quantificador   | Significado            |
|:---------------:|------------------------|
| {2,3}           | De 2 a 3               |
| {3,}            | 3 ou mais              |
| {0,4}           | até 4                  |
| {2}             | exatamente 2           |
| {0,1}           | 0 ou 1 (igual ao ?)    |
| {0,}            | 0 ou mais (igual ao *) |
| {1,}            | 1 ou mais (igual ao +) |

# Dicas! 

<ul>
    <li>Ao criar uma String com IDENTAÇÃO faça uso da CRASE, ela permite colocar multiplas linhas em uma string, considerando as suas identações e espaçamentos!</li>
    <li>Verificar se seu editor de código realmente usa o TAB como espaçamento, ou se, ao apertar TAB ele insere 3 / 4 espaços, dependendo do tratamento, causaremos erros.</li>
</ul>
