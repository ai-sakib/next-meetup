import { useRouter } from 'next/router'

import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {
    const router = useRouter()
    return (
        <MeetupDetail
            image='https://secure.meetupstatic.com/next/images/indexPage/category2.webp?w=1920'
            title='Title'
            address='104'
            description='This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
        />
    )
}
export default MeetupDetails
