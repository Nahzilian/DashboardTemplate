const Card = ({ children = null, grid = 0, xs = false, sm = false, md = false, lg = false, xl = false, className = null }) => {
    const breakpoint = `${xs ? "-xs" : sm ? "-sm" : md ? "-md" : lg ? "-lg" : xl ? "-xl" : ''}`
    const gridClass = `col${breakpoint}${grid === 0 ? '' :'-' + grid.toString()}`
    return (
        <div className={`card p-2 ${className || gridClass}`}>
            <div className="content p-3">{children}</div>
        </div>
    );
}

export default Card;