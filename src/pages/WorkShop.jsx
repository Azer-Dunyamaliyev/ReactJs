import React from 'react'
import WorkBg from '../components/WorkBg'
import WorkItemRight from '../components/WorkItemRight'
import WorkRightImg from '../assets/image/Work_right_1.png'
import WorkRightImg_2 from "../assets/image/buy_card_4.png"
import WorkLeftImg from "../assets/image/work_left_1.png"
import WorkLeftImg_2 from '../assets/image/Workshop_1.png'
import WorkItemLeft from '../components/WorkItemLeft'

const WorkShop = () => {
  return (
    <>
        <WorkBg />
        <WorkItemRight title={'Online workshops'}  img={WorkRightImg}/>
        <WorkItemLeft title={'Workshops for adults'}  img={WorkLeftImg} />
        <WorkItemRight title={'Workshops for children'}  img={WorkRightImg_2}/>
        <WorkItemLeft title={'Workshops for adults'}  img={WorkLeftImg_2} />
    </>
  )
}

export default WorkShop