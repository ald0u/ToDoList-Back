const { where } = require('sequelize');
const db = require('./../models/');
const Tasks = db.Tasks;
console.log(db);

module.exports.findAll = async (req, res) => {
    try {
        const tasks = await Tasks.findAll();

        if (typeof tasks === 'undefined' || tasks === null) {
            res.status(400).send({
                message: "No existen tareas."
            });
            return;
        }

        res.status(200).send(tasks);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Error al obtener tareas."
        });
    }
}

module.exports.create = async (req, res) => {

    const { title } = req.body;

    if (!title) {
        res.status(400).send({
            message: "El campo title es obligatorio."
        });
        return;
    }

    try {
        // Objeto, propiedades/atributos, campo, columna, catch, parámetro
        const task = await Tasks.create({
            title
        });

        if (typeof task === 'undefined' || 'task' === null) {
            res.status(400).send({
                message: 'No se puede crear.'
            });
            return;
        }

        res.status(200).send({
            message: 'Se ha agregado.'
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: 'Error al agregar tarea.'
        });
    }
}

module.exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findByPk(id);
        if (typeof task === 'undefined' || task == null) {
            res.status(400).send({
                message: `La tarea con id ${id}, no existe.`
            });
            return;
        }
        res.status(200).send({
            task
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error al obtener tarea"
        });
    }
}

module.exports.edit = async (req, res) => {
    const { id, title } = req.body;

    try {
        //UPDATE Tasks SET title = title where id = id
        const updatedTask = await Tasks.update({
            title
        }, {
            where: {
                id
            }
        });
        res.status(200).send(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Error al actualizar"
        });
    }
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        //DELETE FROM TASKS WHERE ID = ID;
        await Tasks.destroy({
            where: {
                id
            }
        });

        res.status(204).send();
    }
    catch (erro) {
        res.status(500).send({
            message: "Error al eliminar, error tecnico"
        })
    };
}