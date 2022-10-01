import { MongoClient } from 'mongodb'

// /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body

        const client = await MongoClient.connect(
            'mongodb+srv://mern_stack:OHYq2jFfxE91wYg2@cluster0.yqodw.mongodb.net/meetups?retryWrites=true&w=majority'
        )

        const db = client.db()
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)

        client.close()
        res.status(201).json({ message: 'Meetup inserted!', result })
    }
}

export default handler
