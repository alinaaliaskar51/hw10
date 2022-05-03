import './DataList.css'

const DataList = props => {
    return (
        <div className='data-list'>
        <div>{props.text}</div>
        <div>{props.text2}</div>
        <div>{props.text3}</div>
        </div>
    )
}

export default DataList