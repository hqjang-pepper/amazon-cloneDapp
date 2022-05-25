import React from 'react'
import { ConnectButton } from 'web3uikit'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/amazon_logo.png'
import logoFull from '../assets/amazon_logo_full.png'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill, BsFillPersonFill} from 'react-icons/bs'


const isAuthenticated = true
const username = ''
const Sidebar = () => {
    const styles = {
        container: `h-full w-[300px] flex flex-col bg-[#fff] static`,
        profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
        profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
        profilePic: `rounded-3xl object-cover`,
        welcome: ` text-md mb-2 font-bold text-2xl text-white`,
        usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
        setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,

    }
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                {
                    isAuthenticated && (
                    <>
                        <div className={styles.profilePicContainer}>
                            <Image
                                src={`https://avatars.dicebear.com/api/pixel-art/${username}.svg`}
                                alt='profile'
                                className={styles.profilePic}
                                height={100}
                                width={100}
                            />
                        </div>
                        {/* // update user database */}
                        {!username ? (
                            //if there is no username, show me the input 
                            <>
                                <div className={styles.username}>
                                    <input
                                        type='text'
                                        placeholder='Username...'
                                        className={styles.usernameInput}
                                        // value={nickname}
                                        // onChange = {e => setNickname(e.target.value)}
                                    />
                                </div>
                                <button 
                                className={styles.setNickname} 
                                // onClick={handleSetUsername}
                                >
                                set Nickname
                                </button>
                            </> 
                        ) : (
                            //if there is username, show me user name
                            <div>
                                <div className={styles.welcome}>welcome {username}</div>
                            </div>
                        )
                        }
                    </>
                    )}
                    <div className={styles.ConnectButton}>
                        <ConnectButton/>
                    </div>
            </div>
            <div className={styles.menu}>
                <Link href='/'>
                    <div className={styles.menuItem}>
                        <Image src={logo}
                        height={30}
                        width={30}
                        className = {styles.amazonlogo}
                        />
                        My Amazon
                        <br /> board
                    </div>
                </Link>
                    <div className={styles.menuItem}>
                        <FaBox/>
                        Collections
                    </div>
                    <div className={styles.menuItem}>
                        <BsFillBookmarkFill/>
                        Saved
                    </div>
                    <div className={styles.menuItem}>
                        <BsFillPersonFill/>
                        Saved
                    </div>
            </div>
        </div>
    )
}

export default Sidebar