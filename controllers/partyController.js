const PartyModel = require("../models/Party");
const { update } = require("./serviceController");

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);
    return priceSum <= budget;
};

const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            };

            if (party.services && !checkPartyBudget(party.budget, party.services)) {
                return res.status(406).json({ msg: "O seu orçamento é insuficiente." });
            }

            const response = await PartyModel.create(party);
            res.status(201).json({ response, msg: "Festa criada com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Erro ao criar a festa." });
        }
    },

    getAll: async (req, res) => {
        try {
            const parties = await PartyModel.find();
            res.json(parties);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao buscar festas." });
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if (!party) {
                return res.status(404).json({ msg: "Festa não encontrada" });
            }

            res.json(party);
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao buscar a festa." });
        }
    }, // 👈 vírgula adicionada aqui

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel.findById(id);

            if (!party) {
                return res.status(404).json({ msg: "Festa não encontrada" });
            }

            const deletedParty = await PartyModel.findByIdAndDelete(id);
            res.status(200).json({ deletedParty, msg: "Festa excluída com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao excluir a festa." });
        }
    },
    update: async(req, res) => {
        try {

            const id = req.params.id

            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            };

            if (party.services && !checkPartyBudget(party.budget, party.services)) {
                return res.status(406).json({ msg: "O seu orçamento é insuficiente." });
            }

            const updatedParty = await PartyModel.findByIdAndUpdate(id, party)
            if (!party) {
                return res.status(404).json({ msg: "Festa não encontrada" });
            }


res.status(200).json({party, msg: "festa atualizada com sucesso"});

            
        } catch (error) {
            console.log(error)
            
        }
    }
};

module.exports = partyController;
