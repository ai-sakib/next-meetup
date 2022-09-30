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
export default function Home() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}
