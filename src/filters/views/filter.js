import { FilterTypes } from '../../constants.js'

const Filter = () => {
    return (
        <p className='filters'>
            <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
            <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
            <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
        </p>
    );
};

const Link = ({ active, children, onClick }) => {
    if(active) {
        return (
            <b className="filter selected">{children}</b>
        )
    }else {
        return (
            <a 
                href='#'
                className="filter not-selected"
                onClick={
                    (ev) => {
                        ev.preventDefault();
                        onClick()
                    }
                }
            >
                {children}
            </a>
        )
    }
}