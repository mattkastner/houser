const getAllHouses = (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(response => {
        res.status(200).send(response)
    })
}

const addHouse = (req,res) => {
    const {name, address, city, state, zipcode, image_url, mortgage, rent} = req.body

    const obj = {name, address, city, state, zipcode, image_url, mortgage, rent}

    console.log(obj)

    const db = req.app.get('db')

    db.add_house([name, address, city, state, zipcode, image_url, mortgage, rent]).then((response)=> {
        res.status(200).send(response)
    })
}

const deleteHouse = async (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_house([id]).then((response)=> {
        console.log(response)
        res.status(200).send(response)
    })
}

module.exports = {
    getAllHouses,
    addHouse,
    deleteHouse
}