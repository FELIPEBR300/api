const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
    create: async (req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };

            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao criar o serviço." });
        }
    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();
            res.status(200).json(services);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao buscar os serviços." });
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if (!service) {
                return res.status(404).json({ msg: "Serviço não encontrado." });
            }

            res.status(200).json(service);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao buscar o serviço." });
        }
    }
};

module.exports = serviceController;
;
