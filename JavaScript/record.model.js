module.exports = mongoose => {

    var schema = mongoose.Schema({
        Jugador1: String,
        Jugador2: String,
        Gandor: String
    },
    {timestamps: true});

    schema.method("toJSON", function(){
        const { __v, _id, ...object}  = this.toObject();
        object.id = _id;
        return object;
    });

    const Records = mongoose.model("records",schema);
    return Records;
}