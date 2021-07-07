const Table = ({ data = null }) => {
    return (
        <div>
            <table class="table table-light table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? data.map((row, index) =>
                        <tr key={index}>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>) : null}

                </tbody>
            </table>
        </div>
    );
}

export default Table;