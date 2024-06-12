
const CreateProjectComponent= (formdata: {
    endDate: string | number | readonly string[] | undefined; projectName: string | number | readonly string[] | undefined; decsription: string | number | readonly string[] | undefined; startDate: string | number | readonly string[] | undefined; 
}) => {

    return(
<form>
    <div>
        <label>
            Project Name:
            <input
                type="text"
                name="firstName"
                value={formdata.projectName}
            />
        </label>
    </div>
    <div>
        <label>
            Decsription:
            <input
                type="text"
                name="lastName"
                value={formdata.decsription}
            />
        </label>
    </div>
    <div>
        <label>
            Start Date:
            <input
                type="date"
                name="startDate"
                value={formdata.startDate}
            />
        </label>
    </div>
    <div>
        <label>
            End Date:
            <input
                type="date"
                name="endDate"
                value={formdata.endDate}
            />
        </label>
    </div>
    <button type="submit">Submit</button>
</form>);
}
export default CreateProjectComponent;