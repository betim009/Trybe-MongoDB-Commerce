db.produtos.find(
    { 
        $expr: { $lt: ["$vendidos", "$curtidas"] },
    }, { _id: 0, nome: 1 },
);