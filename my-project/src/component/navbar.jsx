import React from 'react'
import { FaCaretRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="flex justify-between max-w-6xl m-auto p-3 md:p-7">
            <div>
                <img className='w-32 md:w-44' src="https://war-pin.com/wp-content/uploads/2023/02/logouse-768x246.png" alt="" />
            </div>
            <div class="flex">
                <ul class="flex gap-3 m-auto justify-center items-center">
                    <li class="activenav"><a to="/end">ลงทะเบียน</a></li>
                    <li><FaCaretRight className='text-[#C3C3C3]' /></li>
                    <li class="text-[#C3C3C3] inactivenav"><a>เลือกรูปแบบ</a></li>
                    <li><FaCaretRight className='text-[#C3C3C3]'/></li>
                    <li class="text-[#C3C3C3] inactivenav"><a>ชำระเงิน</a></li>
                </ul>
            </div>
            <div class="hidden md:flex">
                <button class="buttonprimary">แจ้งปัญหาสอบถาม</button>
            </div>
        </nav>
    )
}

export default Navbar