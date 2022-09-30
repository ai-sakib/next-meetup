import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
    const meetupAddHandler = meetupData => {
        console.log(meetupData)
    }
    return <NewMeetupForm onAddMeetup={meetupAddHandler} />
}
export default NewMeetup
