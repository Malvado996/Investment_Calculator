import type { InvestmentInput } from '../App'

type ResultsProps = {
    input: InvestmentInput;
}

const Results: React.FC<ResultsProps> = ({ input }) => {

    console.log(input);
    return (
        <section id='results'>
            <h2>Results...</h2>
            <p>Investment data received:</p>
            <pre>{JSON.stringify(input, null, 2)}</pre>
        </section>
    )
}

export default Results