import './Notifications.css'
import UserImg1 from '../../assets/Images/avatar-mark-webber.webp'
import UserImg2 from '../../assets/Images/avatar-angela-gray.webp'
import UserImg3 from '../../assets/Images/avatar-jacob-thompson.webp'
import UserImg4 from '../../assets/Images/avatar-rizky-hasanuddin.webp'
import UserImg5 from '../../assets/Images/avatar-kimberly-smith.webp'
import UserImg6 from '../../assets/Images/avatar-nathan-peterson.webp'
import UserImg7 from '../../assets/Images/avatar-anna-kim.webp'
import UserImg8 from '../../assets/Images/image-chess.webp'
import NotificationsItem from '../NotificationItem/NotificationItem'
import { useState } from 'react'

function Notifications() {
    const [count, setCount] = useState(3)
    function HandelMarkALLasread() {
        setCount(0)
    }






    const ArrayOfObjects = [
        { Img: UserImg1, UserName: "Mark Wabber", React: "reacted to you recent post", id: 1, link: "My first tournament today!", time: "1m ago", class: "c1", picture: "", read: true }
        , { Img: UserImg2, UserName: "Angela Gray", React: "followed you", id: 2, link: "", time: "5m ago", class: "c2", picture: "", read: true }
        , { Img: UserImg3, UserName: "Jacob Thompson", React: "has joined your group", id: 3, link: "Chess Club", time: "1 day ago", class: "c3", picture: "", read: true }
        , { Img: UserImg4, UserName: "Rizky Hasanuddin", React: "sent you a private massage", id: 4, link: "", time: "5 day ago", class: "c4", picture: "", read: false }
        , { Img: UserImg5, UserName: "Kimberly Smith", React: "commented on your picture", id: 5, link: "", time: "1 Week ago", class: "c5", picture: UserImg8, read: false }
        , { Img: UserImg6, UserName: "Nathan Perterson", React: "reacted to your recent post", id: 6, link: "5 end-game strategies to increase your win rate", time: "2 Weeks ago", class: "c6", picture: "", read: false }
        , { Img: UserImg7, UserName: "Anna Kim", React: "left the group", id: 7, link: "Chess Club", time: "2 Weeks ago", class: "c7", picture: "", read: false }

    ]

    return (
        < >

            <div className='NotificationItem'>
                <div id="Title">
                    <label>Notifications <span>{count}</span></label>
                    <a href='#' onClick={HandelMarkALLasread} > Mark all as read</a>
                </div>
                {ArrayOfObjects.map((item) => {
                    return (
                        <NotificationsItem
                            Img={item.Img}
                            UserName={item.UserName}
                            React={item.React}
                            key={item.id}
                            link={item.link}
                            time={item.time}
                            class={item.class}
                            picture={item.picture}
                            HandelMarkALLasread={HandelMarkALLasread}
                        ></NotificationsItem>

                    )
                })}




            </div>


        </>





    )
}
export default Notifications