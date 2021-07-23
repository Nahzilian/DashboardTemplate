const levelIcon = {
    info: "bi-info-circle",
    warning: "bi-exclamation-circle",
    error: "bi-exclamation-circle",
    success: "bi-check-circle"
}

const Alerts = ({ level = "info", children, open = false, onClose = () => {} }) => {
    return (
    <div className={`row alert alert-${level} ${open ? 'active-alert' : ''}`} role="alert">
        <div className="col-1">
            <i style={{fontSize: 20}} className={`bi ${levelIcon[level]}`}/>
        </div>

        <div className="col" style={{display: 'grid', alignItems: 'center'}}>
            {children}
        </div>

        <div className="col-1">
            <i style={{cursor: "pointer", fontSize: 25}} className="bi bi-x" onClick={onClose}/>
        </div>
    </div>)
}

export default Alerts;