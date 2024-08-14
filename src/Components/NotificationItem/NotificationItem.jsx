import './NotificationItem.css'

function NotificationsItem(props) {




    return (
        <>
            <div id='Box' className={props.class}>
                <img src={props.Img} className='imguser'></img>
                <div className='all'>
                    <div className='above'>
                        <label className='username'>{props.UserName}</label>
                        <label className='reaction'>{props.React}</label>
                        <a href="#">{props.link}</a>


                        {props.class == "c1" ||
                            props.class == "c2" ||
                            props.class == "c3" ? (<span className='dot'></span>) : null
                        }



                    </div>
                    <div>
                        <label className='time'>{props.time}</label>
                    </div>
                </div>
                {props.UserName == "Kimberly Smith" ? (
                    <div className='divpicture'>
                        <img src={props.picture} className='picture'></img>
                    </div>
                ) : null
                }
            </div>
            {props.UserName == "Rizky Hasanuddin" ?
                (<div id='DivMassage'>
                    <label id="PrivateMassage">Hello,thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.</label>
                </div>) : null
            }

        </>
    )
}
export default NotificationsItem