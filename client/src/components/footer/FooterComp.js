import { Button, FloatButton } from 'antd'
import React from 'react'
import { motion } from "framer-motion"
import { useScreens } from '../../constans/constScreens'
import { titleAnimation2 } from '../../constans/animation/AnimationConst'

export const FooterComp = () => {
  const screens = useScreens()

  const titleAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }
  const titleAnimation3 = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }

  const adressAnimation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.7
      }
    }
  }



  return (
    <section className='sd:px-10 xy:px-5 pt-10 bg-white h-[80vh] flex overflow-hidden'>
      <FloatButton.BackTop />
      <div className='w-1/5 xy:hidden sd:block'></div>

      <div className='sd:ml-20 xy:ml-0 flex flex-col justify-between'>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className='flex mb-0'
          >
            <motion.h2
              variants={titleAnimation}
              className='sd:text-8xl xy:text-4xl font-extrabold uppercase sd:mr-8 xy:mr-3'
            >
              мария
            </motion.h2>
            <motion.h2
              variants={titleAnimation3}
              className='sd:text-8xl xy:text-4xl font-extrabold uppercase'
            >
              ирзунова
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className='mt-0'
          >
            <motion.h3
              variants={titleAnimation}
              className='sd:text-4xl xy:text-xl font-extrabold uppercase'
            >
              психолог Минск
            </motion.h3>
          </motion.div>
        </div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          className=''
        >
          <motion.div
            variants={adressAnimation}
            className='flex justify-between sd:items-center xy:items-start xy:flex-col sd:flex-row h-full'>
            <div className='text-xl font-extralight'>
              <p>г.Минск, Петра Мстиславца 20</p>
              <p>mishel1406@mail.ru</p>
              <a href='tel:80298884002'>+375 29 888-40-02</a>
            </div>
            <Button
              type='primary'
              shape="round"
              size={screens.md ? 'large' : 'middle'}
              className={screens.md ? 'mt-0' : 'mt-7'}
            >
              кейсы в instagram
            </Button>
          </motion.div>
        </motion.div>

        <div className='flex justify-between items-start xy:flex-col sd:flex-row'>
          {/* <p className='text-gray-400 xy:mb-0 uppercase text-xs'>психолог мария ирзунова Ⓒ 2015-2023</p> */}
          <p className="
      font-poppins
      font-normal
      text-center
      sm:text-[14px]
      xy:text-[10px]
      leading-[27px]
      text-gray-400
      mt-0
      ">
            Copyright Ⓒ 2015-2023. Разработка и продвижение
            <a href="https://vi-tech.by" className="text-gradient text-cyan-400" target="_blank">{' '}VI:TECH</a> &nbsp;
          </p>
        </div>
      </div>
    </section>
  )
}
