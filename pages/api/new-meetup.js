import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body
        const { title, image, address, description } = data

        const client = MongoClient.connect(
            'mongodb+srv://mern_stack:gYWnDomYUGqx0Fr6@cluster0.yqodw.mongodb.net/meetups?retryWrites=true&w=majority'
        )
        const db = client.db()
        const mongoCollection = db.collection('meetups')
        const result = await mongoCollection.insertOne(data)

        console.log(result)
        client.close()

        res.status(201).json({ message: 'Meetup inserted!' })
    }
}

export default handler
