import EmptyData from '../../assets/emptyData/noData.avif';
import './styles.scss';

const NoData = ({ message }) => {
    return (
        <div className='noData'>
            <img src={EmptyData} alt='No Data Icon' />
            <h3>{message}</h3>
        </div>
    )
}

export default NoData;
