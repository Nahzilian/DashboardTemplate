const Sidebar = ({active = 0, children = null}) => {
    return ( <div className="container-fluid">
    <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <i className="bi-bootstrap fs-4"></i>
                </a>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                    <li className="nav-item">
                        <a href="/" className={`nav-link py-3 px-4  py-sm-2 px-sm-3 ${active === 0? 'active-icon': ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-house fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/logs" className={`nav-link py-3 px-4  py-sm-2 px-sm-3 ${active === 1? 'active-icon': ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi-table fs-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/charts" className={`nav-link py-3 px-4  py-sm-2 px-sm-3 ${active === 2? 'active-icon': ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <i className="bi-bar-chart-line fs-4"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-sm p-3 min-vh-100">
            {children}
        </div>
    </div>
</div> );
}
 
export default Sidebar;