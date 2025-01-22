'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import jackpot from '@/assets/svg/jackpot.svg' // Assuming this is your SVG asset path
import FlipNumber from '../CountdownTimer/CountdownTimer'

const Jackpot = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  // const [countdown, setCountdown] = useState(60)
  // Function to toggle the expansion state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="max-w-md mx-auto rounded-lg border-4 border-[#f79832] bor mt-10">
      {/* Jackpot Image */}
      <div className="relative cursor-pointer" onClick={toggleExpansion}>
        <Image
          src={jackpot} // Ensure the image path is correct
          alt="jackpot"
          width={400}
          height={200}
          className="w-full h-auto rounded-t-lg"
        />
        {/* Optional hover effect */}
        <div className="absolute inset-0 bg-black opacity-20 rounded-t-lg"></div>
      </div>

      {/* Rules section: This appears when expanded */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        {isExpanded && (
          <div className=" p-5 bg-gradient-to-b from-[#3f3f46] to-[#18181b] rounded-b-md">
            <div className="text-white text-center rounded-lg border border-[#f79832]  bg-[black] flex flex-col divide-y divide-[#f79832] rounded-b-lg ">
              <div className="flex justify-between items-center rounded-t-lg bg-[#222] py-3 px-2">
                <span>HOURLY</span>
                <FlipNumber />
              </div>
              <div className="flex justify-between items-center bg-[#222] py-3 px-2">
                <span>DAILY</span>
                <FlipNumber />
              </div>
              <div className="flex justify-between items-center bg-[#222] py-3 px-2">
                <span>WEEKLY</span>
                <FlipNumber />
              </div>
              <div className="flex justify-between items-center rounded-b-lg bg-[#222] py-3 px-2">
                <span>MONTHLY</span>
                <FlipNumber />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Jackpot
