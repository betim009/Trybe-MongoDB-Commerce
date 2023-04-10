# MongoDB Commerce - Trybe :rocket:
### configurações inicias:
    1. criar um container: 
    docker run -d --name=Commerce -v "$PWD:/app" -p 27017:27017 mongo:5.0
    
    2. liste todos os containers: 
    docker container ls
    
    3. execute o container: 
    docker exec -it Commerce bash
    
    4. execute via mongo: 
    docker exec -it Commerce mongo
    
### testes: 
    - Para executar os testes é preciso estar na raiz do projeto: 
    0. cd app/
    1. ./scripts/evaluate.sh
    2. ./scripts/evaluate.sh desafio1
    
### BD COMMERCE: 
    show dbs
    use commerce
    
    LISTANDO O BANCO DE DADOS: 
    - db.produtos.find({}, { _id: 0 }).pretty();
    
    RESUTADO: 
    https://gist.github.com/betim009/ac49cef36ea6101348406928b20cdf3d
