import './styles.scss';

const Table = ({
    head,
    body,
    title
}) => {
    if (!body.length) return null;
    
    return (
        <>
            {title && <h3>{title}</h3>}
            <table>
                <thead>
                    <tr>
                        {head.map(column => {
                            const { _id, label } = column;
                            return <th key={_id}>{label}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {body.map(item => {
                        const { _id, personId, name, month, points, paymentSum, total } = item;
                        return (
                            <tr key={_id}>
                                <td>{personId}</td>
                                <td>{name}</td>
                                {month && <td>{month}</td>}
                                {paymentSum && <td>{paymentSum}</td>}
                                {points >= 0 && <td>{points}</td>}
                                {total >= 0 && <td>{total}</td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};

export default Table;
