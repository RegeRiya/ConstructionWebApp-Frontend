const displayTable = (rows: any[]) =>
{ return(
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
                { 
                rows.map((row, i) => {
                    //add different field names (discard quotes)
                    return (
                        <tr key={i}>
                            <td>{row.projectName}</td>
                            <td>{row.description}</td>
                            <td>{row.startDate}</td>
                            <td>{row.endDate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
)
};
export default displayTable;