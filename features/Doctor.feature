# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os Viajantes
    Para que eles possam seguir a viagem saudável

    Contexto:
        Dado um Doctor de nome "Muzy"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.
    
    Cenário: Doctor curou um viajante que não está saudável
        Quando Doctor curar um Viajante
        Então Viajante irá ficar saudável
    Cenário: Doctor curou um viajante que está saudável
        Quando Doctor curar um Viajante
        Então o Viajante irá continuar saudável