db.produtos.updateOne(
    { 
        nome: { $eq: "Big Mac" },
    }, 
    { 
        $currentDate: { ultimaModificacao: { $type: "timestamp" } },
    },
);
  
  db.produtos.find(
    { 
        nome: { $eq: "Big Mac" },
    }, 
    { _id: 0, nome: 1 },
);