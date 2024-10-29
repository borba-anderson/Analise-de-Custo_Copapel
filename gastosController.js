const gastos = [];

exports.getGastos = (req, res) => {
    res.json(gastos);
};

exports.addGasto = (req, res) => {
    const { descricao, valor } = req.body;
    const novoGasto = { descricao, valor, data: new Date().toISOString() };
    gastos.push(novoGasto);
    res.status(201).json(novoGasto);
};
