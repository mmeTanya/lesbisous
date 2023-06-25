import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()

     const services = await db.collection('services').find().sort({dateInFormat: - 1}).toArray()
   
     res.status(200).json({ services })

}
