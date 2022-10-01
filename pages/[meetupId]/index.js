import { Fragment } from 'react'
import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = props => {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name='description'
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://mern_stack:OHYq2jFfxE91wYg2@cluster0.yqodw.mongodb.net/meetups?retryWrites=true&w=majority'
    )

    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()

    return {
        fallback: true,
        paths: meetups.map(meetup => ({
            params: { meetupId: meetup._id.toString() },
        })),
    }
}

export const getStaticProps = async context => {
    // fetch data from an API
    const meetupId = context.params.meetupId
    const client = await MongoClient.connect(
        'mongodb+srv://mern_stack:OHYq2jFfxE91wYg2@cluster0.yqodw.mongodb.net/meetups?retryWrites=true&w=majority'
    )

    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    })
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            },
        },
        revalidate: 1,
    }
}

export default MeetupDetails
