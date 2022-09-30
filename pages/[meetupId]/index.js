import { useRouter } from 'next/router'

import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = props => {
    const router = useRouter()
    return <MeetupDetail {...props.meetupData} />
}

export const getStaticPaths = async () => {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    }
}

export const getStaticProps = async context => {
    // fetch data from an API
    const meetupId = context.params.meetupId
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                id: 'm100',
                image: 'https://secure.meetupstatic.com/next/images/indexPage/category2.webp?w=1920',
                title: 'Title',
                address: '104',
                description:
                    'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
            },
        },
        revalidate: 1,
    }
}

export default MeetupDetails
