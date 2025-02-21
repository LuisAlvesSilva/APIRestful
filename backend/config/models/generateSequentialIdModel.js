import Counter from "./counterModel.js";

const generateSequentialId = async function (next) {
    const idField = this.constructor.schema.paths[this.constructor.idField] ? this.constructor.idField : "id"; // Detecta o campo ID
    if (!this[idField]) { // Verifica se o ID já foi gerado
        try {
            const counter = await Counter.findOneAndUpdate(
                { model: this.constructor.modelName },
                { $inc: {count: 1} },
                { new: true, upsert: true }
            );
            this[idField] = counter.count;
        } catch (err) {
            return next(err);
        }
    }
    return next();
}

export default generateSequentialId;