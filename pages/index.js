import { Fragment } from 'react'
import Head from 'next/head'

import { MongoClient } from 'mongodb'
import MeetupList from './../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://secure.meetupstatic.com/next/images/indexPage/category2.webp?w=1920',
        address: 'Some address 5, 12345 Some City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image: 'https://secure.meetupstatic.com/next/images/indexPage/category2.webp?w=1920',
        address: 'Some address 10, 12345 Some City',
        description:
            'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
]

export const getStaticProps = async () => {
    // fetch data from an API
    const client = await MongoClient.connect(
        'mongodb+srv://mern_stack:OHYq2jFfxE91wYg2@cluster0.yqodw.mongodb.net/meetups?retryWrites=true&w=majority'
    )

    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    }
}

const HomePage = props => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name='description'
                    content='Browse a huge list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

export default HomePage
