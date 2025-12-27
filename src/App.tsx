import { ChangeEvent, useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

export type InvestmentInput = {
  initialInvestment: number,
  annualInvestment: number,
  expectedReturn: number,
  duration: number,
}

const App: React.FC = () => {

  const [userInput, setUserInput] = useState<InvestmentInput>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier: keyof InvestmentInput, newValue: string) {
    setUserInput(prevUserInput => {

      // console.log(prevUserInput);

      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  )
}

export default App
