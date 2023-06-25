import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()


    const body = JSON.parse(req.body)
    const application = db.collection('other-applications').insertOne({
        name: body.name,
        email: body.email,
        phone: body.phone,
        comments: body.comments,
        date: body.date
    });

    res.status(200).json({ application })
}
