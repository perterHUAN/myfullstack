function StatisticLine({ text, data }) {
    return <p>{text}: {data} {text === 'positive' ? '%':''}</p>;
}

export default StatisticLine;