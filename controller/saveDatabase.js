function saveDatabase(namedb,schema,value) {
    if(namedb!="" && schema!="" && value!="") {
        const myModel = mongoose.model(namedb,schema);
        const doc = new myModel(value);
        return doc.save();
    }
    return false;
}

module.exports = saveDatabase;