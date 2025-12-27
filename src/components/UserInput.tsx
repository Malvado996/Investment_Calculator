import { ChangeEvent } from 'react';

type InvestmentInput = {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
};

type UserInputProps = {
    userInput: InvestmentInput;
    onChange: (identifier: keyof InvestmentInput, value: string) => void;
}


const UserInput: React.FC<UserInputProps> = ({ userInput, onChange }) => {



    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onChange('initialInvestment', event.target.value)
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
                        onChange('annualInvestment', event.target.value)
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
                        onChange('expectedReturn', event.target.value)
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
                        onChange('duration', event.target.value)
                    }
                />
            </p>
        </div>
    </section>
}

export default UserInput