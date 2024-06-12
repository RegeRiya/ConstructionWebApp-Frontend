
'./App.css'


const displayTable = (rows: any[]) =>
(
    <div className="container">
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => {
                    return (
                        <tr key={i}>
                            <td>{row.ProjectName}</td>
                            <td>{row.ProjectName}</td>
                            <td>{row.ProjectName}</td>
                            <td>{row.ProjectName}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);
export default displayTable;