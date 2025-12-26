import { ChangeEvent, useState } from 'react';


const UserInput: React.FC = () => {

    type InvestmentInput = {
        initialInvestment: number,
        annualInvestment: number,
        expectedReturn: number,
        duration: number,
    }

    const [userInput, setUserInput] = useState<InvestmentInput>({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

    function handleChange(inputIdentifier: string, newValue: string) {
        setUserInput(prevUserInput => {

            console.log(prevUserInput);

            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleChange('initialInvestment', event.target.value)
                    }
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleChange('annualInvestment', event.target.value)
                    }
                />
            </p>
        </div>

        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleChange('expectedReturn', event.target.value)
                    }
                />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleChange('duration', event.target.value)
                    }
                />
            </p>
        </div>
    </section>
}

export default UserInput