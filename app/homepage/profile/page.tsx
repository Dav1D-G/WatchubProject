import user_default from '@/public/icons/user-default.svg';
import Image from 'next/image';

export default function ProfilePage()
{
    return(
        <>
            <section className="profile-page">
                <div className="profile-section">
                    <section className="profile-title">
                        <p className="koulen-regular">EDIT PROFILE</p>
                    </section>
                    <section className="profile-config">
                        <div className="profile-image">
                            <Image  src={user_default} alt='user-image'/>
                        </div>
                        <div className="profile-form">
                            <div className="profile-name">
                                <input type='text'  placeholder='Jan Kowalski' className='input-name koulen-regular'/>
                            </div>
                        </div>
                    </section>
                    <section className="profile-changes">
                        <div className="profile-save active-option">
                            <button className='koulen-regular '>SAVE</button>
                        </div>
                        <div className="profile-save">
                            <button className='koulen-regular '>CANCEL</button>
                        </div>
                        <div className="profile-save">
                            <button className='koulen-regular '>DELETE PROFILE</button>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}