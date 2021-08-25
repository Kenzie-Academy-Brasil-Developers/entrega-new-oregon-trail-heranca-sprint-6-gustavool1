#  language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável

    Contexto:
        Dado um Hunter de nome "Chaves"
        E ele sempre começa a viagem com 2 refeiçoes
        E ele sempre começa a viagem saúdavel.
        Dado um viajante de nome 'Brunin'
        E ele sempre comeca a viagem com 1 refeicao
        E o viajante sempre comeca a viagem saudavel

    Cenário: Caçou pra conseguir mais refeições
        Quando o Hunter sair pra caçar 1 vezes
        Então a quantidade de refeiçao deve ser igual a 7

    Cenário: Comeu e seguiu saúdavel
        Quando o Hunter comer 1 vezes
        Então sua quantidade de refeições deve ser 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando um Hunter come 2 vezes
        Então sua quantidade de refeições deve ser 0
        E o Hunter ficará doente

    Cenário: Saiu pra caçar, comeu e seguiu saúdavel
        Quando um Hunter sai para caçar 1 vez
        E come 2 vezes
        Então sua quantidade de refeições deve ser igual a 3
        E ele irá continuar saúdavel

    
    Cenário: Deu comida para um viajante
        Quando um Hunter doar 2 refeições para um viajante
        Então ele Hunter terá 0 refeições
        E o viajante terá 3 refeições