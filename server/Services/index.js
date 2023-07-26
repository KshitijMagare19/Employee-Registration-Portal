

exports.generateCrudMethods = Model =>{
    return{
        getAll: () => {return Model.find()},
        getById: id => {return Model.findById(id)},
        create: record => {return Model.create(record)},
        update: (id,record) => {return Model.findByIdAndUpdate(id,record,{new : true})},
        delete: id => {return Model.findByIdAndDelete(id)},
    }
}