/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react'
import StickyNavigation from '../ui/stickyNavigation/StickyNavigation'
import { buttons } from '../ui/stickyNavigation/Buttons'
import PrizesModalCard from '../ui/Modalnfo/PrizesModalCard'
import BonusesModalCard from '../ui/Modalnfo/BonusesModalCard'
import WeeklyReward from '../ui/WeeklyReward/WeeklyReward'
import LuckyWheel from '../ui/LuckyWheel/LuckyWheel'
import QuestOfTheDay from '../ui/QuestOfTheDay/QuestOfTheDay'
import ExtraCashback from '../ui/ExtraCashback/ExtraCashback'
import Modal from '../ui/Modal'
import Stake from '../ui/stake/Stake'
import Jackpot from '../ui/Jackpot/Jackpot'
import PlayButton from '../ui/Button/PlayButton'

const Game = () => {
  const [isLoading, setIsLoading] = useState(false)
  const rotationSpeed = 2
  const [initialValue, setInitialValue] = useState(0) // track initial face values

  // its fake api
  const mockApiCall = () => {
    return new Promise<{ wheelValue: number }>((resolve) => {
      setTimeout(() => {
        const randomWheelValue = Math.floor(Math.random() * 6) + 1 // Generates a number between 1 and 6
        resolve({ wheelValue: randomWheelValue })
      }, 2000)
    })
  }

  // have to place bet function here
  const handleBetClick = async () => {
    setIsLoading(true)
    try {
      const { wheelValue } = await mockApiCall()
      setInitialValue(wheelValue)
      // setInitialValue(1)
    } catch (error) {
      // console.log('Failed to retrieve dice points.', error)
    } finally {
      setIsLoading(false)
    }
  }

  const [activeButton, setActiveButton] = useState<string>('group1')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = (id: string) => {
    setActiveButton(id)
    setIsModalOpen(true) // Open the modal when a button is clicked
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // setActiveButton(null)
  }

  const buttonList = buttons(activeButton, handleButtonClick)

  // Define content based on the active button
  const renderModalContent = () => {
    switch (activeButton) {
      case 'group1':
        return <PrizesModalCard />
      case 'group2':
        return <BonusesModalCard />
      case 'group3':
        return <WeeklyReward />
      case 'group4':
        return <LuckyWheel />
      case 'group5':
        return <QuestOfTheDay />
      case 'group6':
        return <ExtraCashback />
      case 'group7':
        return null
      default:
        return null
    }
  }

  const handleStakeSelect = (value: any) => {
    console.log('Selected Stake:', value)
  }

  return (
    <div className="h-full flex  items-center justify-between">
      <div className="w-[10%]">
        <Stake onSelect={handleStakeSelect} />
        <PlayButton />
      </div>
      {/* <div className="cursor-pointer w-full">
        <Jackpot />
      </div> */}
      <div className="w-[20%]">
        <StickyNavigation
          buttons={buttonList}
          bgColor="#1D2900"
          onButtonClick={handleButtonClick}
        />
      </div>


      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} size="1100px">
          {renderModalContent()}
        </Modal>
      )}
    </div>
  )
}

export default Game
