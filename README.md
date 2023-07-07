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

<tr>
    <td>Meta-Caractere</td>
    <td>Nome</td>
    <td>Definição</td>
</tr>
<tr>
    <td>text . text</td>
    <td>Ponto</td>
    <td>Pega 2 valores e UM UNICO CARACTERE que estiver no meio</td>
</tr>
<tr>
    <td> [] </td>
    <td>Conjunto</td>
    <td>Conjunto de caracteres permitidos</td>
</tr>
<tr>
    <td> [^] </td>
    <td>Conjunto Negado</td>
    <td>Conjunto de caracteres Não Permitidos</td>
</tr>
<tr>
    <td> [^] </td>
    <td>Conjunto Negado</td>
    <td>Conjunto de caracteres Não Permitidos</td>
</tr>
<tr>
    <td> ? </td>
    <td>Interrogação</td>
    <td>Zero ou Um</td>
</tr>
<tr>
    <td> * </td>
    <td>Asterisco</td>
    <td>Zero ou Mais</td>
</tr>
<tr>
    <td> + </td>
    <td>Mais</td>
    <td>Um ou Mais</td>
</tr>
<tr>
    <td> {N,M} </td>
    <td>Chaves</td>
    <td>De N até M</td>
</tr>
<tr>
    <td> ^ </td>
    <td>Circunflexo</td>
    <td>Inicio da Linha</td>
</tr>
<tr>
    <td> $ </td>
    <td>Cifrão</td>
    <td>Fim da Linha</td>
</tr>
<tr>
    <td> \b </td>
    <td>Borda</td>
    <td>Inicio ou fim de uma palavra</td>
</tr>
<tr>
    <td> \ </td>
    <td>Escape</td>
    <td>Uso de um meta-caractere como literal</td>
</tr>
<tr>
    <td> | </td>
    <td>Ou</td>
    <td>Operação de Ou</td>
</tr>
<tr>
    <td> () </td>
    <td>Grupo</td>
    <td>Define um grupo de caracteres</td>
</tr>
<tr>
    <td> \1...\9 </td>
    <td>Retrovisor</td>
    <td>Resgata grupos já definidos</td>
</tr>

# Dicas! 

<ul>
    <li>Ao criar uma String com IDENTAÇÃO faça uso da CRASE, ela permite colocar multiplas linhas em uma string, considerando as suas identações e espaçamentos!</li>
    <li>Verificar se seu editor de código realmente usa o TAB como espaçamento, ou se, ao apertar TAB ele insere 3 / 4 espaços, dependendo do tratamento, causaremos erros.</li>
</ul>